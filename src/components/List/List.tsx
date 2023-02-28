import Image from "next/image";
import { ButtonDelete, ButtonEdit } from "./styled";
import styles from "./styles.module.css";
import books from "../../mocks/data";

export const List = () => {
  const deleteBook = (id: number) => {
    console.log(id);
  };

  const editBook = (id: number) => {
    console.log(id);
  };

  return (
    <>
      <h1>List of the Books</h1>
      <div className={styles.content}>
        {books.map((book) => {
          const { id, title, cover, author, year, ISBN, description } = book;
          return (
            <div key={id} className={styles.book}>
              <div className={styles.image_content}>
                {cover && (
                  <Image
                    className={styles.image}
                    alt={cover}
                    src={cover}
                    width={100}
                    height={200}
                    priority
                  />
                )}
              </div>

              <ul className={styles.data_book}>
                <li>
                  <h6>Title:</h6>
                  <span>{title}</span>
                </li>
                <li>
                  <h6>Author:</h6>
                  <span>{author}</span>
                </li>
                <li>
                  <h6>Year:</h6>
                  <span>{year}</span>
                </li>
                <li>
                  <h6>ISBN:</h6>
                  <span>{ISBN}</span>
                </li>
                <li>
                  <h6>Description:</h6>
                  <span>{description}</span>
                </li>
              </ul>

              <div className={styles.buttons}>
                <ButtonEdit onClick={() => editBook(id)}>Edit</ButtonEdit>
                <ButtonDelete onClick={() => deleteBook(id)}>
                  Delete
                </ButtonDelete>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
