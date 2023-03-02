import { gql } from "@apollo/client";

export const CREATE_BOOK = gql`
mutation(
    $cover: String
    $title: String!, 
    $author: String!,
    $year: Int!,
    $description: String,
    $ISBN: String) {
    booksCreate(
      input: {
        title: $title,
        author: $author,
        cover: $cover,
        year: $year,
        description: $description,
        ISBN: $ISBN
      }
    ) {
      books {
        id
        title
        author
        cover
        year
        description
        ISBN
      }
    }
  }

`;

