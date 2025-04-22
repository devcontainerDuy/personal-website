import "./App.css";
import Template from "@/components/layouts/Template";
import HeroSection from "@/components/layouts/HeroSection";
import AboutSection from "@/components/layouts/AboutSection";
import ExperienceSection from "@/components/layouts/ExperienceSection";

function App() {
    return (
        <Template>
            <HeroSection/>
            <AboutSection/>
            <ExperienceSection/>
            {/* <ProjectsSection/> */}
            {/* <ContactSection/> */}
            {/* <Footer/> */}
            {/* <ScrollToTopButton/> */}
            {/* <ThemeToggleButton/> */}
        </Template>
    );
}

export default App;
