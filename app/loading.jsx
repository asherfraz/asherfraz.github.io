import React from "react";

export default function loading() {
	return (
		<section className="flex h-screen items-center justify-center">
			<section className="bg-white/3 rounded-lg p-12 flex items-center justify-center">
				<div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary">
					Loading...
				</div>
			</section>
		</section>
	);
}
