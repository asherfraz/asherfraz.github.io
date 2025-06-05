/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "quotes-github-readme.vercel.app",
            },
            {
                protocol: "https",
                hostname: "skillicons.dev",
            },
            {
                protocol: "https",
                hostname: "cdn.simpleicons.org",
            },
            {
                protocol: "https",
                hostname: "cdn.jsdelivr.net",
            },
        ],
    },
};

export default nextConfig;
