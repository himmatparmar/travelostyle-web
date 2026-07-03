const nextConfig = {
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "travelostyle-drupal-backend.ddev.site",
        pathname: "/sites/default/files/**",
      },
      {
        protocol: "http",
        hostname: "travelostyle-drupal-backend.ddev.site",
        pathname: "/sites/default/files/**",
      },
    ],
  },
};

export default nextConfig;