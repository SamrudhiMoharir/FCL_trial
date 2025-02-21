import React from "react";
import "./TableComponent.css"; // Ensure you have this CSS file

const TableComponent = ({ rejectionStatement, handleStatementChange }) => {
  // Define fields with explicit keys matching your state
  const fields = [
    { key: "what", label: "What", description: "is the problem" },
    { key: "when", label: "When", description: "was the problem observed" },
    { key: "why", label: "Why", description: "is it a problem" },
    { key: "where", label: "Where", description: "is the problem" },
    { key: "who", label: "Who", description: "is impacted" },
    { key: "how", label: "How", description: "is the problem observed" },
    { key: "howMuch", label: "How much", description: "were defective parts seen" },
  ];

  return (
    <table className="problem-table">
      <tbody>
        {fields.map((field, index) => (
          <tr key={index}>
            <td className="bold-text">
              <strong>{field.label}</strong> ({field.description})
            </td>
            <td className="input-cell">
              <input
                type="text"
                name={field.key}
                value={rejectionStatement[field.key] || ""}
                onChange={handleStatementChange}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
