import { useState } from "react";

const Homepage = () => {
  const [dateTime, setDateTime] = useState("");

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <div className="container mx-auto   p-4 m-4 ">
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <h1 className="text-3xl font-bold mb-4">
            My First JavaScript in React
          </h1>
          <button
            className="btn btn-primary"
            onClick={() => setDateTime(new Date().toString())}
          >
            Click me to display Date and Time.
          </button>
          <p className="mt-4 text-lg">{dateTime}</p>
        </div>
      </div>
    </>
  );
};

export default Homepage;
