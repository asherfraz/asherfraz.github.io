import Image from "next/image";
import { CondimentRegular } from "@/app/fonts/fonts";
import { MagicCard } from "./magicui/magic-card";
import { ShinyButton } from "./magicui/shiny-button";
import { GithubIcon, LinkedinIcon, LinkIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import bio from "@/data/bio";

const socialLinks = [
	{
		href: bio.social.github,
		icon: (
			<GithubIcon className="w-6 h-6 text-primary/60 hover:text-primary/100" />
		),
		label: "GitHub",
	},
	{
		href: bio.social.linktree,
		icon: (
			<LinkIcon className="w-6 h-6 text-primary/60 hover:text-primary/100" />
		),
		label: "LinkTree",
	},
	{
		href: bio.social.linkedin,
		icon: (
			<LinkedinIcon className="w-6 h-6 text-primary/60 hover:text-primary/100" />
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
