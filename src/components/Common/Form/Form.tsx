import { Book } from "@/components/interfaces/Book";
import { useForm } from "react-hook-form";
import { InputText, TextArea } from "../../styled/Input";
import { ButtonEdit } from "../../styled/Buttons";
import styles from "./styles.module.css";

export default function Form({
  type,
  book,
  handleAction,
}: {
  type: "create" | "update";
  book?: Book | undefined;
  handleAction: ({}) => {};
}) {
  const { register, handleSubmit } = useForm<Book>();

  const handleData = (data: Book) => {
    let bookData: Book = {
      cover: "http://localhost:3000/images/cover.jpg",
      title: data.title !== "" ? data.title : book?.title,
      author: data.author !== "" ? data.author : book?.author,
      year: String(data.year) !== "" ? Number(data.year) : book?.year,
      description:
        data.description !== "" ? data.description : book?.description,
      ISBN: data.ISBN ? data.ISBN : book?.ISBN,
    };
    if(type === 'update') bookData.id = book?.id
 
    handleAction({
      variables: bookData,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleData)}>
      <div className={styles.data_book}>
        <InputText
          type="text"
          placeholder="title"
          defaultValue={book?.title}
          {...register("title")}
        />
        <InputText
          type="text"
          placeholder="author"
          defaultValue={book?.author}
          {...register("author")}
        />
        <InputText
          type="number"
          placeholder="year"
          defaultValue={book?.year}
          {...register("year")}
        />
        <TextArea
          rows={5}
          {...register("description")}
          placeholder="description"
          defaultValue={book?.description}
        ></TextArea>
        <InputText
          type="text"
          placeholder="ISBN"
          defaultValue={book?.ISBN === null ? undefined : book?.ISBN}
          {...register("ISBN")}
        />
        <ButtonEdit type="submit">
          {type === "update" ? "Update" : "Create"}
        </ButtonEdit>
      </div>
    </form>
  );
}
