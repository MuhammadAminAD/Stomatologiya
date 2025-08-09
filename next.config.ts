const nextConfig = {
  webpack(config: { module: { rules: { test: RegExp; type: string; }[]; }; }) {
    config.module.rules.push({
      test: /\.json$/,
      type: 'json'
    });
    return config;
  },
};

module.exports = nextConfig;
