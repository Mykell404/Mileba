export default function Navbar() {
  return (
    <div className="p-6 flex justify-between font-cabinet md:p-10">
      <div className="flex ">
        <img src="/logo.svg"></img>
        <h2 className="text-3xl pl-2 mt-2.5 md:text-4xl font-cabinet-bold">
          <span className="text-brand-green-500">M</span>icheal
        </h2>
      </div>
      <div className="border rounded-full p-4 hover:border-brand-green-500  hover:bg-brand-green-900 hover:text-brand-green-50 md:px-10 md:py-4 px-6 py-2 mt-2">
        <p>Contact Me</p>
      </div>
    </div>
  );
}
