"use client";
import React from "react";
import Image from "next/image";
import { MagicCard } from "../magicui/magic-card";
import { motion } from "framer-motion";

export function AnimateHeroImage() {
	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: -100 },
				visible: { opacity: 1, y: 0, animationDelay: 0.5 },
			}}
			initial="hidden"
			animate="visible"
			viewport={{ once: true }}
			transition={{ duration: 0.8, delay: 1.5, ease: "easeInOut" }}
			className="w-2/4 md:w-2/3 lg:w-1/2 xl:w-1/3"
		>
			<MagicCard className="rounded-full p-[1px]">
				<Image
					src="/profile.png"
					alt="Asher Fraz Anjum"
					width={380}
					height={360}
					loading="eager"
					priority
					quality={100}
					className=" rounded object-cover object-center w-full"
				/>
			</MagicCard>
		</motion.div>
	);
}
