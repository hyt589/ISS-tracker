const express = require("express")
const path = require("path")

const app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, "index.html")

const port = 3000

app.use(express.static(DIST_DIR))

app.get("/", (req, res) => {
  res.sendFile(HTML_FILE)
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
