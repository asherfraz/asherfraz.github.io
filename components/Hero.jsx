import Image from "next/image";
import { CondimentRegular } from "@/app/fonts/fonts";
import { MagicCard } from "./magicui/magic-card";
import { ShimmerButton } from "./magicui/shimmer-button";
import { ShinyButton } from "./magicui/shiny-button";
import { GithubIcon, LinkedinIcon, LinkIcon } from "lucide-react";
import Link from "next/link";

const socialLinks = [
	{
		href: "https://github.com/asherfraz",
		icon: (
			<GithubIcon className="w-6 h-6 text-primary/60 hover:text-primary/100" />
		),
		label: "GitHub",
	},
	{
		href: "https://linktr.ee/asherfraz",
		icon: (
			<LinkIcon className="w-6 h-6 text-primary/60 hover:text-primary/100" />
		),
		label: "LinkTree",
	},
	{
		href: "https://pk.linkedin.com/in/asherfraz",
		icon: (
			<LinkedinIcon className="w-6 h-6 text-primary/60 hover:text-primary/100" />
		),
		label: "LinkedIn",
	},
];

const Hero = () => {
	return (
		<section id="hero" className="text-gray-400 body-font w-full h-fit">
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				{/* Left: Intro Text */}
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-white/70">
						Hi, I'm{" "}
						<span
							className={`inline-block  text-primary/100 font-bold ${CondimentRegular.className}`}
						>
							Asher Fraz Anjum
						</span>
						<br className="inline-block" />
						<span className="text-white">Engineering the web,</span>{" "}
						<span className=" text-white">one idea at a time.</span>
					</h1>
					<p className="mb-8 leading-relaxed">
						Fresh Software Engineer with a passion for turning ideas into clean,
						scalable web experiences. Driven by curiosity, powered by
						JavaScript, and always eager to learn, grow, and build. Currently
						exploring the MERN stack and loving every bit of it.
					</p>
					<div className="flex justify-center gap-4">
						<Link
							href="https://drive.google.com/file/d/1TSo5SbWA-JCep3yykAE5-vyEAEWzibZQ/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
						>
							<ShinyButton className="shadow-2xl">
								<span className="whitespace-pre-wrap   font-medium leading-none tracking-tight text-white">
									My Resume
								</span>
							</ShinyButton>
						</Link>
						<Link
							href="https://www.fiverr.com/asherfraz500?public_mode=true"
							target="_blank"
							rel="noopener noreferrer"
						>
							<ShimmerButton className="shadow-2xl">
								<span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-zinc-900/10 lg:text-lg">
									Let's Build together &gt;
								</span>
							</ShimmerButton>
						</Link>
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
					<div className="flex justify-center gap-8 py-4 ">
						{socialLinks.map((link) => (
							<Link
								href={link.href}
								key={link.label}
								aria-label={link.label}
								className="text-primary/60 hover:text-primary/100 transition-colors duration-300"
								target="_blank"
								rel="noopener noreferrer"
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
