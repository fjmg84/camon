import { gql } from "@apollo/client";

export const DELETE_BOOK_FORM = gql`
mutation deleteBookById($id: ID){
  booksDelete(by: { id: $id }){
    deletedId
  }
}
`;