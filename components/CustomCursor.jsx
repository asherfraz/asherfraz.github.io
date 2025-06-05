"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
	const cursorX = useMotionValue(0);
	const cursorY = useMotionValue(0);

	const springConfig = { damping: 30, stiffness: 200 };
	const x = useSpring(cursorX, springConfig);
	const y = useSpring(cursorY, springConfig);

	useEffect(() => {
		const moveCursor = (e) => {
			cursorX.set(e.clientX);
			cursorY.set(e.clientY);
		};

		window.addEventListener("mousemove", moveCursor);
		return () => window.removeEventListener("mousemove", moveCursor);
	}, [cursorX, cursorY]);

	return (
		<motion.div
			style={{
				translateX: x,
				translateY: y,
			}}
			className="hidden fixed top-0 left-5 z-999  rounded-full w-8 h-8 bg-primary/30  md:flex items-center justify-center  transition-all duration-150 ease-in-out animate-pulse shadow-lg drop-shadow-2xl "
			initial={{ opacity: 0 }}
			animate={{ opacity: [0.5, 0.6, 0.7, 0.8, 0.9, 1] }}
			whileHover={{
				// scale: [1, 1.2, 2, 1.2, 1],
				scale: [2, 1.8, 1.6, 1.4, 1.2, 1],
				transition: { duration: 0.3, ease: "easeInOut" },
			}}
		>
			<motion.span
				whileHover={{
					width: [8, 16, 32, 16, 8],
					height: [8, 16, 32, 16, 8],

					transition: { duration: 0.3, ease: "easeInOut" },
				}}
				className="w-2 h-2 bg-primary rounded-full"
			/>
		</motion.div>
	);
}
