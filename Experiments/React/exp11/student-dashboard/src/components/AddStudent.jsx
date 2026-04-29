import { useState } from "react";

function AddStudent({ students, setStudents }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (name.trim() === "") {
      alert("Please enter student name");
      return;
    }

    // Add student
    setStudents([...students, name]);

    // Clear input
    setName("");

    alert("Student Added Successfully!");
  };

  return (
    <div>
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddStudent;