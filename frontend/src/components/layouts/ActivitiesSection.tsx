import {
	BookIcon,
	CameraIcon,
	GlobeIcon,
	Medal,
	MusicIcon,
	UtensilsIcon,
} from "lucide-react";
import Divider from "@/components/ui/Divider";
import Card from "@/components/ui/Card";

const ActivitiesSection = () => {
	const activities = [
		{
			title: "Reading",
			icon: <BookIcon size={24} className="text-blue-400" />,
			description:
				"I enjoy science fiction and non-fiction books about technology, psychology, and personal development.",
		},
		{
			title: "Music",
			icon: <MusicIcon size={24} className="text-purple-400" />,
			description:
				"I play guitar and piano in my free time and love attending live concerts and music festivals.",
		},
		{
			title: "Traveling",
			icon: <GlobeIcon size={24} className="text-green-400" />,
			description: "Exploring new cultures, cuisines, and landscapes.",
		},
		{
			title: "Sports",
			icon: <Medal size={24} className="text-red-400" />,
			description: "I practice Vovinam martial arts and train my endurance.",
		},
		{
			title: "Photography",
			icon: <CameraIcon size={24} className="text-yellow-400" />,
			description:
				"Capturing landscapes, cityscapes, and street life through my lens whenever I travel.",
		},
		{
			title: "Cooking",
			icon: <UtensilsIcon size={24} className="text-orange-400" />,
			description: "Experiment with new recipes and host family dinners.",
		},
	];

	return (
		<section id="activities" className="relative py-20 px-4 bg-gray-900/30">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold mb-2">
						<span>Personal Activities</span>
					</h2>
					<Divider className="max-w-6xl mx-auto mb-6" />
					<p className="text-gray-300 max-w-2xl mx-auto">
						Beyond coding, these are the activities and interests that keep me
						inspired and balanced.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{activities?.map((activity) => (
						<Card key={activity.title} className="md:max-w-full p-6">
							<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100" />
							<div className="relative z-10">
								<div className="flex items-center mb-4">
									<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
										{activity.icon}
									</div>
									<h3 className="text-lg font-medium">{activity.title}</h3>
								</div>
								<p className="text-gray-300">{activity.description}</p>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default ActivitiesSection;
