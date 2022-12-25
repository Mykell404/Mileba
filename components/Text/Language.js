export default function Languages() {
  const languageList = [
    "TypeScript/Javscript",
    "React",
    "Solidity",
    "Web3.js",
    "Python",
  ];

  return (
    <div>
      <h1 className="font-cabinet-bold my-8 text-lg md:text-2xl">
        Language Stack:
      </h1>
      <ul className="list-square md:flex justify-between">
        {languageList.map((language, i) => (
          <li key={i} className="ml-4 mb-2 text-brand-gray-700">
            {language}
          </li>
        ))}
      </ul>
    </div>
  );
}
