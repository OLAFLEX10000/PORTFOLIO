"use client"
import { cn } from "@/lib/utils";
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { ArrowRight, Heart } from "lucide-react";
import { FaLocationArrow } from "react-icons/fa6";


const Hero = () => {
  return (
    <div className='pb-20 '>
     <div>
  
        <Spotlight
        className="h-[90vh] top-0 left-0 "
        fill="white"
      />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full z-50"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw] z-50" fill="blue" />

     </div>
      <div className="relative flex h-screen w-full items-center justify-center bg-black100
      dark:bg-black100">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#FFFFFF20_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF20_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#26262633_1px,transparent_1px),linear-gradient(to_bottom,#26262633_1px,transparent_1px)]",
        )}

      />
       
      <div className="pointer-events-none absolute inset-0 flex items-center 
      justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] 
    bg-black100 dark:bg-black100"></div>
      <div className="flex justify-center my-20 relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">Dynamic Porfolio Project With Next.js</h2>
          <TextGenerateEffect 
          words="Turning Concepts into Captivation Experience"
          className="text-[40px] md:text-5xl lg:text-6xl text-center "
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi I'm Olamide, A Front End Developer Based In Lagos Ngeria.
          </p>
           
           <Link href="#about">
           <MagicButton
           title="show my work"
           icon={<FaLocationArrow/>}
           position="right"
           />
           </Link>

           

        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
