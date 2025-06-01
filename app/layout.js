import "./globals.css";
import PageWrapper from "./PageWrapper";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Asher Fraz Anjum • Software Engineer | Full Stack Developer",
  keywords: [
    "Asher Fraz Anjum",
    "Software Engineer",
    "Full Stack Developer",
    "Web Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "Portfolio",
    "Freelance Developer",
    "Upwork Developer",
    "Fiverr Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Applications"
  ],
  authors: [{ name: "Asher Fraz Anjum", url: "https://asherfraz.com", github: "https://github.com/asherfraz" }],
  description: "Asher Fraz Anjum is a skilled Software Engineer and Full Stack Developer (MERN Stack). Explore projects, skills, and services including React, Node.js, and MongoDB.",
  openGraph: {
    title: "Asher Fraz Anjum • Full Stack Developer Portfolio",
    description: "MERN Stack Web Developer Portfolio showcasing projects, services, and skills.",
    url: "https://asherfraz.com",
    siteName: "Asher Fraz Anjum",
    images: [
      {
        url: "https://asherfraz.com/profile.png",
        width: 1200,
        height: 630,
        alt: "Asher Fraz Anjum - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asher Fraz Anjum • Software Engineer",
    description: "Explore Asher Fraz Anjum's web developer portfolio featuring MERN stack projects.",
    creator: "@asherfraz",
    images: ["https://asherfraz.com/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://asherfraz.com"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
      <body
        // className={` font-[inter] antialiased`}
        className={`  antialiased`}
      >
        <PageWrapper>
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
