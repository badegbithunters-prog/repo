/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // penting biar CSS/JS konsisten
  // assetPrefix: './',   // supaya semua path relatif, bukan absolut (dihapus untuk perbaikan CSS)
  
  // Optimizations for Tauri
  experimental: {
    // Disable some Next.js features that might cause issues in Tauri
    esmExternals: 'loose',
  },
  
  // Ensure all routes are generated as static pages
  generateBuildId: async () => {
    return 'hade-pos-build'
  },
};

module.exports = nextConfig;
