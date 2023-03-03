import { useState, useEffect, useRef, FormEvent } from "react";
import Image from "next/image";
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
  handleImage,
}: ICover) {
  const [srcImage, setSrcImage] = useState(url);

  const btnOnChange: any = useRef();

  useEffect(() => {
    if (url) setSrcImage(url);
  }, [url]);

  const handleClick = () => {
    btnOnChange?.current?.click();
  };

  const handleOnChange = (e: any) => {
    const file = e.target.files[0];
    setSrcImage(URL.createObjectURL(file));
    if (handleImage) {
      if (url) handleImage({ variables: { id: idBook, cover: url } });
      else
        handleImage({
          variables: { cover: "http://localhost:3000/images/cover.jpg" },
        });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        {srcImage && (
          <Image
            alt={(alt ??= "")}
            src={srcImage}
            width={width}
            height={height}
            priority
            className={`${(style ??= "")} ${styles.img}`}
          />
        )}
      </div>
      {edit && (
        <div className={styles.input}>
          <ButtonSelectImage onClick={() => handleClick()}>
            Select Image
          </ButtonSelectImage>
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
