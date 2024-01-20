import { useState } from "react";

function CreateButton() {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rows, setRows] = useState([]);

  const handleAddRow = () => {
    // Create a new row object
    const newRow = { id, email, password };
    // Add the new row to the existing rows
    setRows([...rows, newRow]);
    // Clear the input fields
    setId("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="ID"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="e-Mail"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="button" onClick={handleAddRow}>
        Create
      </button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>{row.email}</td>
              <td>{row.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CreateButton;
