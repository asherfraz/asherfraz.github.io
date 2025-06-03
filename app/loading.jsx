import React from "react";

export default function loading() {
	return (
		<section className="flex h-screen items-center justify-center">
			<section className="bg-white/3 rounded-lg p-12 flex flex-col items-center justify-center gap-4">
				<div className="animate-spin rounded-full h-16 w-16 border-8 border-primary border-dashed bg-primary/25"></div>
				<h2 className="animate-pulse text-white font-bold">Loading . . .</h2>
				<p className="text-white/70 text-sm">
					Please wait while the page is loading. This may take a few seconds.
				</p>
			</section>
		</section>
	);
}
