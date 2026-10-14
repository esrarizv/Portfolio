const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json({ limit: "50kb" }));
app.use(express.static(path.join(__dirname, "public")));

const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

// POST /api/contact - stores messages in data/messages.json
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !isEmail(email || "") || !message) {
    return res.status(400).json({ error: "Name, a valid email and a message are required." });
  }
  const entry = {
    name: String(name).slice(0, 100),
    email: String(email).slice(0, 150),
    message: String(message).slice(0, 2000),
    at: new Date().toISOString(),
  };
  const file = path.join(__dirname, "data", "messages.json");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const list = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : [];
  list.push(entry);
  fs.writeFileSync(file, JSON.stringify(list, null, 2));
  console.log(`New message from ${entry.name} <${entry.email}>`);
  res.json({ ok: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Portfolio running at http://localhost:${PORT}`));
