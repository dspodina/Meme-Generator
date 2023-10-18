import logo from "../assets/meme.png";

function Header() {
  return (
    <div className="text-white bg-darknight">
      <div className="container mx-auto my-1 flex flex-row items-center">
        <img className="w-[70px]" src={logo} alt="" />
        <h1 className="pl-4 font-primaryFont tracking-widest text-xl uppercase">Meme Generator</h1>
      </div>
    </div>
  );
}

export default Header;
