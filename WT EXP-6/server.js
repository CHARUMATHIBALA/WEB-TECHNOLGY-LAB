const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/placement', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Connection error:", err));

// Mongoose Schema
const studentSchema = new mongoose.Schema({
    roll_no: String,
    name: String,
    email: String,
    personal_mail: String,
    temp_address: String,
    perm_address: String,
    mobile_no: String,
    whatsapp_no: String,
    parent_name: String,
    parent_mobile: String,
    sslc_mark: String,
    sslc_board: String,
    hsc_mark: String,
    hsc_board: String,
    diploma_mark: String,
    sem1_gpa: String,
    sem1_cgpa: String,
    sem2_gpa: String,
    sem2_cgpa: String,
    sem3_gpa: String,
    sem3_cgpa: String,
    history_arrears: String,
    standing_arrears: String,
    projects_done: String,
    github: String,
    leetcode_id: String,
    leetcode_dashboard: String,
    leetcode_solved: String,
    other_platforms_solved: String,
    certifications: String,
    internships: String,
    languages: String
});

const Student = mongoose.model('Student', studentSchema);

// Routes

// Register (Create)
app.post('/register', async (req, res) => {
    try {
        const existing = await Student.findOne({ roll_no: req.body.roll_no });
        if (existing) return res.json({ success: false, message: "Roll number already exists!" });

        const student = new Student(req.body);
        await student.save();
        res.json({ success: true, message: "Registered successfully" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// Read (By Roll No)
app.get('/user/:roll_no', async (req, res) => {
    try {
        const user = await Student.findOne({ roll_no: req.params.roll_no });
        if (!user) return res.json({ success: false, message: "User not found" });
        res.json({ success: true, user });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// Delete (By Roll No)
app.delete('/delete/:roll_no', async (req, res) => {
    try {
        const result = await Student.deleteOne({ roll_no: req.params.roll_no });
        if (result.deletedCount === 0) return res.json({ success: false, message: "User not found" });
        res.json({ success: true, message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// Start Server
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
