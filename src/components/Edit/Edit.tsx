import { Book } from "@/components/interfaces/Book";
import styles from "./styles.module.css";
import { useMutation } from "@apollo/client";
import { UPDATE_BOOK_FORM, UPDATE_BOOK_IMAGE } from "@/query/update";
import Cover from "../Common/Cover/Cover";
import Form from "../Common/Form/Form";

const Edit = ({ book }: { book: Book | undefined }) => {
  const [updateBookForm, {loading, error, data}] = useMutation(UPDATE_BOOK_FORM);
  const [updateBookImage] = useMutation(UPDATE_BOOK_IMAGE);

  if(data !== undefined && !loading) alert("Update book successfully") 

  return (
    <>
      <h1 className={styles.title}>Edit Book</h1>
      <div className={styles.container}>
        <Cover
          handleImage={updateBookImage}
          idBook={book?.id}
          url={book?.cover}
          alt={book?.cover}
          edit={true}
        />
        <Form type={"update"} handleAction={updateBookForm} book={book} />
      </div>
    </>
  );
};

export default Edit;
