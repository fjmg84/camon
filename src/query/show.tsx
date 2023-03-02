import { gql } from "@apollo/client";

export const GET_BOOK_ALL = gql`
  query {
    booksCollection(first: 100) {
      edges {
        node {
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
  }
`;

export const GET_BOOK_BY_ID = gql`
  query bookByID($ids: ID) {
    books(by: { id: $ids }) {
      id
      title
      author
      year
      cover
      description
      ISBN
    }
  }
`;
