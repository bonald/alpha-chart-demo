module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/alpha-chart-demo/'
        : '/',
    outputDir: "docs"
}