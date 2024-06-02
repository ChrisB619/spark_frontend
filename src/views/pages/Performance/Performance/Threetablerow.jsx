import React, { useState } from "react";

const Threetablerow = () => {
  const [rowsone, setRowsone] = useState([
    { id: 1, strengthsone: "", areasForImprovementone: "" },
    { id: 2, strengthsone: "", areasForImprovementone: "" },
    { id: 3, strengthsone: "", areasForImprovementone: "" },
  ]);
  const handleInputChangeone = (id, field, value) => {
    const updatedRowsone = rowsone.map((rows) => {
      if (rows.id === id) {
        return { ...rows, [field]: value };
      }
      return rows;
    });
    setRowsone(updatedRowsone);
  };
  return (
    <>
      <tbody>
        {rowsone.map((rows) => (
          <tr key={rows.id}>
            <td>{rows.id}</td>
            <td>
              <input
                type="text"
                className="form-control"
                value={rows.strengthsone}
                onChange={(e) =>
                  handleInputChangeone(rows.id, "strengthsone", e.target.value)
                }
              />
            </td>
            <td>
              <input
                type="text"
                className="form-control"
                value={rows.areasForImprovementone}
                onChange={(e) =>
                  handleInputChangeone(
                    rows.id,
                    "areasForImprovementone",
                    e.target.value
                  )
                }
              />
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default Threetablerow;
