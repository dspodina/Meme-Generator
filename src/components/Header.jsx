
import logo from "../assets/meme.png"

function Header(){
    return (
        <div className="text-white bg-darknight">
            <div className="container mx-auto my-3 flex flex-row items-center">
                <img className="w-[70px]" src={logo} alt="" />  
                <p className="pl-4 font-semibold tracking-wide text-xl">Meme Generator</p>          
            </div>
        </div>
        
    )
}

export default Header;