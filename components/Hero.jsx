import Image from "next/image";
import { CondimentRegular } from "@/app/fonts/fonts";
import { MagicCard } from "./magicui/magic-card";
import { ShinyButton } from "./magicui/shiny-button";
import {  LinkIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import bio from "@/data/bio";

const socialLinks = [
	{
		href: bio.social.github,
		icon: (
			// <GithubIcon className="w-6 h-6 text-primary/60 hover:text-primary/100" />
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height={24} width={24} className="w-6 h-6 text-primary/60 hover:text-primary"  ><g id="logo-github"><path id="Subtract" fill="#000000" d="M12 2c5.5228 0 10 4.47715 10 10 0 4.5716 -3.0686 8.4239 -7.2578 9.6162v-3.0117c0 -0.7275 -0.1595 -1.4465 -0.4678 -2.1055 2.1883 -0.7822 4.2783 -2.4447 4.2783 -4.4355 0 -1.2663 -0.4671 -2.75174 -1.5127 -3.63186V6l-2.9462 0.98828c-0.6589 -0.16036 -1.3628 -0.24706 -2.0938 -0.24707 -0.731 0 -1.4349 0.08673 -2.09375 0.24707L6.95996 6v2.43164c-1.04555 0.88009 -1.51163 2.36566 -1.51172 3.63186 0 1.9907 2.08913 3.6533 4.27735 4.4355 -0.26358 0.5635 -0.41862 1.1711 -0.45801 1.7901 -0.13854 0.0283 -0.25191 0.0415 -0.34473 0.04 -0.20756 -0.0033 -0.36606 -0.06 -0.51953 -0.1562 -1.11532 -0.7 -1.54401 -1.9835 -3.05566 -2.1543 -0.19076 -0.0214 -0.3474 0.1371 -0.34766 0.3291 0 0.1922 0.15921 0.3423 0.34473 0.3925 1.44216 0.39 1.42755 3.2266 3.54785 3.2598 0.11976 0.0019 0.24101 -0.0069 0.36426 -0.0186v1.6348C5.06807 20.4236 2 16.5713 2 12 2 6.47715 6.47715 2 12 2" strokeWidth={1} /></g></svg>
		),
		label: "GitHub",
	},
	{
		href: bio.social.linktree,
		icon: (
			<LinkIcon className="w-6 h-6 text-primary/60 hover:text-primary" />
		),
		label: "LinkTree",
	},
	{
		href: bio.social.linkedin,
		icon: (
			// <LinkedinIcon className="w-6 h-6 text-primary/60 hover:text-primary/100" />
			<svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"} className="w-6 h-6 text-primary/60 hover:text-primary"><path d="M4.983 2.821a2.188 2.188 0 1 0 0 4.376 2.188 2.188 0 1 0 0-4.376M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z"/></svg>
		),
		label: "LinkedIn",
	},
	{
		href: bio.email,
		icon: (
			<MailIcon className="w-6 h-6 text-primary/60 hover:text-primary/100" />
		),
		label: "Email",
	},
];

const btns = [
	{
		label: "My Resume",
		href: bio.resume,
	},
	{
		label: "Fiverr Profile",
		href: bio.fiverr,
	},
	{
		label: "UpWork Profile",
		href: bio.upwork,
	},
];

const Hero = () => {
	return (
		<section id="hero" className="text-gray-400 body-font w-full h-fit">
			<div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
				{/* Left: Intro Text */}
				<div className="lg:flex-grow w-full md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className=" w-full sm:text-4xl text-3xl mb-4 font-semibold text-white/70">
						Engineering the web, one idea at a time.
					</h1>
					<p className="mb-8 leading-relaxed">{bio.bio}</p>
					<div className="flex flex-wrap grow w-md items-start justify-center gap-4">
						{btns.map((btn, index) => (
							<Link
								key={index}
								href={btn.href}
								target="_blank"
								rel="noopener noreferrer"
							>
								<ShinyButton className="shadow-2xl hover:bg-primary/50 transition-colors duration-300 ease-in-out">
									<span className="whitespace-pre-wrap   font-medium leading-none tracking-tight text-white">
										{btn.label}
									</span>
								</ShinyButton>
							</Link>
						))}
					</div>
				</div>

				{/* Right: Profile Image */}
				<div className="flex flex-col  items-center justify-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
					<MagicCard className="p-[1px] rounded-full  ">
						<Image
							width={380}
							height={360}
							loading="eager"
							className="object-cover object-center rounded"
							alt="Asher Fraz Anjum"
							src="/profile.png"
							priority
						/>
					</MagicCard>
					<h1
						className={`inline-block text-primary/100 font-bold ${CondimentRegular.className} title-font sm:text-4xl text-3xl py-4 font-semibold `}
					>
						Asher Fraz Anjum.
					</h1>
					<div className="flex justify-center gap-8  pb-4 ">
						{socialLinks.map((link) => (
							<Link
								href={link.href}
								key={link.label}
								aria-label={link.label}
								className="text-primary/60 hover:text-primary/100 transition-colors duration-300"
								target="_blank"
							>
								{link.icon}
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
