import memesData from "../memesData.jsx";

function Form() {

  function getRandomImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random()* memesArray.length)
    const url = memesArray[randomNumber].url
    console.log(url)
  }


  return (
    <div className="flex flex-col items-center">
      <form name="meme-generator-form" className="w-2/3 lg:w-1/3">
        <div className="flex flex-col lg:flex-row gap-2 justify-between py-6">
          <input
            className="w-full rounded-md py-1 pl-3"
            type="text"
            id="input1"
            placeholder="Top text"
          />
          <input
            className="w-full rounded-md py-1 pl-3"
            type="text"
            id="input2"
            placeholder="Bottom text"
          />
        </div>

        <div className="text-center bg-violet hover:bg-[#5C469C] rounded-lg">
          <button
            onClick={getRandomImage}
            className="py-2 text-white text-md font-semibold">
            Get a new image
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
