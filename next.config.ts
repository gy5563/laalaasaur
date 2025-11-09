import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	output: 'export',
	images: {
		unoptimized: true,
	},
	allowedDevOrigins: ['http://192.168.0.4:3000'],
};

export default nextConfig;
