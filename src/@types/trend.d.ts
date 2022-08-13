type Source = {
  id: null;
  name: string;
};

export type Article = {
  author?: string;
  description: string;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage?: string;
  source: Source;
};

export type Trends = {
  articles: Article[];
  status: string;
  totalResults: number;
  code: string;
  message: string;
};
