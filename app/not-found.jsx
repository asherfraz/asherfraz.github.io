import React from "react";
import Link from "next/link";

export default function NotFound() {
	return (
		<section className="flex h-[50vh] items-center justify-center">
			<section className="bg-white/3 rounded-lg p-12 flex flex-col items-center justify-center gap-4">
				<div className="animate-spin rounded-full h-22 w-22 border-8 border-primary border-dashed bg-primary/25 flex items-center justify-center text-primary text-xl font-bold p-12 whitespace-nowrap">
					{"<"} 404 {"/>"}
				</div>
				<h2 className="animate-pulse text-2xl text-white font-bold">
					404 - Page Not Found!
				</h2>
				<p className="text-white/70 text-sm">
					Sorry, we couldn’t find the page you were looking for.
				</p>
				<Link href="/" className="text-primary hover:underline">
					Go back home
				</Link>
			</section>
		</section>
	);
}
