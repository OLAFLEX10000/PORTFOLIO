import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import { socialMedia } from "@/data";
import MagicButton from "../components/ui/MagicButton";
import { Github } from "lucide-react";
import { FaGithub,FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 pointer-events-none">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-2xl md:text-4xl font-bold text-center lg:max-w-[45vw]">
          Ready to take <span className="text-purple-400">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:olamideawolesi21@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Awolesi Olamide Michael
        </p>

        <div className="flex items-center md:gap-3 gap-6">
         <a 
      href="https://github.com/OLAFLEX10000"
      className="text-gray-100 hover:text-gray-400 text-2xl"
    >
      <FaGithub />
        </a>

         <a 
      href="https://www.linkedin.com/in/awolesi-olamide-michael-53ba802aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      className="text-gray-100 hover:text-gray-400 text-2xl"
    >
      <FaLinkedin />
        </a>

         <a 
      href="https://x.com/OlamideAwolesi?t=5GTziIrMcyzZ3zDNRI4jzg&s=09"
      className="text-gray-100 hover:text-gray-400 text-2xl"
    >
      <FaTwitter />
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
