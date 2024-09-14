export interface BlogData {
  title: string;
  description: string;
  date: string;
  coverImage: {
    alt: string;
    src: string;
  };
  tags: { title: string }[];
}
