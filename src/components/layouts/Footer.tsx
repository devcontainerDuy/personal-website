import { Github, Instagram, Linkedin, Twitter } from "lucide-react";


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-8 px-4 border-t border-gray-800">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <a href="https://github.com/DevcontainerDuy" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
                            DevName
                        </a>
                        <p className="text-sm text-gray-400 mt-1">Full Stack Developer & UI/UX Enthusiast</p>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://github.com/DevcontainerDuy" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/kh%C3%A1nh-duy-tr%E1%BA%A7n-632551324/" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://twitter.com/DevcontainerDuy" className="text-gray-400 hover:text-white transition-colors">
                            <Twitter size={20} />
                        </a>
                        <a href="https://www.instagram.com/devcontainerduy/" className="text-gray-400 hover:text-white transition-colors">
                            <Instagram size={20} />
                        </a>
                    </div>
                    <div className="text-sm text-gray-400">© {currentYear} DevName. All rights reserved.</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
