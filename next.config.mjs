/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:
            [
                new URL('https://skillicons.dev/icons'),
                new URL('https://cdn.simpleicons.org/'),
                new URL('https://cdn.jsdelivr.net/')
            ],
    },
};

export default nextConfig;
