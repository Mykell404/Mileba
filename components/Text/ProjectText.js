export default function ProjectText({ name, info, languageUsed, link }) {
  return (
    <div className="py-4 border-b-2 border-brand-gray-500 ">
      <h1 className="font-cabinet-bold text-2xl text-brand-gray-700">{name}</h1>
      <p className="font-cabinet text-brand-gray-500">{info}</p>
      <ul className="flex justify-between list-square m-4 font-cabinet text-xl text-brand-gray-700">
        {languageUsed.map((language, i) => (
          <li key={i}>{language}</li>
        ))}
      </ul>
      <a href={link}>
        <div className="p-4 border border-brand-gray-500 w-fit rounded-full flex justify-between items-center my-4">
          <p className="mr-4 text-brand-gray-500">View on Github</p>
          <img src="/arrow-right.svg" />
        </div>
      </a>
    </div>
  );
}
