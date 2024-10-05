import Designer from "./../assets/images/Designer.png"
import { HiOutlineSearch, HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi";
import { useTheme } from "../context/Theme";
function Header() {

  const { mode, setMode } = useTheme();
  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('mode', newMode); // Save the new mode to localStorage
  };

  return (
    <div className="flex items-center p-3">
      <img src={Designer} className="rounded-full" height={60} width={60} />
      <div className="flex bg-slate-200 w-full p-2 items-center mx-5 rounded-full">
        <HiOutlineSearch />
        <input type="text" placeholder="Search games" className="bg-transparent p-2 outline-none" />

      </div>
      {mode == 'light' ? <HiMoon className="text-[35px] p-1 text-black bg-slate-200 cursor-pointer rounded-full"
        onClick={toggleMode} /> :
        <HiSun className="text-[35px] p-1 text-black cursor-pointer bg-slate-200 rounded-full"
          onClick={toggleMode} />}
    </div>
  )
}
export default Header