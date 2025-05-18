document.addEventListener("DOMContentLoaded", () => {
    const studentForm = document.getElementById("studentForm");
    const biodataForm = document.getElementById("biodataForm");

    // Handle Student Form Submission
    if (studentForm) {
        studentForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const isValid = validateFields([
                "name", "reg", "pro", "branch", "from", "to"
            ]);

            if (isValid) {
                const data = collectData([
                    "name", "reg", "pro", "branch", "from", "to"
                ]);
                console.log("Student Record Submitted:", data);
                alert("✅ Student record submitted successfully!");
                studentForm.reset();
            } else {
                alert("⚠️ Please fill all fields in the Student Record form.");
            }
        });
    }

    // Handle Biodata Form Submission
    if (biodataForm) {
        biodataForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const isValid = validateFields([
                "bname", "dob", "email", "address", "mobile"
            ]);

            if (isValid) {
                const data = collectData([
                    "bname", "dob", "email", "address", "mobile"
                ]);
                console.log("Biodata Submitted:", data);
                alert("✅ Biodata submitted successfully!");
                biodataForm.reset();
            } else {
                alert("⚠️ Please fill all fields in the Biodata form.");
            }
        });
    }
});

// Validate multiple fields
function validateFields(ids) {
    let allFilled = true;
    ids.forEach(id => {
        const field = document.getElementById(id);
        if (!field || field.value.trim() === "") {
            field.style.border = "2px solid red";
            allFilled = false;
        } else {
            field.style.border = "1px solid #ccc";
        }
    });
    return allFilled;
}

// Collect form data into an object
function collectData(ids) {
    const data = {};
    ids.forEach(id => {
        const field = document.getElementById(id);
        if (field) data[id] = field.value.trim();
    });
    return data;
}
