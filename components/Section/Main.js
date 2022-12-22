import About from "./About";
import Intro from "./Intro";
import Project from "./Project";
import Blog from "./Blog";

export default function Main({
  homeRoute,
  aboutRoute,
  projectRoute,
  blogRoute,
}) {
  if (homeRoute) {
    return <Intro />;
  } else if (aboutRoute) {
    return <About />;
  } else if (projectRoute) {
    return <Project />;
  } else if (blogRoute) {
    return <Blog />;
  }
}
