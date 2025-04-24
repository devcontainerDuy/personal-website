import Divider from "@/components/ui/Divider";
import Card from "@/components/ui/Card";
import { AwardIcon } from "lucide-react";
import { certificates } from "@/api/certificates.json";

const CertificatesSection = () => {
    return (
        <section id="certificates" className="relative py-20 px-4 bg-gray-900/30">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-2">
                        <span>Certificates</span>
                    </h2>
                    <Divider className="max-w-6xl mx-auto mb-6" />
                    <p className="text-gray-300 max-w-2xl mx-auto">Professional certifications and achievements that validate my expertise and commitment to continuous learning.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certificates.map((cert) => (
                        <Card key={cert.id} className="overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100" />
                            <div className="relative z-10">
                                <div className="h-40 overflow-hidden">
                                    <img
                                        src={cert.image}
                                        alt="Certificate"
                                        className="w-full h-full object-cover transition-transform hover:scale-110"
                                    />
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-base font-medium">{cert.title}</h3>
                                        <AwardIcon size={16} className="text-blue-400 mr-2" />
                                    </div>
                                    <p className="text-sm text-gray-400 mb-2">Meta</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-xs text-gray-400">
                                            <span className="mr-1">{cert.date}</span>
                                        </div>
                                        <a href="https://www.coursera.org/account/accomplishments/verify/5ZKQFZQ9Q4M4" className="text-blue-400 hover:text-blue-300 flex items-center text-xs">
                                            View
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

export default CertificatesSection;
