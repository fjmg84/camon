import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Edit from "@/components/Edit/Edit";
import { useQuery } from "@apollo/client";
import { GET_BOOK_BY_ID } from "@/query/show";
import { Book } from "@/components/interfaces/Book";
import { PageLayout } from "@/components/PageLayout/Layout";
import { StyledLink } from "@/components/styled/Link";

export default function Update() {
  const [book, setBook] = useState<Book>();
  const { id } = useRouter().query;
  const { loading, error, data } = useQuery(GET_BOOK_BY_ID, {
    variables: { ids: id },
  });

  useEffect(() => {
    if (data !== undefined && loading === false) {
      const { books } = data;
      setBook(books);
    }
  }, [data, loading]);

  return (
    <>
      <PageLayout title="Edit Book" />
      <main>
        <section>
          <StyledLink href="/">Return to home</StyledLink>
        </section>
        <article>
          <Edit book={book} />
        </article>
      </main>
    </>
  );
}
