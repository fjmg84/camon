export interface Book {
    id: number;
    title: string;
    author: string;
    year: number;
    cover: string;
    ISBN: null;
    description: string;
  }
  
export type Books = Book[];