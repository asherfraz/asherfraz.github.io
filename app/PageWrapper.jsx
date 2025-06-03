import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import React from "react";
import { ReactLenis } from "lenis/react";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AnimatedHeader from "@/components/animations/AnimatedHeader";

export default function PageWrapper({ children }) {
	return (
		<ReactLenis root>
			<div className="flex flex-col min-h-screen bg-black/50 text-white ">
				{/* Navbar */}
				<AnimatedHeader />
				{/* Background Grid Pattern */}
				<div className="fixed -inset-5 -z-10">
					<div className="absolute inset-0 blur-xs bg-black/50 text-primary">
						<AnimatedGridPattern />
					</div>
				</div>
				{/* Main Content */}
				<main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8 text-center">
					{children}
				</main>
				<Footer />
				<CustomCursor />
			</div>
		</ReactLenis>
	);
}
