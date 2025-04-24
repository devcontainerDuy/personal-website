import Divider from "@/components/ui/Divider";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { BrainIcon, CodeIcon, DatabaseIcon, PaletteIcon, ServerIcon, UsersIcon } from "lucide-react";

const SkillsSection = () => {
    const skillCategories = [
        {
            id: 1,
            title: "Frontend Development",
            icon: <CodeIcon size={24} className="text-blue-400" />,
            skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
        },
        {
            id: 2,
            title: "Backend Development",
            icon: <ServerIcon size={24} className="text-purple-400" />,
            skills: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL"],
        },
        {
            id: 3,
            title: "UI/UX Design",
            icon: <PaletteIcon size={24} className="text-pink-400" />,
            skills: ["Figma", "Adobe XD", "Responsive Design", "User Research", "Wireframing"],
        },
        {
            id: 4,
            title: "Database",
            icon: <DatabaseIcon size={24} className="text-green-400" />,
            skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
        },
        {
            id: 5,
            title: "AI & ML",
            icon: <BrainIcon size={24} className="text-yellow-400" />,
            skills: ["TensorFlow", "PyTorch", "Natural Language Processing", "Computer Vision"],
        },
        {
            id: 6,
            title: "Soft Skills",
            icon: <UsersIcon size={24} className="text-orange-400" />,
            skills: ["Team Leadership", "Project Management", "Communication", "Problem Solving"],
        },
    ];

    return (
        <section id="skills" className="relative py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-2">
                        <span>Skills & Expertise</span>
                    </h2>
                    <Divider className="max-w-6xl mx-auto mb-6" />
                    <p className="text-gray-300 max-w-2xl mx-auto">A comprehensive overview of my technical skills and areas of expertise in software development and design.</p>
                </div>

                <div className="grid md:*:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories?.map((category) => (
                        <Card key={category.id} className="md:max-w-full p-6">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100" />
                            <div className="relative z-10">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">{category.icon}</div>
                                    <h3 className="text-lg font-medium">{category.title}</h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {category?.skills?.map((skill) => (
                                        <Badge key={skill} className="text-sm">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
