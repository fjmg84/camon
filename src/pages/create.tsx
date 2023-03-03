import Link from "next/link";
import { useMutation } from "@apollo/client";
import Form from "@/components/Common/Form/Form";
import Cover from "@/components/Common/Cover/Cover";
import { CREATE_BOOK } from "@/query/create";
import styles from "../styles/Create.module.css";
import { PageLayout } from "@/components/PageLayout/Layout";
import { StyledLink } from "@/components/styled/Link";

export default function Home() {
  const [createBook, { loading, data }] = useMutation(CREATE_BOOK);

  if (data !== undefined && !loading) alert("Book created successfully");

  return (
    <>
      <PageLayout title="Create Book" />

      <main>
        <section>
          <StyledLink href="/">Return</StyledLink>
        </section>
        <article>
          <h1 className={styles.title}>Create Books</h1>
          <div className={styles.container}>
            <Cover
              url={undefined}
              alt={undefined}
              handleImage={createBook}
              edit={true}
            />
            <Form type={"create"} handleAction={createBook} />
          </div>
        </article>
      </main>
    </>
  );
}
