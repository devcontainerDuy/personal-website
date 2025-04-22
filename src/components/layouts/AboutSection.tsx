import Divider from "@/components/ui/Divider";
import Card from "@/components/ui/Card";
import { Calendar, MapPin, User } from "lucide-react";

const AboutSection = () => {
    return (
        <section id="about" className="relative py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-2">
                            <span>About Me</span>
                        </h2>
                        <Divider className="mb-6" />
                        <p className="text-gray-300 mb-6">
                            I am a full-stack web Developer with experience in PHP (Laravel Framework), SQL, React, and Bootstrap. I have participated in building simple backend systems, creating
                            APIs, and developing frontend interfaces.
                        </p>
                        <p className="text-gray-300 mb-6">I am passionate about solving problems and continuously improving my skills. I am very excited to learn more and contribute to projects.</p>
                        <p className="text-gray-300">I hope to become a Senior Developer in the next few years, where I can maximize my abilities and experience.</p>
                    </div>
                    
                    <div className="md:w-1/2 flex flex-col justify-center">
                        <Card hoverEffect={false} className="max-w-xl p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                        <User size={20} className="text-blue-400" />
                                    </div>
                                    <div className="">
                                        <h3 className="text-sm text-gray-400">
                                            <span>Name</span>
                                        </h3>
                                        <p className="font-medium">Tran Khanh Duy</p>
                                    </div>
                                </div>

                                {/* Experience */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                                        <Calendar size={20} className="text-purple-400" />
                                    </div>
                                    <div className="">
                                        <h3 className="text-sm text-gray-400">
                                            <span>Experience</span>
                                        </h3>
                                        <p className="font-medium">1 Years</p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                        <MapPin size={20} className="text-blue-400" />
                                    </div>
                                    <div className="">
                                        <h3 className="text-sm text-gray-400">
                                            <span>Location</span>
                                        </h3>
                                        <p className="font-medium">District 12, HCM</p>
                                    </div>
                                </div>

                                {/* Availability */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                                        <User size={20} className="text-purple-400" />
                                    </div>
                                    <div className="">
                                        <h3 className="text-sm text-gray-400">
                                            <span>Availability</span>
                                        </h3>
                                        <p className="font-medium">Open to Opportunities</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
