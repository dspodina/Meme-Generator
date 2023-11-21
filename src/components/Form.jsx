import React from "react";
import memesData from "../memesData.jsx";

function Form() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
  });

  const [memeImage, setMemeImage] = React.useState("");
  const [showInputs, setShowInputs] = React.useState(false);
  const [buttonText, setButtonText] = React.useState("Let's start");

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function getRandomImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
    setShowInputs(true);
    setButtonText("Get a new image"); 
  }

  return (
    <div className="flex flex-col md:flex-row justify-around pt-8 pb-24">
      <div className="md:w-1/3 mx-12 md:mx-0">
        {showInputs && (
          <div className="flex flex-col lg:flex-row gap-2 pb-6">
            <input
              className="w-full rounded-md py-1 pl-3"
              type="text"
              id="top-text"
              placeholder="Top text"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
              disabled={!showInputs}
            />
            <input
              className="w-full rounded-md py-1 pl-3"
              type="text"
              id="bottom-text"
              placeholder="Bottom text"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
              disabled={!showInputs}
            />
          </div>
        )}

        <div className="text-center bg-violet hover:bg-[#5C469C] rounded-lg">
          <button
            onClick={getRandomImage}
            className="py-2 text-white text-md font-semibold"
          >
            {buttonText}
          </button>
        </div>
      </div>

      {memeImage && (
        <div className="flex items-center justify-end bg-white box-border h-auto max-w-[500px] p-3 my-15 px-3 uppercase text-white relative">
          <img
            className="flex justify-center items-center"
            src={memeImage}
            alt=""
          />
          <div className="absolute inset-y-0 flex flex-col justify-between items-end w-full text-center text-2xl drop-shadow font-bold tracking-wide">
            <h2 className="p-8 mx-auto">{meme.topText}</h2>
            <h2 className="p-8 mx-auto">{meme.bottomText}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
