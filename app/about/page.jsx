import React from "react";
import { CondimentRegular } from "@/app/fonts/fonts";
import { Separator } from "@/components/ui/separator";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";

export const metadata = {
	title: "About Asher Fraz Anjum | Full Stack Software Engineer",
	description:
		"Learn about Asher Fraz Anjum, a Full Stack Software Engineer specializing in MERN Stack development. Discover his background, skills, and mission in building modern web applications.",
	keywords: [
		"Asher Fraz Anjum",
		"About Asher Fraz",
		"Full Stack Developer",
		"MERN Stack Developer",
		"Web Developer",
		"Software Engineer",
		"React Developer",
		"Next.js Developer",
		"JavaScript Developer",
		"Node.js Developer",
		"MongoDB",
		"Express.js",
		"Portfolio",
		"Tech Enthusiast",
		"Pakistan Developer",
	],
	openGraph: {
		title: "About Asher Fraz Anjum | Software Engineer",
		description:
			"Explore the story and experience of Asher Fraz Anjum, a MERN Stack Developer and Full Stack Engineer.",
		url: "https://asherfraz.com/about",
		siteName: "Asher Fraz Anjum",
		images: [
			{
				url: "https://asherfraz.com/profile.png",
				width: 1200,
				height: 630,
				alt: "Asher Fraz Anjum - Full Stack Developer",
			},
		],
		type: "website",
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: "About Asher Fraz Anjum",
		description:
			"Meet Asher Fraz Anjum – Full Stack Developer, MERN Stack Specialist, and Software Engineer.",
		creator: "@asherfraz",
		images: ["https://asherfraz.com/profile.png"],
	},
	alternates: {
		canonical: "https://asherfraz.com/about",
	},
};

export default function About() {
	return (
		<section id="about-page">
			{/* <h2
				className={`${CondimentRegular.className} text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-white font-bold my-8`}
			>
				Asher fraz Anjum.
			</h2>
			<p className="mt-4 text-muted-foreground text-center  max-w-full">
				I’m a Software Engineer specializing in the MERN stack. I build
				scalable, modern web apps with clean architecture and focus on user
				experience.
			</p>
			<Separator className="my-8 w-1/2 mx-auto bg-primary rounded-lg" /> */}

			<Hero />
			<Separator className="my-8 w-1/2 mx-auto bg-primary rounded-lg" />
			<TechStack />
			<Separator className="my-8 w-1/2 mx-auto bg-primary rounded-lg" />
		</section>
	);
}
