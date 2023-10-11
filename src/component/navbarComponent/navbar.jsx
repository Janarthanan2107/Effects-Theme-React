import { AiOutlineGithub } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";

const Navbar = ({ dark, setDark }) => {
  const themeHandler = () => {
    setDark(!dark);
  };

  return (
    <div
      className={`flex justify-between items-center h-16 p-3 font-semibold ${
        dark
          ? "bg-gray-800 border-b border-gray-50"
          : "bg-white border-b border-gray-300"
      }`}
    >
      <div className={`${dark ? "text-white" : "text-violet-600"} flex gap-2`}>
        <img src="vite.svg" alt="logo" />
        <h1 className="text-[1.5rem] underline underline-offset-8">React</h1>
      </div>
      <div
        className={`text-[1.5rem] flex gap-4 ${
          dark ? "text-white" : "text-gray-600"
        }`}
      >
        <span
          className="cursor-pointer hover:text-purple-400"
          onClick={themeHandler}
        >
          {dark ? <BsSun /> : <MdDarkMode />}
        </span>
        <a
          href="https://github.com/Janarthanan2107/typingEffect-React"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineGithub />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
