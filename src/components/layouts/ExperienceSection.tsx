import Divider from "@/components/ui/Divider";
import Card from "@/components/ui/Card";
import { BriefcaseConveyorBelt } from "lucide-react";
import { experiences } from "@/api/experiences.json";

const ExperienceSection = () => {
    return (
        <section id="experience" className="relative py-20 px-4 bg-gray-900/30">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-2">
                        <span>Work Experience</span>
                    </h2>
                    <Divider className="max-w-6xl mx-auto mb-6" />
                    <p className="text-gray-300 max-w-2xl mx-auto">My professional journey through various roles and companies, showcasing my growth and expertise in software development.</p>
                </div>

                <div className="relative">
                    {/* Vertical timeline line */}
                    <div className="absolute left-0 md:left-1/2 top-0 h-full w-px md:-translate-x-1/2">
                        <Divider vertical className="h-full" />
                    </div>

                    {/* Experience items */}
                    <div className="space-y-12">
                        {experiences?.map((exp) => (
                            <div key={exp.id} className={`relative flex flex-col ${exp.id % 2 !== 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                                <div className="md:w-1/2 mb-8 md:mb-0">
                                    <div className={`${exp.id % 2 !== 0 ? "md:pr-12" : "md:pl-12"}`}>
                                        <Card className="md:max-w-full p-6">
                                            {/* Background with Card */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100" />
                                            <div className="relative z-10">
                                                <div className="flex items-center mb-4">
                                                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                                                        <BriefcaseConveyorBelt size={18} className="text-blue-400" />
                                                    </div>
                                                    <div className="">
                                                        <h3 className="text-lg font-medium">{exp.title}</h3>
                                                        <p className="text-sm text-gray-400">{exp.company}</p>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-gray-300 mb-2">{exp.period}</p>
                                                <p className="text-gray-300">{exp.description}</p>
                                            </div>
                                        </Card>
                                    </div>
                                </div>
                                <div className="absolute left-0 md:left-1/2 top-6 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 -translate-x-1/2 z-10" />
                                <div className="md:w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
