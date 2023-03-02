import { Book } from "@/components/interfaces/Book";
import styles from "./styles.module.css";
import { useMutation } from "@apollo/client";
import { UPDATE_BOOK_FORM } from "@/query/update";
import Cover from "../Common/Cover/Cover";
import Form from "../Common/Form/Form";

const Edit = ({ book }: { book: Book | undefined }) => {

  const [updateBookForm, { loading, error, data }] = useMutation(UPDATE_BOOK_FORM);

  return (
    <>
      <h1>Edit Book</h1>
      <div className={styles.container}>
        <Cover idBook={book?.id} url={book?.cover} alt={book?.cover} edit={true} />
        <Form handleAction={updateBookForm} book={book} />
      </div>
    </>
  );
};

export default Edit;
