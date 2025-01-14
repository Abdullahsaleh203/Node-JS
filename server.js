import express from "express";
import cors from "cors";
import notesRouter from "./router/noteRoute.js";

// `process.env.PORT` is used to get the port number from the environment
const PORT = process.env.PORT || 3000;

// Create an express app
const app = express();

// Middleware
app.use(express.json());
// Middleware to parse incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: false }));
// Middleware to enable CORS
app.use(cors());

// Routes
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Use the notes router for all routes starting with /notes
app.use("/api/v1", notesRouter);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
