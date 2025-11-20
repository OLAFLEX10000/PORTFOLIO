
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/ui/Clients";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import { HomeIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex items-center justify-center flex-col 
    bg-black100 overflow-clip pb-36 mx-auto sm:px-10">
      <h1 className="w-full max-w-7xl text-white"
      >
        <FloatingNav navItems={navItems}/>
         <Hero/>
         <Grid/>
         <RecentProjects/>
         <Clients/>
         <Experience/>
         <Approach/>
         <Footer/>
      </h1>
    </main>
  );
}
