import React, { useEffect, useState } from "react";

const AddDeleteTable = () => {
  const [rows, setRows] = useState([]);

  const addRow = () => {
    const newRow = {
      id: rows.length + 1,
      textBox1: "",
      textBox2: "",
      textBox3: "",
    };
    setRows([...rows, newRow]);
  };

  const removeRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleInputChange = (id, field, value) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  useEffect(() => {
    const defaultRows = Array.from({ length: 5 }, (_, index) => ({
      id: index + 1,
      textBox1: "",
      textBox2: "",
      textBox3: "",
    }));
    setRows(defaultRows);
  }, []);

  return (
    <>
      <table
        className="table table-bordered table-review review-table mb-0"
        id="table_achievements"
      >
        <thead>
          <tr>
            <th className="width-pixel">#</th>
            <th>By Self</th>
            <th>RO's Comment</th>
            <th>HOD's Comment</th>
            <th className="width-64">
              <button
                type="button"
                className="btn btn-primary btn-add-row"
                onClick={addRow}
              >
                <i className="fa-solid fa-plus" />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={row.textBox1}
                  onChange={(e) =>
                    handleInputChange(row.id, "textBox1", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={row.textBox2}
                  onChange={(e) =>
                    handleInputChange(row.id, "textBox2", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={row.textBox3}
                  onChange={(e) =>
                    handleInputChange(row.id, "textBox3", e.target.value)
                  }
                />
              </td>
              <td>
                {index === rows.length - 1 ? (
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => removeRow(row.id)}
                  >
                    <i className="fa-regular fa-trash-can" />
                  </button>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AddDeleteTable;
