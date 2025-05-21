import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./db.js"; // Import the db.js file
import mongoose from "mongoose";

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname)));

// Complaint Schema and Model
const ComplaintSchema = new mongoose.Schema({
    name: String,
    studentID: String,
    department: String,
    complaint: String,
    status: { type: String, default: "Pending" },
});

const Complaint = mongoose.model("Complaint", ComplaintSchema);

// API Endpoints
app.post("/api/complaints", async (req, res) => {
    try {
        const complaint = new Complaint(req.body);
        await complaint.save();
        res.status(201).json(complaint);
    } catch (error) {
        res.status(500).json({ error: "Failed to create biodata" });
    }
});

app.get("/api/complaints", async (req, res) => {
    try {
        const complaints = await Complaint.find();
        res.json(complaints);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

app.get("/api/complaints/user/:studentID", async (req, res) => {
    try {
        const complaints = await Complaint.find({ studentID: req.params.studentID });
        res.json(complaints);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch user data" });
    }
});

app.put("/api/complaints/:id", async (req, res) => {
    try {
        const complaint = await Complaint.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(complaint);
    } catch (error) {
        res.status(500).json({ error: "Failed to update data" });
    }
});

app.delete("/api/complaints/:id", async (req, res) => {
    try {
        await Complaint.findByIdAndDelete(req.params.id);
        res.json({ message: "Biodata deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete data" });
    }
});

// Serve HTML Pages
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "register.html"));
});

app.get("/view_complaints", (req, res) => {
    res.sendFile(path.join(__dirname, "view_complaints.html"));
});

app.get("/user_complaints", (req, res) => {
    res.sendFile(path.join(__dirname, "user_complaints.html"));
});

// Start the Server
app.listen(3005, () => console.log("Server running on port 3005"));