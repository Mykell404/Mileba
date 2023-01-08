export default function ProjectText({ name, info, languageUsed, link }) {
  return (
    <div className="py-4 border-b-2 border-brand-gray-500 md:w-[450px] lg:w-[600px]">
      <h1 className="font-cabinet-bold text-2xl text-brand-gray-700 dark:text-brand-gray-200">
        {name}
      </h1>
      <p className="font-cabinet text-brand-gray-500 dark:text-brand-gray-200">
        {info}
      </p>
      <ul className="flex justify-between list-square m-4 font-cabinet text-xl text-brand-gray-700 flex-wrap gap-1 dark:text-brand-gray-200">
        {languageUsed.map((language, i) => (
          <li key={i}>{language}</li>
        ))}
      </ul>
      <a href={link}>
        <div className="p-4 border border-brand-gray-500 w-fit rounded-full flex justify-between items-center my-4">
          <p className="mr-4 text-brand-gray-500 dark:text-brand-gray-200">
            View on Github
          </p>
          <img src="/arrow-right.svg" />
        </div>
      </a>
    </div>
  );
}
