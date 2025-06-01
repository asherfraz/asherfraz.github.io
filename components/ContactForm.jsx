"use client";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "./ui/button";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isValid },
		reset,
	} = useForm({ mode: "onChange" });

	const onSubmit = async (data) => {
		try {
			console.log("Form submitted:", data);

			const templateParams = {
				from_name: data.name,
				from_email: data.email,
				to_name: "Asher Fraz Anjum",
				subject: `Portfolio Contact — Message from ${data.name}`,
				message: `
You have received a new message from your portfolio contact form.
  
Name: ${data.name}
Email: ${data.email}
  
Message:
${data.message}
        `,
			};

			const response = await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
				templateParams,
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
			);
			if (response.status === 200) {
				toast.success("Your message has been sent successfully!", {
					duration: 4000,
					style: {
						background: "#74d85c77",
						color: "#FFFFFF",
					},
				});
			} else {
				console.error("EmailJS error:", response);
				toast.error("Something went wrong. Please try again later.", {
					duration: 4000,
					style: {
						background: "#ff4b4bff",
						color: "#FFFFFF",
					},
				});
			}
		} catch (error) {
			console.error("Error submitting form:", error);
			toast.error(
				"Unable to send message. Please check your connection or try again."
			);
		} finally {
			reset();
		}
	};

	return (
		<section className="bg-white/3 rounded-lg p-6 text-gray-400">
			<div className="container px-5 py-18 mx-auto">
				<div className="flex flex-col text-center w-full mb-12">
					<h1 className="sm:text-3xl md:text-5xl text-2xl font-bold  title-font mb-4 text-white">
						Contact Asher Fraz Anjum.
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						Let’s collaborate on your next project. Use the form below or my
						social links to get in touch.
					</p>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="lg:w-1/2 md:w-2/3 mx-auto"
				>
					<div className="flex flex-wrap -m-2">
						{/* Name Field */}
						<div className="p-2 w-1/2">
							<div className="relative">
								<label
									htmlFor="name"
									className="leading-7 text-sm text-gray-400"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									className="w-full bg-white/10 bg-opacity-40 rounded border border-gray-700 focus:border-primary/20 focus:bg-primary/10 focus:ring-2 focus:ring-primary/30 text-base outline-none text-gray-100 py-1 px-3"
									placeholder="Your Name"
									{...register("name", {
										required: "Name is required",
										minLength: {
											value: 2,
											message: "Name must be at least 2 characters",
										},
										maxLength: {
											value: 50,
											message: "Name must be less than 50 characters",
										},
									})}
								/>
								{errors.name && (
									<p className="text-red-500 text-xs mt-1">
										{errors.name.message}
									</p>
								)}
							</div>
						</div>

						{/* Email Field */}
						<div className="p-2 w-1/2">
							<div className="relative">
								<label
									htmlFor="email"
									className="leading-7 text-sm text-gray-400"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									className="w-full bg-white/10 bg-opacity-40 rounded border border-gray-700 focus:border-primary/20 focus:bg-primary/10 focus:ring-2 focus:ring-primary/30 text-base outline-none text-gray-100 py-1 px-3"
									placeholder="your-email@here.com"
									{...register("email", {
										required: "Email is required",
										pattern: {
											value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
											message: "Invalid email address",
										},
									})}
								/>
								{errors.email && (
									<p className="text-red-500 text-xs mt-1">
										{errors.email.message}
									</p>
								)}
							</div>
						</div>

						{/* Message Field */}
						<div className="p-2 w-full">
							<div className="relative">
								<label
									htmlFor="message"
									className="leading-7 text-sm text-gray-400"
								>
									Message
								</label>
								<textarea
									id="message"
									className="w-full bg-white/10 bg-opacity-40 rounded border border-gray-700 focus:border-primary/20 focus:bg-primary/10 focus:ring-2 focus:ring-primary/30 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none"
									placeholder="Type your message here..."
									{...register("message", {
										required: "Message is required",
										minLength: {
											value: 10,
											message: "Message must be at least 10 characters",
										},
										maxLength: {
											value: 500,
											message: "Message must be less than 500 characters",
										},
									})}
								></textarea>
								{errors.message && (
									<p className="text-red-500 text-xs mt-1">
										{errors.message.message}
									</p>
								)}
							</div>
						</div>

						{/* Submit Button */}
						<div className="p-2 w-full flex items-center justify-center">
							<Button
								type="submit"
								disabled={isSubmitting || !isValid}
								className="flex items-center justify-center border border-primary bg-transparent text-primary hover:bg-primary/30 hover:text-primary-foreground transition-colors duration-300 ease-in-out"
							>
								{isSubmitting ? "Sending..." : "Ping Me!"}
							</Button>
						</div>
					</div>
				</form>
			</div>
			<Toaster
				position="top-center"
				reverseOrder={false}
				toastOptions={{
					className: "bg-gray-800 text-white",
					style: {
						fontSize: "16px",
						padding: "16px",
					},
				}}
			/>
		</section>
	);
};

export default ContactForm;
