import { useRouter } from "next/router";
import { Books } from "@/components/interfaces/Book";
import Cover from "../Common/Cover/Cover";
import { DELETE_BOOK_FORM } from "@/query/delete";
import { useMutation } from "@apollo/client";
import { ButtonDelete } from "../styled/Buttons";
import { StyledLink } from "../styled/Link";
import styles from "./styles.module.css";
import Details from "../Common/Details/Details";

const List = ({ books }: { books: Books }) => {
  const { reload } = useRouter();
  const [deleteBookById, { loading, data }] =
    useMutation(DELETE_BOOK_FORM);

  if (data !== undefined && !loading) {
    alert("Delete book successfully")
    reload();
  }

  const deleteBook = (id: string | undefined) => {
    if (id) deleteBookById({ variables: { id } });
  };

  return (
    <>
      <h1>List of the Books</h1>
      {loading && <h1>Loading Data...</h1>}
      {books.length > 0 && !loading ? (
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
                  <Details
                    id={id}
                    title={title}
                    author={author}
                    year={year}
                    ISBN={ISBN}
                    description={description}
                  />
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
      ) : (
        <h2>Books not found</h2>
      )}
    </>
  );
};

export default List;
