export default function SocialButton({ name, imgsrc }) {
  return (
    <div className="border flex p-2 justify-around w-36 rounded-3xl ">
      <h1 className="mt-1">{name}</h1>
      <img src={imgsrc} />
    </div>
  );
}
