export default function Route({
  setHomeRoute,
  setAboutRoute,
  setProjectRoute,
  setBlogRoute,
  aboutRoute,
  homeRoute,
  projectRoute,
  blogRoute,
  theme,
  setTheme,
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
    <div className="border bg-brand-white-50 border-brand-green-500 flex md:flex-col justify-between p-4 m-4 rounded-lg sticky bottom-0 md:h-[500px]  md:top-[250px] md:left-[100px] dark:bg-black-900">
      {homeRoute ? (
        <img src="/Homeactive.svg" onClick={setHome} width="40px" />
      ) : (
        <img src="/Home.svg" onClick={setHome} width="40px" />
      )}

      {aboutRoute ? (
        <img src="/Aboutactive.svg" onClick={setAbout} />
      ) : (
        <img src="/About.svg" onClick={setAbout} />
      )}

      {projectRoute ? (
        <img src="/Projectsactive.svg" onClick={setProject} />
      ) : (
        <img src="/Projects.svg" onClick={setProject} />
      )}
      {blogRoute ? (
        <img src="/Blogactive.svg" onClick={setBlog} />
      ) : (
        <img src="/Blog.svg" onClick={setBlog} />
      )}
      <div className="border-brand-gray-900 border "></div>
      <div
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        <img src="/DarkMode.svg" />
      </div>
    </div>
  );
}
