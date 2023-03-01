import { useState, useEffect } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Book } from "@/components/interfaces/Book";
import styles from "./styles.module.css";
import { ButtonEdit } from "../styled/Buttons";
import { InputText } from "../styled/InputText";
import books from "../../mocks/data";

const Edit = ({ id }: { id: number }) => {
  const [book, setBook] = useState<Book>();

  const {
    register,
    handleSubmit,
  } = useForm<Book>();


  useEffect(() => {
    let data: Book = books.filter((book: Book) => book.id === id)[0];
    setBook(data);
  }, [id]);

  const getDataUpdate = (data: Book) => {
    const newData = {
        title: data.title !== '' ? data.title : book?.title,
        author: data.author !== '' ? data.author : book?.author,
        year: String(data.year) !== '' ? data.year : book?.year,
        description: data.description !== '' ? data.description : book?.description,
        ISBN: data.ISBN !== '' ? data.ISBN : book?.ISBN,
        cover: data.cover.length > 0 ? data.cover : book?.cover
    };

    console.log(newData);

  };

  return (
    <>
      <h1>Edit Book</h1>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit(getDataUpdate)}>
          {book?.cover && (
            <div className={styles.image_container}>
              <Image
                alt={book.cover}
                src={book.cover}
                width={200}
                height={400}
                priority
              />
              <input type="file" {...register("cover")} />
            </div>
          )}
          <div className={styles.data_book}>
            <InputText type="text" defaultValue={book?.title} {...register("title")} />
            <InputText type="text" defaultValue={book?.author} {...register("author")} />
            <InputText type="number" defaultValue={book?.year} {...register("year")}/>
            <InputText
              type="text"
              defaultValue={book?.description}
              {...register("description")}
            />
            <InputText
              type="text"
              defaultValue={book?.ISBN === null ? undefined : book?.ISBN}
              {...register("ISBN")}
            />
            <ButtonEdit type="submit">Update</ButtonEdit>
          </div>
        </form>
      </div>
    </>
  );
};

export default Edit