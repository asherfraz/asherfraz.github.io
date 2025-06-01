import ExpSection from "@/components/ExpSection";
import { Separator } from "@/components/ui/separator";

export const metadata = {
	title: "Experience | Asher Fraz Anjum – Full Stack Developer",
	description:
		"Discover the professional experience of Asher Fraz Anjum, a Full Stack MERN Developer. Learn about projects, companies, and technologies he's worked with in the software engineering field.",
	keywords: [
		"Asher Fraz Anjum",
		"Software Engineer Experience",
		"MERN Stack Developer Resume",
		"Full Stack Developer Projects",
		"Web Developer Journey",
		"React Developer Experience",
		"Node.js Developer",
		"MongoDB Projects",
		"Next.js Developer",
		"Freelance Software Engineer",
		"Portfolio",
		"Tech Stack",
		"Professional Experience",
	],
	openGraph: {
		title: "Experience | Asher Fraz Anjum – Software Engineer",
		description:
			"Explore the professional timeline of Asher Fraz Anjum, a MERN Stack Developer experienced in building scalable web applications.",
		url: "https://asherfraz.com/experience",
		siteName: "Asher Fraz Anjum",
		images: [
			{
				url: "https://asherfraz.com/profile.png",
				width: 1200,
				height: 630,
				alt: "Asher Fraz Anjum – Software Engineer",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Experience | Asher Fraz Anjum",
		description:
			"Review Asher Fraz Anjum's software engineering journey and past development roles.",
		creator: "@asherfraz",
		images: ["https://asherfraz.com/profile.png"],
	},
	alternates: {
		canonical: "https://asherfraz.com/experience",
	},
};

export default function Experience() {
	return (
		<div>
			<ExpSection />
			<Separator className="my-8 w-1/2 mx-auto bg-primary rounded-lg" />
		</div>
	);
}
