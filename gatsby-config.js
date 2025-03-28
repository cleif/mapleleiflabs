module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://mapleleiflabs.github.io/`,
    // Your Name
    name: 'Maple Leif Labs',
    // Main Site Title
    title: `Maple Leif Labs | Azure, DevOps & Other Infrastructure Gotachas & Fixes`,
    // Description that goes under your name in main bio
    // Optional: Twitter account handle
    // Optional: Github account URL
    github: `https://github.com/cleif`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/creightonleif/`,
    // Content of the About Me section
    about: ``,
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Cloud Architect',
        description: 'Cloud Architecture focusing on Core Services, Data, Security & Desktops',
        link: ''
      },
      {
        name: 'Infrastructure Engineering',
        description: 'Fortune 200 Manufacturing & Finance Industries doing VMware Infrastructure, Storage, DR & Exchange',
        link: ''
      },
      {
        name: 'Help Desk, Client Engineering & System Administration',
        description: '.Edu space for Jr. Colleges & Private Liberal Arts Colleges in the Midwest',
        link: ''
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Infrastructure Platforms',
        description:
          'Microsoft Azure, Windows Server, VMware, AKS, Databricks, Azure DevOps, Azure Virtual Desktop, Azure Front Door, Azure APIM',
      },
      {
        name: 'IaC Tooling',
        description: 'Ansible, Terraform, PowerShell, Azure CLI, Bash',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mapleleiflabs`,
        short_name: `mapleleiflabs`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};