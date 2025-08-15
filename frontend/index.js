const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Example route calling Flask API
app.get("/test-api", async (req, res) => {
  try {
    const response = await axios.get("http://127.0.0.1:5000/api/echo?msg=fromExpress");
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Express frontend running at http://127.0.0.1:${PORT}`);
});
