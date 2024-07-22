// import { fileURLToPath } from "url";
// import path, { dirname } from "path"; 

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const nextConfig = {
//   images: {
//     domains: ["daisyui.com", "res.cloudinary.com"],
//   },
// };

// export default {
//   webpack: (config, { isServer }) => {
//     config.resolve.alias["@/components"] = path.resolve(
//       __dirname,
//       "src/components"
//     );

//     return config;
//   },
// };


import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "daisyui.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias["@/components"] = path.resolve(
      __dirname,
      "src/components"
    );
    return config;
  },
};

export default nextConfig;

