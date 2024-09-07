/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compress: true,
  optimizeFonts: true,
  poweredByHeader: false,
  trailingSlash: false,
  crossOrigin: "anonymous",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  compiler: {
    styledComponents: true,
  },
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    minimumCacheTTL: 86400,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "youtube.com",
      },
      {
        protocol: "https",
        hostname: "www.youtube.com",
      },
      {
        protocol: "https",
        hostname: "material-tailwind.com",
      },
      {
        protocol: "https",
        hostname: "www.material-tailwind.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "api.pexels.com",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },
      {
        protocol: "https",
        hostname: "dwglogo.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
      {
        protocol: "https",
        hostname: "docs.material-tailwind.com",
      },
    ],
  },
  experimental: {
    turbo: {
      resolveAlias: {
        underscore: "lodash",
        mocha: { browser: "mocha/browser-entry.js" },
      },
      resolveExtensions: [
        ".mdx",
        ".tsx",
        ".ts",
        ".jsx",
        ".js",
        ".mjs",
        ".json",
      ],
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  // experimental: {
  //   taint: true,
  //   instrumentationHook: true,
  //   typedRoutes: false,
  //   turbo: {
  //     rules: {
  //       "*.svg": {
  //         loaders: ["@svgr/webpack"],
  //         as: "*.js",
  //       },
  //     },
  //   },
  // },
  // eslint: {
  //   dirs: ["*"],
  // },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
}

export default nextConfig
