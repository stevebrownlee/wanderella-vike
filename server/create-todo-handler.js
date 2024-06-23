import { lowDb } from "../database/todoItems.js";

export async function createTodoHandler(request, _context) {
  // In a real case, user-provided data should ALWAYS be validated with tools like zod
  const newTodo = await request.json()

  lowDb.update(({ todo }) => todo.push({ text: newTodo.text }));

  return new Response(JSON.stringify({ status: "OK" }), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
