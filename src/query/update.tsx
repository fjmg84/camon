import { gql } from "@apollo/client";

export const UPDATE_BOOK_FORM = gql`
  mutation updateBookForm(
    $id: ID
    $title: String
    $author: String
    $description: String
    $year: Int
    $ISBN: String
  ) {
    booksUpdate(
      by: { id: $id }
      input: {
        title: $title
        author: $author
        description: $description
        year: { set: $year }
        ISBN: $ISBN
      }
    ) {
      books {
        id
        title
        author
        year
        description
        ISBN
      }
    }
  }
`;

export const UPDATE_BOOK_IMAGE = gql`
  mutation updateBookImage(
    $id: ID
    $cover: String
  ) {
    booksUpdate(
      by: { id: $id }
      input: {
        cover: $cover
      }
    ) {
      books {
        id
        cover
      }
    }
  }
`;
