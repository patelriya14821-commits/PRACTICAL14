import React, { useState } from "react";

 function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /><br />

        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <label>Course: </label>
        <input
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Register</button>
      </form>

      {submitted && (
        <div>
          <h3>Registration Details</h3>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Course: {course}</p>
        </div>
      )}
    </div>
  );
}
export default App;