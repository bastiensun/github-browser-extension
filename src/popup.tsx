import { useState } from "react";

const Popup = (): JSX.Element => {
  const [data, setData] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
      }}
    >
      <h2>
        Welcome to your
        <a href="https://www.plasmo.com" rel="noreferrer" target="_blank">
          {" "}
          Plasmo
        </a>{" "}
        Extension!
      </h2>
      <input onChange={(event) => setData(event.target.value)} value={data} />
      <a href="https://docs.plasmo.com" rel="noreferrer" target="_blank">
        View Docs
      </a>
    </div>
  );
};

export default Popup;
