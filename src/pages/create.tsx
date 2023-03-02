import Head from "next/head";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import Form from "@/components/Common/Form/Form";
import Cover from "@/components/Common/Cover/Cover";
import { CREATE_BOOK } from "@/query/create";
import styles from "../styles/Create.module.css";

export default function Home() {
  const [createBook, {loading, data}] = useMutation(CREATE_BOOK);

  if(data !== undefined && !loading) alert("Book created successfully")

  return (
    <>
      <Head>
        <title>Create Book</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link href="/"><h2>Return</h2></Link>
        <div className={styles.container}>
          <Cover
            url={undefined}
            alt={undefined}
            handleImage={createBook}
            edit={true}
          />
          <Form type={"create"} handleAction={createBook} />
        </div>
      </main>
    </>
  );
}