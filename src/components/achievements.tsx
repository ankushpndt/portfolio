import Link from "next/link";
import { FaHashtag } from "react-icons/fa";

const achievements: { title: string; description: string; href: string }[] = []


const Achievements = () => {
	return (
		<section id="achievements" >
			<h2 className="text-lg flex items-center font-semibold">
				Achievements
				<Link
					className="text-muted-foreground"
					aria-label="anchor"
					scroll
					href={"/#achievements"}
				>
					<FaHashtag className="ml-2 h-3 w-3" />
				</Link>
			</h2>
			<div className="flex sm:text-base text-sm flex-col gap-1 ">
				{achievements?.map((achievement) => (
					<Link
						target="_blank"
						key={achievement.title}
						className="text-muted-foreground hover:text-foreground border-b border-border/0 hover:border-foreground transition-colors w-fit hover:animate-pulse"
						href={achievement.href}
					>
						{achievement.title} - {achievement.description}
					</Link>
				))}
			</div>
		</section>
	);
};

export default Achievements;
