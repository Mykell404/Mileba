export default function ImageBox(props) {
  return (
    <div>
      <div className="border border-brand-green-500  w-fit rounded-3xl mt-4">
        <div className="m-2 bg-brand-green-500 rounded-3xl">
          <img src={props.image} />
        </div>
      </div>
    </div>
  );
}
