import ImageBox from "../Image/ImageBox";
import Hello from "../Text/Hello";
import BigText from "../Text/BigText";

export default function Intro() {
  return (
    <div className="m-6 mr-20 md:mr-0 md:flex md:flex-col-reverse">
      <div className="  md:flex md:justify-between ">
        <ImageBox image="./avatar1.png" />
        <Hello />
      </div>
      <div>
        <BigText />
      </div>
    </div>
  );
}
