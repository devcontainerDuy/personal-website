import Divider from "@/components/ui/Divider";
import Card from "@/components/ui/Card";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Label from "../ui/Label";
import Input from "../ui/Input";
import Button from "../ui/Button";

const ContactSection = () => {
    return (
        <section id="contact" className="relative py-20 px-4 bg-gray-900/30">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
                    <Divider className="max-w-6xl mx-auto mb-6" />
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Interested in working together or have a question? Feel free to contact me using the form below or through any of the provided contact methods.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/2">
                        <Card className="md:max-w-full h-full p-6" hoverEffect={false}>
                            <h3 className="text-xl font-medium mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1">
                                        <Mail size={18} className="text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm text-gray-400 mb-1">Email</h4>
                                        <p className="font-medium">developer@example.com</p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-4 mt-1">
                                        <Phone size={18} className="text-purple-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm text-gray-400 mb-1">Phone</h4>
                                        <p className="font-medium">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-4 mt-1">
                                        <MapPin size={18} className="text-green-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm text-gray-400 mb-1">Location</h4>
                                        <p className="font-medium">San Francisco, California</p>
                                        <p className="text-sm text-gray-400 mt-1">Available for remote work worldwide</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="md:w-1/2">
                        <form action="" method="post" className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
                            {/* Name */}
                            <div className="mb-4">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" type="text" placeholder="Your name" variant="secondary" />
                            </div>

                            {/* Email */}
                            <div className="mb-4">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="Your email" variant="secondary" />
                            </div>

                            {/* Subject */}
                            <div className="mb-4">
                                <Label htmlFor="subject">Email</Label>
                                <Input id="subject" type="text" placeholder="Your email" variant="secondary" />
                            </div>

                            {/* Message */}
                            <div className="mb-4">
                                <Label htmlFor="message">Message</Label>

                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Your message"
                                    className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <Button type="submit" className="w-full rounded-md">
                                Send Message
                                <Send size={16} className="ml-2" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
