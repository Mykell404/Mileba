import { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Route from "../components/Route/Route";
import Intro from "../components/Section/Intro";

export default function Home() {
  const [home, setHome] = useState(true);

  return (
    <div className="container mx-auto relative ">
      <Navbar />
      <div className="md:flex md:flex-row-reverse justify-around">
        <Intro />
        <Route />
      </div>
    </div>
  );
}
