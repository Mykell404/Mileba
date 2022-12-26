export default function ProjectIntro() {
  let date = new Date().getFullYear();
  return (
    <div>
      <h1 className="font-cabinet-bold text-3xl text-brand-gray-700">
        Selected Works
      </h1>
      <div className="text-brand-gray-500 flex text-2xl my-4">
        <p>2020</p>
        <div className="w-32 h-0.5 bg-brand-gray-500 mt-4 mx-2"></div>
        <p>{date}</p>
      </div>
      <p className="text-brand-gray-500">
        Collaborative, Craftsmanship, Scalable products all inclusive in my body
        of work
      </p>
    </div>
  );
}
