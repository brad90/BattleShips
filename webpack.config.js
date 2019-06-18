const config = {
  entry: `${__dirname}/client/srcapp.js`,
  output: {
    path: `${__dirname}/client/public/js`,
    filename: 'bundle.js'
  },
  mode: 'development',

  
};

module.exports = config;
