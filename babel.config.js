module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@src": "./src",
            "@screens": "./src/screens",
            "@components": "./src/components",
            "@styles": "./src/styles",
            "@types": "./src/types",
            "@assets": "./assets",
          },
        },
      ],
    ],
  };
};
