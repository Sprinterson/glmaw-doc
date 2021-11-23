module.exports = {
  plugins: [
    {
      resolve: "smooth-doc",
      options: {
        name: "GLMAW Doc",
        navItems: [{ title: 'Docs', url: '/docs/' }, { title: 'Getting Started', url: '/docs/getting-started/' }],
        sections: ['Guides', 'Reference'],
        description: "Documentation for Groupe Le Monde Ads Wrapper",
        siteUrl: "https://example.com",
        githubRepositoryURL: 'https://github.com/lemonde/glm-ads-wrapper/',
      },
    },
  ],
};
