
import AboutSection from "./Components/AboutSection";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import ProjectSection from "./Components/ProjectSection";
import EmailSection from "./Components/EmailSection";
import FooterSection from "./Components/FooterSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] overflow-hidden">
    <Navbar/>
      <div className=" container mx-auto px-12 md:px-20 py-4 mt-10 ">
        <HeroSection />
        <AboutSection/>
        <ProjectSection/>
        <EmailSection/>
     </div>
    <FooterSection/>
    </main>
  );
}
