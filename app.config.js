let version = "0.1.0";

export default {
  expo: {
    entryPoint: "./src/index.js",
    name: "virtual-glovebox",
    slug: "virtual-glovebox",
    version: version,
    orientation: "portrait",
    icon: "./src/assets/icon.png",
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      bundleIdentifier: "com.virtualglovebox.glovebox",
      buildNumber: version,
      supportsTablet: true
    }
  }
};
