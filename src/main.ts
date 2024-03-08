import express from "express";

const app = express();
const PORT = process.env.PORT || 3000; // PORT is defined in .env file

app.get("/", (req, res) => {
    res.send("Hello, TypeScript with Express!");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
