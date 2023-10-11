import ReactTyped from "react-typed";

const Home = ({ dark }) => {
  return (
    <div
      className={`flex justify-center items-center h-[calc(100vh-4rem)] ${
        dark ? "bg-black" : "bg-white"
      }`}
    >
      <h1 className="font-semibold text-[3rem] text-gray-500">
        I'm a{" "}
        <span className=" text-red-600">
          <ReactTyped
            strings={["Developer", "Writer", "Designer"]}
            typeSpeed={150}
            loop={true}
            backSpeed={20}
            cursorChar="|"
            showCursor={true}
          />
        </span>
      </h1>
    </div>
  );
};

export default Home;
