import { useState, useEffect, useRef, FormEvent } from "react";
import Image from "next/image";
import { useMutation } from "@apollo/client";
import { UPDATE_BOOK_IMAGE } from "@/query/update";
import styles from "./styles.module.css";
import { ICover } from "@/components/interfaces/Cover";
import { ButtonSelectImage } from "@/components/styled/Buttons";

export default function Cover({
  idBook,
  url,
  alt,
  edit = false,
  style,
  width = 200,
  height = 400,
}: ICover) {
  const [srcImage, setSrcImage] = useState(url);
  const [updateBookImage, { loading, error, data }] =
    useMutation(UPDATE_BOOK_IMAGE);

  const btnOnChange = useRef();

  useEffect(() => {
    setSrcImage(url);
  }, [url]);

  const handleClick = () => {
    btnOnChange?.current?.click();
  };

  const handleOnChange = (e: any) => {
    const file = e.target.files[0];
    setSrcImage(URL.createObjectURL(file));
    updateBookImage({ variables: { id: idBook, cover: url } });
  };

  return (
    <div className={styles.container}>
      {srcImage && (
        <div className={styles.image}>
          <Image
            alt={(alt ??= "")}
            src={srcImage}
            width={width}
            height={height}
            priority
            className={`${(style ??= "")} ${styles.img}`}
          />
        </div>
      )}
      {edit && (
        <div className={styles.input}>
          <ButtonSelectImage onClick={() => handleClick()}>Select Image</ButtonSelectImage>
          <input
            ref={btnOnChange}
            type="file"
            onChange={(e) => handleOnChange(e)}
            hidden
          />
        </div>
      )}
    </div>
  );
}
