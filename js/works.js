/**
 * Галерея «Слухи»
 *
 * Как добавить фото:
 * 1. Положите файл в папку images, например images/clothing/01.jpg
 * 2. Впишите путь в src и короткое описание в alt.
 * 3. Поля:
 *    title    — подпись под карточкой
 *    category — "clothing" (одежда) или "painting" (открытка)
 *    span     — ширина на большом экране, от 4 до 8 (в сумме ряд стремится к 12)
 *    ratio    — "portrait", "landscape" или "tall"
 *    shift    — true, если карточку нужно опустить чуть ниже соседней
 *
 * Пустой src оставляет акварельную заглушку, пока фото нет.
 * Если путь указан, но файла нет, заглушка вернётся сама.
 */
const WORKS = [
  {
    title: "Одежда",
    category: "clothing",
    src: "",
    alt: "",
    span: "7",
    ratio: "landscape",
  },
  {
    title: "Открытка",
    category: "painting",
    src: "",
    alt: "",
    span: "5",
    ratio: "portrait",
    shift: true,
  },
  {
    title: "Одежда",
    category: "clothing",
    src: "",
    alt: "",
    span: "4",
    ratio: "tall",
  },
  {
    title: "Открытка",
    category: "painting",
    src: "",
    alt: "",
    span: "8",
    ratio: "landscape",
  },
  {
    title: "Одежда",
    category: "clothing",
    src: "",
    alt: "",
    span: "5",
    ratio: "portrait",
    shift: true,
  },
  {
    title: "Открытка",
    category: "painting",
    src: "",
    alt: "",
    span: "7",
    ratio: "landscape",
  },
];
