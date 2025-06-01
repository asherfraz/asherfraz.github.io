// "use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";
import Image from "next/image";
import { CondimentRegular } from "../app/fonts/fonts";
import React from "react";

const DATA = {
	navbar: [{ href: "/", icon: "/next.svg", label: "Building Career 🔨🛠🔨" }],
	navitem: {
		about: {
			name: "About",
			url: "/about",
		},
		projects: {
			name: "Projects",
			url: "/projects",
		},
		experience: {
			name: "Experience",
			url: "/experience",
		},
		contact: {
			name: "Contact",
			url: "/contact",
		},
	},
};

export function Navbar() {
	return (
		<div className="w-full h-16 flex flex-col items-center justify-center">
			<TooltipProvider>
				<Dock
					direction="middle"
					className="w-full max-w-sm md:max-w-2xl  flex items-center justify-evenly "
				>
					{DATA.navbar.map((item) => (
						<DockIcon key={item.label}>
							<Tooltip>
								<TooltipTrigger asChild>
									<Link
										href={item.href}
										aria-label={item.label}
										className={cn(
											buttonVariants({ variant: "link", size: "icon" }),
											"size-12 rounded-full flex items-center justify-center  "
										)}
									>
										<Image
											className="dark:invert hover:border-2 hover:border-primary/100 rounded-full transition-all duration-300"
											src="/profile.png"
											alt="Profile Picture"
											loading="eager"
											width={180}
											height={38}
											priority
										/>
										<span
											className={`${CondimentRegular.className} hidden md:block text-white text-xl`}
										>
											asherfraz
										</span>
									</Link>
								</TooltipTrigger>
								<TooltipContent>
									<p>{item.label}</p>
								</TooltipContent>
							</Tooltip>
						</DockIcon>
					))}
					<Separator orientation="vertical" className="h-full" />
					{Object.entries(DATA.navitem).map(([name, nav]) => (
						<React.Fragment key={name}>
							{name === "contact" && (
								<Separator orientation="vertical" className="h-full" />
							)}
							<DockIcon key={name}>
								<Tooltip>
									<TooltipTrigger asChild>
										<Link
											href={nav.url}
											aria-label={nav.name}
											className={cn(
												buttonVariants({ variant: "ghost", size: "icon" }),
												"size-12 rounded-lg px-10 hover:bg-primary/100 hover:text-white "
											)}
										>
											{nav.name}
										</Link>
									</TooltipTrigger>
									{/* <TooltipContent>
									<p>{name}</p>
								</TooltipContent> */}
								</Tooltip>
							</DockIcon>
						</React.Fragment>
					))}
				</Dock>
			</TooltipProvider>
		</div>
	);
}
