import { Book } from "@/components/interfaces/Book";
import { useForm } from "react-hook-form";
import { InputText, TextArea } from "../../styled/Input";
import { ButtonEdit } from "../../styled/Buttons";
import styles from "./styles.module.css";

export default function Form({
  handleAction,
  book,
}: {
  handleAction: ({}) => any;
  book: Book | undefined;
}) {
  const { register, handleSubmit } = useForm<Book>();

  const handleData = (data: Book) => {
    const bookData = {
      id: book?.id,
      title: data.title !== "" ? data.title : book?.title,
      author: data.author !== "" ? data.author : book?.author,
      year: String(data.year) !== "" ? Number(data.year) : book?.year,
      description:
        data.description !== "" ? data.description : book?.description,
      ISBN: data.ISBN !== "" ? data.ISBN : book?.ISBN,
    };

    handleAction({
      variables: bookData,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleData)}>
      <div className={styles.data_book}>
        <InputText
          type="text"
          defaultValue={book?.title}
          {...register("title")}
        />
        <InputText
          type="text"
          defaultValue={book?.author}
          {...register("author")}
        />
        <InputText
          type="number"
          defaultValue={book?.year}
          {...register("year")}
        />
        <TextArea rows={5} {...register("description")} defaultValue={book?.description}>
          
        </TextArea>
        <InputText
          type="text"
          defaultValue={book?.ISBN === null ? undefined : book?.ISBN}
          {...register("ISBN")}
        />
        <ButtonEdit type="submit">Update</ButtonEdit>
      </div>
    </form>
  );
}
