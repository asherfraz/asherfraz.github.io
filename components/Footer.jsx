"use client";
import Image from "next/image";
import Link from "next/link";
import { LinkIcon } from "lucide-react";
import { CondimentRegular } from "@/app/fonts/fonts";
import bio from "@/data/bio.json";
import { motion } from "framer-motion";

export default function Footer() {
	const social = bio.social;

	return (
		<motion.footer
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: false, amount: 0.3 }}
			transition={{ duration: 0.5, ease: "easeInOut" }}
			className="flex flex-col justify-center items-center py-10 text-white"
		>
			<Link
				href="/"
				className="flex items-center space-x-2 text-xl font-bold
                p-2 dark:invert hover:border-2 hover:border-primary rounded-full transition-all duration-75 ease-in-out hover:bg-primary/30"
				aria-label="Asher Fraz Anjum"
			>
				<Image
					src="/profile.png"
					alt="Profile Picture"
					loading="lazy"
					width={30}
					height={30}
					className="rounded-full"
				/>
				<span className={`${CondimentRegular.className}  text-white text-xl`}>
					asherfraz
				</span>
			</Link>

			<div className="flex grow flex-wrap flex-row justify-center space-y-4  space-x-4 mt-4 text-sm text-zinc-100">
				<Link href="/about" className="hover:text-primary transition">
					<span>About</span>
				</Link>
				<Link href="/projects" className="hover:text-primary transition">
					<span>Projects</span>
				</Link>
				<Link href="/experience" className="hover:text-primary transition">
					<span>Experience</span>
				</Link>
				<Link href="/contact" className="hover:text-primary transition">
					<span>Contact</span>
				</Link>
			</div>
			<div className="flex space-x-4 mt-4 text-zinc-500">
				<Link href={social.twitter} target="_blank">
					{/* <Twitter className="h-5 w-5 hover:text-primary transition" /> */}
					<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" className="h-5 w-5 hover:text-primary transition " viewBox="0 0 16 16" id="Twitter-X--Streamline-Bootstrap" height={16} width={16} ><desc></desc><path d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z" strokeWidth={1} /></svg>
				</Link>
				<Link href={social.github} target="_blank">
					{/* <Github className="h-5 w-5 hover:text-primary transition" /> */}
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height={24} width={24} className="h-5 w-5 hover:text-primary transition"  ><g id="logo-github"><path id="Subtract" fill="#000000" d="M12 2c5.5228 0 10 4.47715 10 10 0 4.5716 -3.0686 8.4239 -7.2578 9.6162v-3.0117c0 -0.7275 -0.1595 -1.4465 -0.4678 -2.1055 2.1883 -0.7822 4.2783 -2.4447 4.2783 -4.4355 0 -1.2663 -0.4671 -2.75174 -1.5127 -3.63186V6l-2.9462 0.98828c-0.6589 -0.16036 -1.3628 -0.24706 -2.0938 -0.24707 -0.731 0 -1.4349 0.08673 -2.09375 0.24707L6.95996 6v2.43164c-1.04555 0.88009 -1.51163 2.36566 -1.51172 3.63186 0 1.9907 2.08913 3.6533 4.27735 4.4355 -0.26358 0.5635 -0.41862 1.1711 -0.45801 1.7901 -0.13854 0.0283 -0.25191 0.0415 -0.34473 0.04 -0.20756 -0.0033 -0.36606 -0.06 -0.51953 -0.1562 -1.11532 -0.7 -1.54401 -1.9835 -3.05566 -2.1543 -0.19076 -0.0214 -0.3474 0.1371 -0.34766 0.3291 0 0.1922 0.15921 0.3423 0.34473 0.3925 1.44216 0.39 1.42755 3.2266 3.54785 3.2598 0.11976 0.0019 0.24101 -0.0069 0.36426 -0.0186v1.6348C5.06807 20.4236 2 16.5713 2 12 2 6.47715 6.47715 2 12 2" strokeWidth={1} /></g></svg>
				</Link>
				<Link href={social.linktree} target="_blank">
					<LinkIcon className="h-5 w-5 hover:text-primary transition" />
				</Link>
				<Link href={social.linkedin} target="_blank">
					{/* <Linkedin className="h-5 w-5 hover:text-primary transition" /> */}
					<svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"} className="h-5 w-5 hover:text-primary transition" ><path d="M4.983 2.821a2.188 2.188 0 1 0 0 4.376 2.188 2.188 0 1 0 0-4.376M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z"/></svg>
				</Link>
			</div>

			<p className="text-sm text-zinc-400 mt-4">
				&copy; {new Date().getFullYear()} Asher Fraz Anjum. All rights reserved.
			</p>
			{/* <p className="text-sm text-zinc-400 mt-2">
				Designed and Developed by{" "}
				<Link
					href={social.github}
					target="_blank"
					className="text-primary hover:underline"
				>
					Asher Fraz
				</Link>
			</p> */}
		</motion.footer>
	);
}
