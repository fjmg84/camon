import Image from "next/image";
import Link from "next/link";
import { ButtonDelete, ButtonEdit } from "../styled/Buttons";
import { StyledLink } from "../styled/Link";
import styles from "./styles.module.css";
import { Books } from "@/components/interfaces/Book";
import Cover from "../Common/Cover/Cover";

const List = ({ books }: { books: Books }) => {
  const deleteBook = (id: string) => {
    console.log(id);
  };

  return (
    <>
      <h1>List of the Books</h1>
      <div className={styles.container}>
        {books.map((book) => {
          const { id, title, cover, author, year, ISBN, description } = book;
          return (
            <div key={id} className={styles.book}>
              {cover && (
                <Cover
                  style={styles.image}
                  alt={cover}
                  url={cover}
                  width={200}
                  height={400}
                />
              )}

              <div className={styles.box_details}>
                <ul className={styles.details_book}>
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
              </div>

              <div className={styles.buttons}>
                <StyledLink href={`edit/${id}`}>Edit</StyledLink>
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

export default List;
