export default function Hello() {
  return (
    <div className="mt-8 text-brand-gray-700 md:mx-16 md:mt-16">
      <div className="dark:text-brand-white-50">
        <h1 className="text-2xl font-cabinet-bold md:text-5xl ">Hello 👋</h1>
        <div className="font-cabinet mt-8 md:text-3xl md:font-cabinet-bold">
          <p>I'm Micheal,</p>
          <p className="mt-2">A Web3 Frontend Developer</p>
        </div>
        <div className="border border-brand-gray-900 md:inline-block hidden p-4 rounded-full px-16 mt-16">
          <p>Say Hello</p>
        </div>
      </div>
    </div>
  );
}
