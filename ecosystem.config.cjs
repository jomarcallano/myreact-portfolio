module.exports = {
  apps: [
    {
      name: "zomar-portfolio",
      script: "./server/index.js",
      env: {
        NODE_ENV: "production",
        PORT: 3001
      }
    }
  ]
};
