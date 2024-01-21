import { useState, useEffect } from "react";
import { mockData } from "./MockData";

function DataTableTable() {
  const [rows, setRows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function fetchData() {
    setRows(mockData);
  }

  useEffect(fetchData, []);

  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAddRow = () => {
    // Create a new row object
    const newRow = { id, email, password };
    // Add the new row to the existing rows
    setRows([...rows, newRow]);
    // Clear the input fields
    clearForm();
    setIsModalOpen(false);
  };
  const clearForm = () => {
    // Clear the form fields
    setId("");
    setEmail("");
    setPassword("");
  };

  const deleteRow = (userId) => {
    setRows(rows.filter((user) => user.id !== userId));
  };

  const handleCancel = () => {
    // Clear the form fields and close the modal
    clearForm();
    setIsModalOpen(false);
  };
  return (
    <div className="container mx-auto px-4 box-border flex flex-col text-center text-3xl text-black">
      <table className="border border-separate border-spacing-2 border-collapse border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-600 ">ID</th>
            <th className="border border-slate-600">e-Mail</th>
            <th className="border border-slate-600">Password</th>
            <th className=""></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="border border-slate-700">{row.id}</td>
              <td className="border border-slate-700">{row.email}</td>
              <td className="border border-slate-700">{row.password}</td>
              <button
                className="bg-yellow-500 rounded-lg p-3 me-3 hover:bg-yellow-900 hover:text-white"
                // onClick={() => deleteRow(row.id)}
              >
                Edit
              </button>

              <button
                className="bg-red-500 rounded-lg p-3 hover:bg-red-900 hover:text-white"
                onClick={() => deleteRow(row.id)}
              >
                Delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        className="grid justify-items-center p-3 bg-blue-700 mt-5 rounded-lg text-white hover:bg-sky-500 hover:text-black"
        type="button"
        onClick={() => setIsModalOpen(true)}
      >
        Create
      </button>

      <form>
        {isModalOpen && (
          <div className="modal">
            <br></br>
            <div className="flex flex-row items-center text-center">
              <h2 className="w-2/5">No. :</h2>
              <div className="w-1/5">
                <input
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  placeholder="ID"
                />
              </div>
            </div>

            <br />
            <div className="flex flex-row items-center">
              <h2 className="w-2/5">e-Mail :</h2>
              <div className="w-2/5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e-Mail"
                />
              </div>
            </div>

            <br />
            <div className="flex flex-row items-center">
              <h2 className="w-2/5">Password :</h2>
              <div className="w-2/5">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex justify-around mt-8 ">
              <button
                // className="bg-black"
                type="button "
                className="bg-green-500 rounded-md p-3 hover:bg-green-900 hover:text-white"
                onClick={handleAddRow}
              >
                Submit
              </button>
              <button
                type="button"
                className="bg-red-500 rounded-md p-3 hover:bg-red-900 hover:text-white"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default DataTableTable;
