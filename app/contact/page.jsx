import { Separator } from "@/components/ui/separator";
import React from "react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
	title: "Contact Asher Fraz Anjum | MERN Stack Developer",
	description:
		"Reach out to Asher Fraz Anjum, a MERN Stack Developer and Software Engineer. Available for freelance projects, collaborations, and tech consulting.",
	keywords: [
		"Asher Fraz Anjum",
		"Contact Asher Fraz",
		"Software Engineer Contact",
		"Web Developer Contact",
		"MERN Stack Developer Contact",
		"Freelancer Contact",
		"Full Stack Developer Pakistan",
		"Fiverr Developer",
		"Upwork Developer",
	],
	openGraph: {
		title: "Contact Asher Fraz Anjum | Software Engineer",
		description:
			"Reach out to Asher Fraz Anjum, MERN Stack Developer and Software Engineer. Open to work and collaborations.",
		url: "https://asherfraz.com/contact",
		siteName: "Asher Fraz Anjum",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Contact Asher Fraz Anjum",
		description: "Reach out for freelance web development or tech projects.",
		creator: "@asherfraz",
		images: ["https://asherfraz.com/profile.png"],
	},
	alternates: {
		canonical: "https://asherfraz.com/contact",
	},
};

export default function Contact() {
	return (
		<div>
			<ContactForm />
			<Separator className="my-8 w-1/2 mx-auto bg-primary rounded-lg" />
		</div>
	);
}
