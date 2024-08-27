import React from "react";
import LoaderPart1 from "./components/LoaderPart1.jsx";
import LoaderPart2 from "./components/LoaderPart2.jsx";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <LoaderPart1 />
        <LoaderPart2 />
      </div>
    </>
  );
}

export default App;
