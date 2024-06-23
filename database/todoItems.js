import { JSONFileSyncPreset } from "lowdb/node";

const lowDb = JSONFileSyncPreset("db.json", {
  todo: [{ text: "Buy milk" }, { text: "Buy strawberries" }],
});

export { lowDb };
