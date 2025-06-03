"use client";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";

export default function AnimatedHeader() {
	return (
		<motion.header
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: "easeInOut" }}
			className=" sticky top-0 z-10  pb-4  backdrop-blur-md"
		>
			<div className=" mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<Navbar />
			</div>
		</motion.header>
	);
}
