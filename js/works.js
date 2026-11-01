/**
 * Галерея «Слухи»
 *
 * Как добавить фото:
 * 1. Положите файл в папку images, например images/clothing/01.jpg
 * 2. Впишите путь в src и короткое описание в alt.
 * 3. Поля:
 *    title    — подпись под карточкой
 *    category — "painting" (роспись), "embroidery" (вышивка) или "miniature" (миниатюры)
 *    span     — ширина на большом экране, от 4 до 8 (в сумме ряд стремится к 12)
 *    ratio    — "portrait", "landscape" или "tall"
 *    shift    — true, если карточку нужно опустить чуть ниже соседней
 *
 * Пустой src оставляет акварельную заглушку, пока фото нет.
 * Если путь указан, но файла нет, заглушка вернётся сама.
 */
const WORKS = [
  {
    title: "Роспись",
    category: "painting",
    src: "",
    alt: "",
    span: "7",
    ratio: "landscape",
  },
  {
    title: "Роспись",
    category: "painting",
    src: "",
    alt: "",
    span: "5",
    ratio: "portrait",
    shift: true,
  },
  {
    title: "Роспись",
    category: "painting",
    src: "",
    alt: "",
    span: "4",
    ratio: "tall",
  },
  {
    title: "Вышивка",
    category: "embroidery",
    src: "",
    alt: "",
    span: "5",
    ratio: "portrait",
  },
  {
    title: "Вышивка",
    category: "embroidery",
    src: "",
    alt: "",
    span: "7",
    ratio: "landscape",
    shift: true,
  },
  {
    title: "Вышивка",
    category: "embroidery",
    src: "",
    alt: "",
    span: "6",
    ratio: "portrait",
  },
  {
    title: "Миниатюра",
    category: "miniature",
    src: "",
    alt: "",
    span: "5",
    ratio: "portrait",
  },
  {
    title: "Миниатюра",
    category: "miniature",
    src: "",
    alt: "",
    span: "7",
    ratio: "landscape",
    shift: true,
  },
  {
    title: "Миниатюра",
    category: "miniature",
    src: "",
    alt: "",
    span: "4",
    ratio: "tall",
  },
];
