const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = withPlaiceholder({
  reactStrictMode: true,

  compiler: {
    styledComponents: true,
  },

  images: {
    domains: [
      'localhost',
      'res.cloudinary.com',
      'cloudinary.com',
    ],
  },

  async headers() {
    return [
      {
        source: '/fonts/roboto-flex-v9-latin-regular.woff2',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
});
