import SocialButton from "../Button/SocialButton";
import Languages from "./Language";

export default function AboutText() {
  return (
    <div className="md:w-fit md:mx-8">
      <h1 className="text-2xl font-cabinet-bold md:text-5xl my-6">
        Meet Micheal 👋
      </h1>
      <p className="font-cabinet md:text-xl text-brand-gray-700">
        Since beginning my journey as a freelance web3 developer, I've done
        remote work for agencies, and collaborated with talented people to
        create digital products for both business and consumer use. I'm quietly
        confident, naturally curious, and perpetually working on improving my
        chops one blockchain as a problem at a time
      </p>

      <div className="flex justify-between mt-8 flex-wrap gap-4">
        <SocialButton name="LinkedIn" imgsrc="/Linkedin.svg" />
        <SocialButton name="Twitter" imgsrc="/Twitter.svg" />
        <SocialButton name="Github" imgsrc="/Github.svg" />
        <SocialButton name="Instagram" imgsrc="/Instagram.svg" />
      </div>
      <div>
        <Languages />
      </div>
    </div>
  );
}
