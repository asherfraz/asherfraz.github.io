import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import bio from "@/data/bio";
import Image from "next/image";

export default function TechStack() {
	const techRows = [
		bio.techstack.slice(0, 9),
		bio.techstack.slice(9, 15),
		bio.techstack.slice(15),
	];

	return (
		<section id="techstack" className="text-gray-400 body-font w-full h-fit">
			<div className="container mx-auto flex px-5 pb-8  flex-col items-center">
				<div className="space-y-12 w-full  px-4 py-12">
					<div className="opacity-100 -translate-y-[6px] transform">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-white text-3xl font-bold tracking-tighter sm:text-5xl ">
									My Tech Stack.
								</h2>
								<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Here are the technologies I specialize in and use to build
									scalable and modern web applications.
								</p>
							</div>
						</div>
					</div>
				</div>
				{techRows.map((row, rowIndex) => (
					<div
						key={rowIndex}
						className="grid grid-cols-3 md:grid-flow-col auto-cols-max justify-center items-center gap-3 max-w-[920px] mx-auto mb-4"
					>
						{row.map((tech, index) => (
							<TooltipProvider
								delayDuration={0}
								key={tech.name + index}
								className="transform -translate-y-1.5"
							>
								<Tooltip>
									<TooltipTrigger asChild>
										<div
											className="inline-block rounded-lg text-background px-3 py-1 text-sm"
											style={{ backgroundColor: tech.color }}
										>
											{tech.name}
										</div>
									</TooltipTrigger>
									<TooltipContent
										className={`p-1 bg-transparent text-[${tech.color}]  shadow-lg`}
									>
										<div className="space-y-2">
											<Image
												src={tech.icon}
												alt={tech.name + " icon"}
												priority
												width={480}
												height={320}
												className="w-10 h-10 rounded-xl bg-transparent object-cover object-center mx-auto mb-2"
											/>
										</div>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						))}
						<div className="space-y-4" />
					</div>
				))}
			</div>
		</section>
	);
}
