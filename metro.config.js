const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

// Load the default config and merge with custom settings
const defaultConfig = getDefaultConfig(__dirname);

// Custom transformer for SVG files
const svgTransformer = {
  getTransformOptions: async () => ({
    transform: {
      experimentalImportSupport: false,
      inlineRequires: false
    }
  }),
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer')
  },
  resolver: {
    assetExts: defaultConfig.resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg']
  }
};

const config = {
  resolver: {
    extraNodeModules: {
      '~': path.resolve(__dirname, 'src')
    }
  }
};

module.exports = mergeConfig(
  defaultConfig,
  mergeConfig(config, svgTransformer)
);
