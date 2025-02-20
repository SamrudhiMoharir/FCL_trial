import React from "react";
import "./TableComponent.css"; // Ensure you have this CSS file

const TableComponent = () => {
  return (
    <table className="problem-table">
      <tbody>
        {[
          ["What", "is the problem"],
          ["When", "was the problem observed"],
          ["Why", "is it a problem"],
          ["Where", "is the problem"],
          ["Who", "is impacted"],
          ["How", "is the problem observed"],
          ["How much", "were defective parts seen"],
        ].map(([boldText, normalText], index) => (
          <tr key={index}>
            <td className="bold-text">
              <strong>{boldText}</strong> ({normalText})
            </td>
            <td className="input-cell">
              <input type="text" name={boldText.toLowerCase()} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
