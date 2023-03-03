import { useState, useEffect } from "react";
import List from "@/components/List/List";
import { useQuery } from "@apollo/client";
import { GET_BOOK_ALL } from "@/query/show";
import { PageLayout } from "@/components/PageLayout/Layout";
import { StyledLink } from "@/components/styled/Link";

export default function Home() {
  const [books, setBooks] = useState([]);
  const { loading, error, data } = useQuery(GET_BOOK_ALL);

  useEffect(() => {
    if (data !== undefined && loading === false) {
      const listBooks = data?.booksCollection?.edges?.map(
        (book: any) => book.node
      );
      setBooks(listBooks);
    }
  }, [data, loading]);

  return (
    <>
      <PageLayout title="List of the Book" />

      <main>
        <section>
          <StyledLink href="/create">Create book</StyledLink>
        </section>
        <article>
          <List books={books} />
        </article>
      </main>
    </>
  );
}
