// app.js
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`🎮 Gaming site running at http://localhost:${PORT}`);
});
