import { useState } from "react";

function MyForm() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });
  const [submissions, setSubmissions] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissions([...submissions, formData]);
    setFormData({ firstName: "", lastName: "", age: "" });
    setShowForm(false);
  };

  return (
    <div>
      <button onClick={() => setShowForm(true)}>Create</button>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
          />
          <button type="submit">Save</button>
        </form>
      )}

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => (
            <tr key={index}>
              <td>{submission.firstName}</td>
              <td>{submission.lastName}</td>
              <td>{submission.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyForm;
