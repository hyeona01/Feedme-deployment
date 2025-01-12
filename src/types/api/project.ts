export type ProjectRequest = {
  title: String;
  content: String;
};

export type ProjectIdResponse = { cryptography_project_id: string };

export type ProjectDetailResponse = {
  reports: {
    title: string;
    content: string;
  };
  evaluations: [
    {
      id: number;
      nickname: string;
    },
  ];
};
