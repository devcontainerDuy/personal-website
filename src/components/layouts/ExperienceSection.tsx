import Divider from "@/components/ui/Divider";
import Card from "@/components/ui/Card";
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
                        <div className="relative flex flex-col md:flex-row">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <div className="md:pr-12">
                                    <Card>
                                        {/* Background with Card */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100" />
                                        hi
                                    </Card>
                                </div>
                            </div>
                            <div className="absolute left-0 md:left-1/2 top-6 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 -translate-x-1/2 z-10" />
                            <div className="md:w-1/2" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
