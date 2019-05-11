const webpack = require('webpack');

module.exports = options => {
  return {
    output: {
      html: {
        // favicon: './public/favicon.ico',
        meta: {
          author: 'Eker Code',
          content: 'Eker Code CMS',
        },
        title: 'Eker Code CMS',
      },
    },
    chainWebpack(config, context) {
      const envVars = [];
      config
        .plugin('env')
        .use(webpack.EnvironmentPlugin)
        .tap(args => [...(args || []), ...envVars]);
    },
  };
};
