import express from "express";

const app = express();

app.use(express.json());

// Import routes
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";

// Register API routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

// Health check route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Backend server is running"
    });
});

// Handle unknown routes
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

export default app;
