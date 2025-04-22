import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import { ChevronDown, Facebook, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-20">
            <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2">
                <div className="w-full h-full rounded-full bg-gradient-to-t from-blue-500/20 to-purple-500/20 blur-3xl" />
            </div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    <Text>Hello, I'm Developer</Text>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">Full Stack Web Developer & Backend Programming Enthusiast</p>

                <div className="flex flex-wrap gap-4 justify-center mb-12">
                    <Button href="#contact" size="lg">
                        Contact Me
                    </Button>
                    <Button variant="outline" href="#projects" size="lg">
                        View Projects
                    </Button>
                </div>

                <div className="flex justify-center gap-6 mb-16">
                    <a href="https://github.com/DevcontainerDuy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors mr-4">
                        <Github size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kh%C3%A1nh-duy-tr%E1%BA%A7n-632551324/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors mr-4"
                    >
                        <Linkedin size={24} />
                    </a>

                    <a href="https://web.facebook.com/trankhanhduy.7703" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors mr-4">
                        <Facebook size={24} />
                    </a>
                </div>

                <a href="#about" className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 hover:text-white transition-colors">
                    <span className="text-sm mb-2">Scroll Down</span>
                    <ChevronDown size={24} className="animate-bounce" />
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
