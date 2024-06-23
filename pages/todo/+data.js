// https://vike.dev/data
import { lowDb } from "../../database/todoItems.js";

export default async function data() {
  lowDb.read();
  return lowDb.data;
}
