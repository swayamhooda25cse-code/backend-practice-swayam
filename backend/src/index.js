
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

// Load environment variables
dotenv.config({
    path: "./.env"
});

const PORT = process.env.PORT || 4000;

const startServer = async () => {
    try {
        // Connect to MongoDB first
        await connectDB();

        // Start the Express server
        const server = app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

        // Handle server errors
        server.on("error", (error) => {
            console.error("Server error:", error.message);
            process.exit(1);
        });

    } catch (error) {
        console.error("Failed to start server:", error.message);
        process.exit(1);
    }
};

startServer();
