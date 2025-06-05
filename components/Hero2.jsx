import React from "react";
import { CondimentRegular } from "../app/fonts/fonts";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, LinkIcon } from "lucide-react";
import { ShinyButton } from "./magicui/shiny-button";
import bio from "@/data/bio.json";
import { AnimatedTextFadeUp } from "./animations/AnimatedTextFadeUp";
import { AnimatedBlurIn } from "./animations/AnimatedBlurIn";
import { AnimatedLettersPullUp } from "./animations/AnimatedLettersPullUp";
import { AnimateHeroImage } from "./animations/AnimateHeroImage";

const socialLinks = [
	{
		href: bio.social.github,
		icon: (
			<GithubIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary/60 hover:text-primary/100" />
		),
		label: "GitHub",
	},
	{
		href: bio.social.linktree,
		icon: (
			<LinkIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary/60 hover:text-primary/100" />
		),
		label: "LinkTree",
	},
	{
		href: bio.social.linkedin,
		icon: (
			<LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary/60 hover:text-primary/100" />
		),
		label: "LinkedIn",
	},
];

const Hero2 = () => {
	return (
		<section className="mt-2 rounded-lg bg-white/3 px-4 py-12 text-gray-400">
			<div className="container mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 px-4 text-center md:px-6">
				{/* Profile Image */}
				<AnimateHeroImage />

				{/* Heading */}
				<div className="w-full max-w-4xl space-y-4">
					<AnimatedTextFadeUp
						direction="up"
						className=" flex-col flex justify-center items-center space-y-0"
					>
						<AnimatedLettersPullUp
							text={"Asher Fraz Anjum."}
							className={`${CondimentRegular.className} text-balance text-3xl sm:text-4xl md:text-6xl lg:text-8xl lg:pb-2 font-bold text-white drop-shadow-lg drop-shadow-primary/50 hover:drop-shadow-primary/100 transition-all duration-300`}
						/>

						{/* <h2
							className={`${CondimentRegular.className} text-balance text-3xl sm:text-4xl md:text-6xl lg:text-8xl lg:pb-2 font-bold text-white drop-shadow-lg drop-shadow-primary/50 hover:drop-shadow-primary/100 transition-all duration-300`}
						>
							Asher Fraz Anjum.
						</h2> */}
						<AnimatedBlurIn className={"pt-4 "}>
							<p
								className={`${CondimentRegular.className}  w-full text-balance text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-400`}
							>
								Software Engineer | Full Stack Web Developer
							</p>
						</AnimatedBlurIn>
					</AnimatedTextFadeUp>

					{/* Social Links */}
					<AnimatedBlurIn>
						<div className=" w-full flex flex-wrap justify-center gap-6 py-3 rounded-full bg-black/20 backdrop-blur-lg">
							{socialLinks.map((link) => (
								<Link
									key={link.label}
									href={link.href}
									aria-label={link.label}
									target="_blank"
								>
									{link.icon}
								</Link>
							))}
						</div>
					</AnimatedBlurIn>

					<AnimatedTextFadeUp>
						{/* CTA Buttons */}
						<div className="mt-6 flex flex-wrap justify-center gap-4">
							<Link href={bio.resume} target="_blank" rel="noopener noreferrer">
								<ShinyButton className="shadow-2xl">
									<span className="text-white hover:text-primary font-medium leading-none tracking-tight">
										My Resume
									</span>
								</ShinyButton>
							</Link>
							<Link href={bio.fiverr} target="_blank" rel="noopener noreferrer">
								<ShinyButton className="shadow-2xl">
									<span className="text-white hover:text-primary font-medium leading-none tracking-tight">
										Let&apos;s Build Together &gt;
									</span>
								</ShinyButton>
							</Link>
						</div>
					</AnimatedTextFadeUp>
				</div>
			</div>
		</section>
	);
};

export default Hero2;
