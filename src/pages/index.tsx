import { useState, useEffect } from "react";
import Head from "next/head";
import List from "@/components/List/List";
import { useQuery } from "@apollo/client";
import { GET_BOOK_ALL } from "@/query/show";

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
      <Head>
        <title>List of the Book</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <List books={books} />
      </main>
    </>
  );
}
