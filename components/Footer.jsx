import Image from "next/image";
import Link from "next/link";
import { Twitter, Linkedin, Github, LinkIcon } from "lucide-react";
import { CondimentRegular } from "@/app/fonts/fonts";
import bio from "@/data/bio.json";

export default function Footer() {
	const social = bio.social;

	return (
		<footer className="flex flex-col justify-center items-center py-10 text-white">
			<Link
				href="/"
				className="flex items-center space-x-2 text-xl font-bold
                p-2 dark:invert hover:border-2 hover:border-primary/100 rounded-full transition-all duration-75 ease-in-out hover:bg-primary/30"
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
					<Twitter className="h-5 w-5 hover:text-primary transition" />
				</Link>
				<Link href={social.github} target="_blank">
					<Github className="h-5 w-5 hover:text-primary transition" />
				</Link>
				<Link href={social.linktree} target="_blank">
					<LinkIcon className="h-5 w-5 hover:text-primary transition" />
				</Link>
				<Link href={social.linkedin} target="_blank">
					<Linkedin className="h-5 w-5 hover:text-primary transition" />
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
		</footer>
	);
}
