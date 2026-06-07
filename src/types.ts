export interface Tool {
  id: string;
  title: string;
  description: string;
  category: string;
  outcome: string;
  path: string;
  featured?: boolean;
}

export type Category = string;
