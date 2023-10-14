import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

function App() {
 
  const [height, setHeight] = useState("h-[100vh]");

  const scrollHeight = 500; // Adjust this value to set the desired scroll height

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= scrollHeight) {
        console.log(`Scrolled up to ${scrollHeight}px`);
        // Your code to execute when scrolled up to the desired height goes here
        setHeight("h-full");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  return (
    <>
      <h2 className=" text-center text-4xl font-bold my-6">Welcome</h2>
      <div className="grid grid-cols-12 px-8">
        <div className={`col-span-6 border-r-2 border-black p-4 ${height}` }>
          <Todo />
        </div>
        <div className="col-span-6 p-4  ">
          <AddTodo />
        </div>
      </div>
    </>
  );
}

export default App;
