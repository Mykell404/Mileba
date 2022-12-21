import ImageBox from "../components/Image/ImageBox";
import Navbar from "../components/Navbar/Navbar";
import BigText from "../components/Text/BigText";
import Hello from "../components/Text/Hello";

export default function Home() {
  return (
    <div className="lg:px-20">
      <Navbar />
      <div className="m-6 mr-20 md:mr-0 md:flex md:flex-col-reverse">
        <div className="  md:flex md:justify-between ">
          <ImageBox image="./avatar1.png" />
          <Hello />
        </div>
        <div>
          <BigText />
        </div>
      </div>
    </div>
  );
}
