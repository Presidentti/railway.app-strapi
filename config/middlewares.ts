export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          // The default-src usually includes `'self'`, so it’s often helpful to specify https:
          "default-src": ["'self'", "https:"],

          // This is where you add Cloudinary and any other needed image host
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https://market-assets.strapi.io",
            "https://res.cloudinary.com", // or *.cloudinary.com if needed
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "https://res.cloudinary.com",
          ],

          // If you need to enable other resources, add them here
          // 'script-src': ["'self'", "https:"],
          // 'frame-src': ["'self'", "https:"],
          // etc.

          // Prevent Strapi from automatically upgrading requests if you don’t want that
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
