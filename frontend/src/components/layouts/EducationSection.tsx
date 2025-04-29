import Divider from "@/components/ui/Divider";
import Card from "@/components/ui/Card";

const EducationSection = () => {
    return (
        <section id="education" className="relative py-20 px-4 bg-gray-900/30">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-2">
                        <span>Education</span>
                    </h2>
                    <Divider className="max-w-6xl mx-auto mb-6" />
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Academic background and qualifications that have shaped my knowledge and skills in the field of technology.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/2 flex flex-col justify-center">
                        <Card className="max-w-xl p-6">
                            <h3 className="text-xl font-semibold mb-2">Bachelor of Software Development</h3>
                            <p className="text-gray-400">FPT POLYTECHNIC College, 2022 - 2024</p>
                            <p className="text-gray-300 mt-4">
                                During my time at school, I learned and mastered the basics of PHP (Laravel Framework), JavaScript, Bootstrap, and MySQL.
                            </p>
                            <p className="text-gray-300 mt-2">In addition, I also learned more about technologies such as React, Node, TypeScript, MUI, Tailwind CSS, and jQuery, which helped me improve my programming skills and develop web applications more effectively.</p>
                            <p className="text-gray-300 text-sm font-bold mt-2">GPA: 3.16/4.0</p>
                        </Card>
                    </div>

                    <div className="md:w-1/2 flex items-center justify-center">
                        <img
                            className="h-auto max-w-full shadow-xl rounded-lg"
                            alt="Education"
                            src="https://scontent.fsgn24-2.fna.fbcdn.net/v/t39.30808-6/493918954_1263374205795276_3052028114096702613_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEiBSGwie58h0jZ7MZSv9Ier1fcnt3NRYSvV9ye3c1FhJWx6j8oQ9KmUPszpKh4cs40jMHdcdgLSEr3tiuGvO_n&_nc_ohc=s8r79iDv8IsQ7kNvwEI-Q1v&_nc_oc=Adkg4q92IWGE0vbI8lwuz25eD3skaSf9tvQccAD5Vmr_7bzSLYKVsufoKeZnAadtJns&_nc_zt=23&_nc_ht=scontent.fsgn24-2.fna&_nc_gid=BGONTBiTFeaWbyQzDx2wuQ&oh=00_AfEyJQPs6eBDjrWxPa2YbGwdrncT0EXVfzRNMY82nEjlNQ&oe=68169B70"
                            id="scroll-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
