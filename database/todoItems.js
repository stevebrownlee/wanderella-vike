import { JSONFileSyncPreset } from "lowdb/node";

const lowDb = JSONFileSyncPreset("db.json", {
  todo: [{ id: 1, text: "Buy milk" }, { id: 2, text: "Buy strawberries" }],
});

export { lowDb };
