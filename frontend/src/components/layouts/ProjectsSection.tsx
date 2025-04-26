import Divider from "@/components/ui/Divider";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { ExternalLink, Github, TagIcon } from "lucide-react";
import { useState } from "react";
import { projects, categories } from "@/api/projects.json";

const ProjectsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const filteredProjects = activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory);

    return (
        <section id="projects" className="relative py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-2">
                        <span>Personal Projects</span>
                    </h2>
                    <Divider className="max-w-6xl mx-auto mb-6" />
                    <p className="text-gray-300 max-w-2xl mx-auto mb-8">A collection of projects I've built to explore new technologies and solve interesting problems.</p>

                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {categories?.map((category) => (
                            <Button key={category} className="rounded-full" onClick={() => setActiveCategory(category)} variant={activeCategory === category ? "primary" : "dark"}>
                                <span>{category}</span>
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects?.map((project) => (
                        <Card key={project.title} className="overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100" />
                            <div className="relative z-10">
                                <div className="h-40 overflow-hidden">
                                    <img src={project.image} alt="Certificate" className="w-full h-full object-cover transition-transform hover:scale-110" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-medium mb-2">{project.title}</h3>

                                    <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech) => (
                                            <Badge key={tech} className="text-xs flex items-center">
                                                <TagIcon size={10} className="mr-1" />
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <a
                                            href={project.github}
                                            className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
                                        >
                                            <Github size={16} className="mr-1" />
                                            <span>Code</span>
                                        </a>
                                        <a href={project.demo} className="text-blue-400 hover:text-blue-300 flex items-center text-xs">
                                            <ExternalLink size={16} className="mr-1" />
                                            Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
