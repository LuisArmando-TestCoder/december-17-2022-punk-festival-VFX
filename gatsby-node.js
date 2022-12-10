const shaders = [
    'hillPattern',
    'gooeyMosaic',
    'zoomTest',
    'planet',
    'tokyo',
    'gammaRay',
    'hotTunnelDNA',
]

exports.createPages = async function ({ actions }) {
  shaders.forEach(key => {
    actions.createPage({
      path: `shaders/${key}`,
      component: require.resolve(`./src/templates/shaders.tsx`),
      context: { slug: key },
    })
  })
}
