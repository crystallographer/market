import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        description: "Web market.",
        siteUrl: "https://www.yourdomain.tld",
        title: "Market"
    },
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: `${__dirname}/src/images/icon.png`
            }
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`
            },
            __key: "images"
        },
        "gatsby-transformer-json",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "products",
                path: `${__dirname}/src/data`
            }
        }
    ]
};

export default config;
