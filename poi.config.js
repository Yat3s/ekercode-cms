const webpack = require('webpack');

module.exports = options => {
  return {
    output: {
      html: {
        // favicon: './public/favicon.ico',
        meta: {
          author: 'Ekercode',
          content: 'Ekercode CMS',
        },
        title: 'Ekercode CMS',
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
