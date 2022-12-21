import ImageBox from "../components/Image/ImageBox";
import Navbar from "../components/Navbar/Navbar";
import Hello from "../components/Text/Hello";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="m-6 mr-20 md:flex justify-between">
        <ImageBox image="./avatar1.png" />
        <Hello />
      </div>
    </div>
  );
}
