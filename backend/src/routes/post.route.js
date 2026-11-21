import { Router } from "express";

import {
    createPost,
    getPosts,
    updatePost,
    deletePost
} from "../controllers/post.controller.js";

const router = Router();

// Create a post
router.post("/create", createPost);

// Get all posts
router.get("/getPosts", getPosts);

// Update a post
router.patch("/update/:id", updatePost);

// Delete a post
router.delete("/delete/:id", deletePost);

export default router;
