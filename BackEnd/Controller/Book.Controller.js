/** @format */

import Book from "../model/Book.modal.js";

export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal Server Error" });
  }
};
