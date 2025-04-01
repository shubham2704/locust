const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// GET API - Returns some sample data
app.get("/api/data", (req, res) => {
    console.log({ message: "Hello, this is sample data!", timestamp: new Date().toISOString() })
    res.json({ message: "Hello, this is sample data!", timestamp: new Date().toISOString() });
});

// POST API - Accepts JSON input and returns a response
app.post("/api/submit", (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: "Name and Email are required" });
    }
    console.log({ message: "Data received successfully", receivedData: req.body })
    res.json({ message: "Data received successfully", receivedData: req.body });
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
