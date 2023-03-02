export interface Book {
    id?: string;
    title?: string;
    author?: string;
    year?: number;
    cover?: string;
    ISBN?: null;
    description?: string;
  }
  
export type Books = Book[];