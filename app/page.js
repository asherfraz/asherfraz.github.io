import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Hero2 from "@/components/Hero2";
import { Separator } from "@/components/ui/separator";
import { CondimentRegular } from "@/app/fonts/fonts";
import ExperienceNEducationSection from "@/components/ExperienceNEducationSection";

export const metadata = {
	title: "Asher Fraz Anjum • Software Engineer | Full Stack Developer",
	description:
		"Asher Fraz Anjum is a skilled Software Engineer and Full Stack Developer (MERN Stack). Explore projects, skills, and services including React, Node.js, and MongoDB.",
};

export default function Home() {
	return (
		<section id="Home-page">
			{/* <h2
				className={`${CondimentRegular.className} text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-white font-bold my-8`}
			>
				Asher fraz Anjum.
			</h2> */}
			<Hero2 />
			<Separator className="my-8 w-1/2 mx-auto bg-primary rounded-lg" />
			{/* <Hero /> */}
			<ProjectsSection />
			<Separator className="my-8 w-1/2 mx-auto bg-primary rounded-lg" />
			<ExperienceNEducationSection />
			<Separator className="my-8 w-1/2 mx-auto bg-primary rounded-lg" />
			{/* <SkillsSection /> */}
			{/* <ContactSection /> */}
		</section>
	);
}
