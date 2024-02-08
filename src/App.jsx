import { useState, useEffect, useRef } from "react";
import { imagesList } from "./components/ImageHandler";
import "./App.css";

function App() {
  const [quotes, setQuote] = useState({ quote: "" });
  const [randNum, setRandNum] = useState(1);

  useEffect(() => {
    fetch(`https://api.kanye.rest/`)
      .then((response) => response.json())
      .then((data) => setQuote(data))
      .catch((err) => console.log(err));
    // fetch(
    //   `https://api.unsplash.com/photos/random/?client_id=${
    //     import.meta.env.VITE_ACCESS_KEY
    //   }`
    // )
    //   .then((response) => response.json())
    //   .then((data) => setImage(data))
    //   .catch((err) => console.log(err));
  }, [randNum]);


  return (
    <>
      <div className=" h-full w-full absolute top-0 bottom-0 left-0 right-0 bg-gray-900 text-white flex items-center justify-center">
        <div className="w-full h-full overflow-hidden rounded-lg absolute ">
          <div className="opacity-75 absolute w-full h-full bg-black"></div>
          <img
            className="w-full h-full object-cover"
            src={imagesList[randNum].src}
          ></img>
          <div className="absolute bottom-48 px-8">{quotes.quote}</div>
          <h1 className="absolute right-10 bottom-32 px-5 text-2xl opacity-60">
            - Kanye
          </h1>
        </div>
        <button
          className="relative self-end bottom-20 bg-black rounded-lg hover:opacity-50"
          onClick={() => {
            setRandNum(1 + Math.floor(Math.random() * 19));
          }}
        >
          <span className="px-8">New Quote</span>
        </button>
      </div>
    </>
  );
}

export default App;
