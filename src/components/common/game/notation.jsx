import React from "react";

const Notation = ({ gameRecord }) => {
  return (
    <div className={"notation"}>
      <table>
        <thead>
          <tr>
            <th>White</th>
            <th>Black</th>
          </tr>
        </thead>
        <tbody>
          {Array.apply(null, Array(Math.ceil(gameRecord.length / 2))).map(
            (e, i) => (
              <tr key={i}>
                <td>{gameRecord[i * 2]}</td>
                <td>{gameRecord[i * 2 + 1]}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Notation;
