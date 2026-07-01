import React from "react";
import { CondimentRegular } from "../app/fonts/fonts";
import Link from "next/link";
import {  LinkIcon } from "lucide-react";
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
			// <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary/60 hover:text-primary" />
			
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height={24} width={24} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary/60 hover:text-primary"  ><g id="logo-github"><path id="Subtract" fill="#000000" d="M12 2c5.5228 0 10 4.47715 10 10 0 4.5716 -3.0686 8.4239 -7.2578 9.6162v-3.0117c0 -0.7275 -0.1595 -1.4465 -0.4678 -2.1055 2.1883 -0.7822 4.2783 -2.4447 4.2783 -4.4355 0 -1.2663 -0.4671 -2.75174 -1.5127 -3.63186V6l-2.9462 0.98828c-0.6589 -0.16036 -1.3628 -0.24706 -2.0938 -0.24707 -0.731 0 -1.4349 0.08673 -2.09375 0.24707L6.95996 6v2.43164c-1.04555 0.88009 -1.51163 2.36566 -1.51172 3.63186 0 1.9907 2.08913 3.6533 4.27735 4.4355 -0.26358 0.5635 -0.41862 1.1711 -0.45801 1.7901 -0.13854 0.0283 -0.25191 0.0415 -0.34473 0.04 -0.20756 -0.0033 -0.36606 -0.06 -0.51953 -0.1562 -1.11532 -0.7 -1.54401 -1.9835 -3.05566 -2.1543 -0.19076 -0.0214 -0.3474 0.1371 -0.34766 0.3291 0 0.1922 0.15921 0.3423 0.34473 0.3925 1.44216 0.39 1.42755 3.2266 3.54785 3.2598 0.11976 0.0019 0.24101 -0.0069 0.36426 -0.0186v1.6348C5.06807 20.4236 2 16.5713 2 12 2 6.47715 6.47715 2 12 2" strokeWidth={1} /></g></svg>
		),
		label: "GitHub",
	},
	{
		href: bio.social.linktree,
		icon: (
			<LinkIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary/60 hover:text-primary" />
		),
		label: "LinkTree",
	},
	{
		href: bio.social.linkedin,
		icon: (
			// <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary/60 hover:text-primary" />
			<svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary/60 hover:text-primary"><path d="M4.983 2.821a2.188 2.188 0 1 0 0 4.376 2.188 2.188 0 1 0 0-4.376M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z"/></svg>
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
							<Link href={bio.fiverr} target="_blank">
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
