import {
	Timeline,
	TimelineDate,
	TimelineHeader,
	TimelineIndicator,
	TimelineItem,
	TimelineSeparator,
	TimelineTitle,
	TimelineContent,
} from "@/components/ui/timeline";
import experience from "@/data/experience.json";

export default function ExpSection() {
	if (!experience || experience.length === 0) {
		return (
			<section id="experience" className="bg-white/3 rounded-lg p-6">
				<div className="text-center">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
						No Experience Found!
					</h2>
					<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						It seems like there is no experience available at the moment.
					</p>
				</div>
			</section>
		);
	}

	const expTimline =
		experience.length > 2 ? (
			<Timeline
				defaultValue={3}
				className="w-full max-w-4xl text-start mx-auto"
				data-orientation="vertical"
			>
				{experience.map((item) => (
					<TimelineItem
						key={item.order}
						step={item.order}
						className="w-[calc(50%-1.5rem)] odd:ms-auto even:text-right even:group-data-[orientation=vertical]/timeline:ms-0 even:group-data-[orientation=vertical]/timeline:me-8 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:-right-6 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:left-auto even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:translate-x-1/2 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:-right-6 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:left-auto even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:translate-x-1/2"
					>
						<TimelineHeader>
							<TimelineSeparator />
							<TimelineDate>
								{item.startDate} - {item.endDate}
							</TimelineDate>
							<TimelineTitle>{item.title}</TimelineTitle>
							<TimelineDate>
								{item.company} - {item.location}
							</TimelineDate>
							<TimelineIndicator />
						</TimelineHeader>
						<TimelineContent className={"text-justify"}>
							{item.description}
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>
		) : (
			<Timeline
				defaultValue={3}
				className="w-full max-w-4xl text-start mx-auto"
			>
				{experience.map((item) => (
					<TimelineItem
						key={item.order}
						step={item.order}
						className="group-data-[orientation=vertical]/timeline:sm:ms-32"
					>
						<TimelineHeader>
							<TimelineSeparator />
							<TimelineDate className="group-data-[orientation=vertical]/timeline:sm:absolute group-data-[orientation=vertical]/timeline:sm:-left-32 group-data-[orientation=vertical]/timeline:sm:w-20 group-data-[orientation=vertical]/timeline:sm:text-right">
								{item.startDate} - {item.endDate}
							</TimelineDate>
							<TimelineTitle>{item.title}</TimelineTitle>
							<TimelineDate>
								{item.company} - {item.location}
							</TimelineDate>
							<TimelineIndicator />
						</TimelineHeader>
						<TimelineContent className={"text-justify"}>
							{item.description}
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>
		);

	return (
		<section id="experience&education" className="bg-white/3 rounded-lg p-6">
			{/* Experience Section */}
			<div id="experience" className="space-y-12 w-full px-4 py-8">
				<div className="opacity-100 -translate-y-[6px] transform">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2 flex flex-col items-center justify-center">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl ">
								Experience.
							</h2>
							<p className="text-muted-foreground w-2/3 text-center md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Here is a timeline of my professional experience, showcasing my
								jobs and roles over the years.
							</p>
						</div>
					</div>
				</div>
				{expTimline}
			</div>
		</section>
	);
}
