module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extenstions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js', '.json'],
        alias: {
          '@navigation': './src/navigation',
          '@atoms': './src/components/atoms',
          '@molecules': './src/components/molecules',
          '@organisms': './src/components/organisms',
          '@templates': './src/components/templates',
          '@pages': './src/components/pages',
          '@gql': './src/graphql',
          '@app-types': './src/types',
          '@src': './src',
        },
      },
    ],
  ],
};
