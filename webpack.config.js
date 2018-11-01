const path = require('path');

module.exports = (env, argv) => {
    const devMode = argv.mode !== 'production';

    return {
        entry: './app/app.js',    // We wants our entry point to this path
        output: {
            filename: 'bundle.js',
            // publicPath: 'static/',
            path: path.resolve(__dirname, 'static/dist'),
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.jsx?$/,  // This will match either .js or .jsx
                    exclude: /node_modules/,
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            ]
        }
    }
};
