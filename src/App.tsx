import "./App.css";
import Template from "@/components/layouts/Template";
import HeroSection from "@/components/layouts/HeroSection";
import AboutSection from "@/components/layouts/AboutSection";
import ExperienceSection from "@/components/layouts/ExperienceSection";
import SkillsSection from "@/components/layouts/SkillsSection";
import CertificatesSection from "@/components/layouts/CertificatesSection";
import ProjectsSection from "@/components/layouts/ProjectsSection";
import ActivitiesSection from "@/components/layouts/ActivitiesSection";

function App() {
    return (
        <Template>
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <CertificatesSection />
            <ProjectsSection />
            <ActivitiesSection />
            {/* <ContactSection/> */}
            {/* <Footer/> */}
            {/* <ScrollToTopButton/> */}
            {/* <ThemeToggleButton/> */}
        </Template>
    );
}

export default App;
