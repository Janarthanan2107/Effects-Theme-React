import { useState } from "react";
import { Navbar, Home } from "./component";

const App = () => {
  const [dark, setDark] = useState(false);

  return (
    <div>
      <Navbar dark={dark} setDark={setDark} />
      <Home dark={dark} setDark={setDark} />
    </div>
  );
};

export default App;
