import Image from "next/image";
import React from "react";

export default function Devquote() {
	return (
		<div className="max-w-2xl mx-auto px-4">
			<img
				src="https://quotes-github-readme.vercel.app/api?type=horizontal&border=true&theme=dark"
				alt="Dev Quote"
				width={800}
				height={200}
				className="rounded-lg shadow-lg w-full h-auto"
				loading="lazy"
			/>
		</div>
	);
}
