module.exports = {
  blogPostDir: "sample-posts",
  siteTitle: "Sahir Memon", // Site title.
  siteTitleAlt: "Sahir Memon", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://sahirmemon.com", // Domain of your website without pathPrefix.
  pathPrefix: "/sahirmemon", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Software Engineer in Atlanta, GA.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Sahir Memon", // Username to display in the author segment.
  userTwitter: "@sahir_memon", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Atlanta, GA", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Software Engineer in Atlanta, GA.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/sahirmemon",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/sahir_memon",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:me@sahirmemon.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. Sahir Memon", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  constants: {
    breakpoint: {
      xs: 480,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1600
    },
    gutter: '5rem',
    menuWidth: '18rem'
  }
};
