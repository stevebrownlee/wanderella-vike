import { lowDb } from "../database/todoItems.js";

export async function createTodoHandler(request, _context) {
    const newTodo = await request.json()

    lowDb.update(({ todo }) => todo.push({ id: todo.length + 1, text: newTodo.text }));

    return new Response(JSON.stringify({ status: "OK" }), {
        status: 200,
        headers: {
            "content-type": "application/json",
        },
    });
}
