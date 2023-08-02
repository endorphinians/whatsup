/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_ZEGO_APP_ID: "<your zego app id>",
    NEXT_PUBLIC_ZEGO_SERVER_ID: "<you zego server id>",
  },
  images: { domains: ["whatsup-wvus.onrender.com"] },
};

module.exports = nextConfig;
