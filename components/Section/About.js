import ImageBox from "../Image/ImageBox";
import AboutText from "../Text/AboutText";

export default function About() {
  return (
    <div className="mx-4 md:flex md:justify-between">
      <ImageBox image="/AboutImg.png" />

      <AboutText />
    </div>
  );
}
