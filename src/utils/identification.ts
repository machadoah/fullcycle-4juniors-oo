import { customAlphabet } from "nanoid";

export type NanoID = string;

const firstChar = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 1);

const otherChars = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 8);

export const generateId = (): NanoID => {
  return firstChar() + otherChars();
};
