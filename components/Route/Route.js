export default function Route({
  setHomeRoute,
  setAboutRoute,
  setProjectRoute,
  setBlogRoute,
}) {
  function setAbout() {
    setHomeRoute(false);
    setAboutRoute(true);
    setProjectRoute(false);
    setBlogRoute(false);
  }

  function setHome() {
    setHomeRoute(true);
    setAboutRoute(false);
    setProjectRoute(false);
    setBlogRoute(false);
  }

  function setProject() {
    setHomeRoute(false);
    setAboutRoute(false);
    setProjectRoute(true);
    setBlogRoute(false);
  }

  function setBlog() {
    setHomeRoute(false);
    setAboutRoute(false);
    setProjectRoute(false);
    setBlogRoute(true);
  }

  return (
    <div className="border bg-brand-gray-50 border-brand-green-500 flex md:flex-col justify-between p-4 m-4 rounded-lg sticky bottom-0 md:h-[500px]  md:top-[250px] md:left-[100px] ">
      <img src="/Home.svg" onClick={setHome} width="40px" />
      <img src="/About.svg" onClick={setAbout} />
      <img src="/Projects.svg" onClick={setProject} />
      <img src="/Blog.svg" onClick={setBlog} />
      <div className="border-brand-gray-900 border "></div>
      <img src="/DarkMode.svg" />
    </div>
  );
}
