import Head from "next/head";
import { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Route from "../components/Route/Route";
import Intro from "../components/Section/Intro";
import Main from "../components/Section/Main";

export default function Home() {
  const [homeRoute, setHomeRoute] = useState(true);
  const [aboutRoute, setAboutRoute] = useState(false);
  const [projectRoute, setProjectRoute] = useState(false);
  const [blogRoute, setBlogRoute] = useState(false);

  // function renderRoute() {
  //   if (homeRoute) {
  //     return (
  //       <div>
  //         <Intro />
  //       </div>
  //     );
  //   }
  // }

  return (
    <div>
      <Head>
        <title>Mileba Micheal</title>
      </Head>
      <div className="container mx-auto relative">
        <Navbar />
        <div className="md:flex md:flex-row-reverse justify-around">
          {/* {renderRoute} */}
          <Main
            homeRoute={homeRoute}
            aboutRoute={aboutRoute}
            projectRoute={projectRoute}
            blogRoute={blogRoute}
          />

          <Route
            setHomeRoute={setHomeRoute}
            setAboutRoute={setAboutRoute}
            setProjectRoute={setProjectRoute}
            setBlogRoute={setBlogRoute}
          />
        </div>
      </div>
    </div>
  );
}
