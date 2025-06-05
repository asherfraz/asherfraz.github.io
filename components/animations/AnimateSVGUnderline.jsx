"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export function AnimateSVGUnderline() {
	const pathRef = useRef(null);
	const controls = useAnimation();
	const [pathLength, setPathLength] = useState(0);
	const [isDone, setIsDone] = useState(false);

	useEffect(() => {
		if (pathRef.current) {
			const length = pathRef.current.getTotalLength();
			setPathLength(length);

			// Start animation
			controls
				.start({
					opacity: 1,
					strokeDashoffset: 0,
					filter: "blur(0px)",
					transition: {
						duration: 1.6,
						ease: "easeInOut",
					},
				})
				.then(() => setIsDone(true));
		}
	}, [controls]);

	return (
		<svg
			height="80"
			width="100%"
			viewBox="0 0 300 50"
			xmlns="http://www.w3.org/2000/svg"
			className="hidden md:block mx-auto -mt-12 w-full max-w-2xl z-10 pointer-events-none"
		>
			<motion.path
				ref={pathRef}
				d="M2 30 Q 150 0 298 30"
				stroke="#ff6900"
				fill="transparent"
				strokeWidth="6"
				strokeLinecap="round"
				initial={{
					opacity: 0,
					strokeDasharray: pathLength,
					strokeDashoffset: pathLength,
					filter: "blur(6px)",
				}}
				animate={controls}
			/>

			{/** Dot appears after line draws */}
			<motion.circle
				// cx="298"
				cx="310"
				// cy="30"
				cy="35"
				r="6"
				fill="#ff6900FF"
				initial={{ opacity: 0, scale: 0 }}
				animate={isDone ? { opacity: 1, scale: 1 } : {}}
				transition={{ duration: 0.4, ease: "easeOut" }}
			/>
		</svg>
	);
}
