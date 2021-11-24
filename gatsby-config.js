module.exports = {
  plugins: [
    {
      resolve: "smooth-doc",
      options: {
        name: "GLMAW Doc",
        navItems: [{ title: 'Guide', url: '/docs/' }, { title: 'Plus', url: '/docs/plugins/' }],
        sections: ['Guide', 'Plus'],
        description: "Documentation pour Groupe Le Monde Ads Wrapper",
        siteUrl: "https://glmaw-doc.netlify.app/",
        githubRepositoryURL: 'https://github.com/lemonde/glm-ads-wrapper/',
      },
    },
  ],
};
