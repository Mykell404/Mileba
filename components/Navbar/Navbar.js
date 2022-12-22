import ContactButton from "../Button/ContactButton";

export default function Navbar() {
  return (
    <div className="p-6 flex justify-between font-cabinet md:p-10 sticky top-0 bg-brand-white-50">
      <div className="flex ">
        <img src="/logo.svg"></img>
        <h2 className="text-3xl pl-2 mt-2.5 md:text-4xl font-cabinet-bold">
          <span className="text-brand-green-500">M</span>icheal
        </h2>
      </div>
      <ContactButton />
    </div>
  );
}
