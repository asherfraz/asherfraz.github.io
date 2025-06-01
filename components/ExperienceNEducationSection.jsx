import React from "react";
import education from "@/data/education.json";
import experience from "@/data/experience.json";
import {
	Timeline,
	TimelineContent,
	TimelineDate,
	TimelineHeader,
	TimelineIndicator,
	TimelineItem,
	TimelineSeparator,
	TimelineTitle,
} from "@/components/ui/timeline";

const ExperienceNEducationSection = () => {
	const latestExperience = experience.slice(0, 3);
	// Check if experience or education data is empty
	if (
		!latestExperience ||
		(latestExperience.length === 0 && !education) ||
		education.length === 0
	) {
		return (
			<section id="experience&education" className="bg-white/3 rounded-lg p-6">
				<div className="text-center">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
						No Experience or Education Found!
					</h2>
					<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						It seems like there is no experience or education available at the
						moment.
					</p>
				</div>
			</section>
		);
	}

	if (!latestExperience || latestExperience.length === 0) {
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

	if (!education || education.length === 0) {
		return (
			<section id="education" className="bg-white/3 rounded-lg p-6">
				<div className="text-center">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
						No Education Found!
					</h2>
					<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						It seems like there is no education available at the moment.
					</p>
				</div>
			</section>
		);
	}

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
				<Timeline
					defaultValue={3}
					className="w-full max-w-4xl text-start mx-auto"
				>
					{latestExperience.map((item) => (
						<TimelineItem key={item.order} step={item.order}>
							<TimelineHeader>
								<TimelineSeparator className={"bg-primary/50"} />
								<TimelineDate>
									{item.startDate} - {item.endDate}
								</TimelineDate>
								<TimelineTitle>{item.title}</TimelineTitle>
								<TimelineDate>
									{item.company} - {item.location}
								</TimelineDate>
								<TimelineIndicator className={"border-primary/100"} />
							</TimelineHeader>
							<TimelineContent>{item.description}</TimelineContent>
						</TimelineItem>
					))}
				</Timeline>
			</div>
			{/* Education Section */}
			<div id="education" className="space-y-12 w-full px-4 py-8">
				<div className="opacity-100 -translate-y-[6px] transform">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2 flex flex-col items-center justify-center">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl ">
								Education.
							</h2>
							<p className="text-muted-foreground w-2/3 text-center md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Here is a timeline of my educational background, showcasing my
								degrees and institutions attended over the years.
							</p>
						</div>
					</div>
				</div>
				<Timeline
					defaultValue={3}
					className="w-full max-w-4xl text-start mx-auto"
				>
					{education.map((item) => (
						<TimelineItem
							key={item.order}
							step={item.order}
							className="group-data-[orientation=vertical]/timeline:sm:ms-32"
						>
							<TimelineHeader>
								<TimelineSeparator />
								<TimelineDate className="group-data-[orientation=vertical]/timeline:sm:absolute group-data-[orientation=vertical]/timeline:sm:-left-32 group-data-[orientation=vertical]/timeline:sm:w-20 group-data-[orientation=vertical]/timeline:sm:text-right">
									{item.duration}
								</TimelineDate>
								<TimelineTitle className="sm:-mt-0.5">
									{item.level}
								</TimelineTitle>
								<TimelineIndicator />
							</TimelineHeader>
							<TimelineContent>{item.institution}</TimelineContent>
						</TimelineItem>
					))}
				</Timeline>
			</div>
		</section>
	);
};

export default ExperienceNEducationSection;
