import { Book } from "@/components/interfaces/Book";
import styles from "./styles.module.css";

const Details = ({ id, title, author, year, ISBN, description }: Book) => {
  return (
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
  );
};

export default Details;
