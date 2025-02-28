import TitleSection from '@/components/Feedback/TitleSection';
import Button from '@/components/Common/Button';
import { HASH_TAG_LIST } from '@/contstants/hashTag';
import AppBar from '@/components/Common/AppBar';
import { useFeedbackStore } from '@/store/feedback';

const FeedbackDetailStep3 = ({
  onChangeStep,
}: {
  onChangeStep: (changeValue: number) => void;
}) => {
  const { feedbackData } = useFeedbackStore();

  const handleNextStep = () => {
    onChangeStep(1);
  };

  return (
    <>
      <AppBar
        theme="dark"
        type="back"
        isProgress={false}
        title={`${feedbackData.nickname}의 피드백`}
        onClickBackButton={() => onChangeStep(-1)}
      />
      <div className="pt-[67px] pb-24 bg-black">
        <TitleSection title="이런 점이 아쉬워요.. 🥹" bgColor="bg-[#FAE1EA]" />
        <main className="w-full p-6">
          <article className="py-7 px-6 rounded-3xl bg-white">
            <div className="btn2 w-fit rounded-[0.5rem] px-2 py-1 bg-black100 text-primary">
              Q1
            </div>
            <p className="pt-3 text-grey600 body2">
              키워드를 최대 5가지 골라주세요!
            </p>
            <h3 className="text-black100 h1">어떤 사람인가요?</h3>
            <div className="flex flex-wrap pt-6 gap-3">
              {HASH_TAG_LIST.filter((value) =>
                feedbackData.negative_tag_ids.includes(value.id),
              ).map((value) => (
                <button
                  className={`flex items-center gap-[6px] py-2 px-3 bg-black rounded-3xl`}
                  key={value.id}
                >
                  <div>🌟</div>
                  <div className={`btn2 text-primary`}>{value.tag}</div>
                </button>
              ))}
            </div>
          </article>
        </main>
        <footer className="flex justify-center w-full fixed bottom-0 left-0 pb-[30px] px-6">
          <div className="w-full max-w-[600px]">
            <Button
              title="다음으로"
              bgColor="bg-black200"
              fontColor="text-white"
              onClick={handleNextStep}
            />
          </div>
        </footer>
      </div>
    </>
  );
};

export default FeedbackDetailStep3;
