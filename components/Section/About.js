import ImageBox from "../Image/ImageBox";
import AboutText from "../Text/AboutText";

export default function About() {
  return (
    <div className="mx-4 md:flex md:justify-between md:w-full">
      <ImageBox image="/AboutImg.png" />

      <AboutText />
    </div>
  );
}
