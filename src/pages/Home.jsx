import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectSection } from "../components/ProjectSection";
import { SkillsSection } from "../components/SkillsSection";
import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground";

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        {/* Theme toggle */}
              <ThemeToggle />
        {/* Background effects */}
              <StarBackground />
        {/* Navbar */}
            <Navbar />
        {/* Main Content */}
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
        {/* Footer */}
            <Footer />
    </div>
  )
}
export default Home

