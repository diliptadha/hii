const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      domains: ['remotehiredocuments.s3.ap-south-1.amazonaws.com'],
    },
  };
  
  module.exports = nextConfig;
  