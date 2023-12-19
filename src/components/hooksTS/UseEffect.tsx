import React, { useState, useEffect } from "react";

const UseEffect: React.FC = () => {
  const [times, setTimes] = useState<number>(0); // Typing the state

  useEffect(() => {
    // The useEffect hook doesn't need explicit typing here
    document.title = `${times} times`;
  });
  return (
    <div className="center flex flex-col">
      <h2>{times} times clicked</h2>
      <button onClick={() => setTimes((prevTimes) => prevTimes + 1)}>
        Add 1
      </button>
      <p className="text-center py-4 ">
        whats happening is that the state changes and the component is removed,
        updated, then added back to the DOM, the hook is able to perform certain
        actions in each phase
      </p>
      <ul className="flex flex-col">
        <li>add empty array dependency to only run once</li>
        <li>add variable in array to perform certain rerender</li>
        <li>
          return callback if needed to clear things like addeded events or
          timeouts
        </li>
      </ul>
    </div>
  );
};
export default UseEffect;
