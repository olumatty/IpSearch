/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: "/(.*)",
            headers: [
              {
                key: "Content-Security-Policy",
                value: "upgrade-insecure-requests",
              },
            ],
          },
        ];
      },
};

export default nextConfig;
