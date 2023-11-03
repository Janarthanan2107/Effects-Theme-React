import { TypeAnimation } from "react-type-animation";

// getting the prop value from app.js for theme
const Home = ({ dark }) => {
  return (
    <div
      className={`flex justify-center items-center flex-col gap-4 h-[calc(100vh-4rem)] ${
        dark ? "bg-black" : "bg-white"
      }`}
    >
      <div className="text-gray-500">
        <h1 className="text-[1.5rem]">
          Typing Effects..{" "}
          <span className={dark ? "text-red-500 " : "text-purple-600 "}>&</span>{" "}
          Theme setup..
        </h1>
      </div>
      <div>
        <h1 className="font-semibold text-[3rem] text-gray-500 transition-all ease-in-out">
          I'm a{" "}
          <span
            className={`${
              dark ? "text-red-500 " : "text-purple-600 "
            } underline underline-offset-8`}
          >
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Developer",
                1000,
                "Writer",
                1000,
                "Designer",
                1000,
              ]}
              speed={300}
              style={{ fontSize: "3rem" }}
              repeat={Infinity}
            />
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Home;
