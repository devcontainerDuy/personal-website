import Divider from "@/components/ui/Divider";
import Card from "@/components/ui/Card";
import { QuoteIcon } from "lucide-react";
import { testimonials } from "@/api/testimonials.json";

const ReferencesSection = () => {
    return (
        <section id="references" className="relative py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-2">References</h2>
                    <Divider className="max-w-6xl mx-auto mb-6" />
                    <p className="text-gray-300 max-w-2xl mx-auto">What colleagues and clients have to say about working with me.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.author} className="p-6 flex flex-col h-full">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100" />
                            <div className="relative z-10">
                                <div className="mb-6">
                                    <QuoteIcon size={32} className="text-blue-400 opacity-50" />
                                </div>
                                {/* <p className="text-gray-300 italic mb-6 flex-grow">"{testimonial.quote}"</p> */}
                                <div className="flex items-center">
                                    <img src={testimonial.image} alt="" className="w-12 h-12 rounded-full object-cover mr-4" />
                                    <div>
                                        <h4 className="font-medium">{testimonial.author}</h4>
                                        <p className="text-sm  text-gray-400">{testimonial.position}</p>
                                        <p className="text-xs font-bold text-gray-400">Email: {testimonial.email}</p>
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

export default ReferencesSection;
