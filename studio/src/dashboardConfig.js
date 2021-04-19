export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "607deda71c06d100d31a338b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-wr4z2m9y",
                  apiId: "7517805f-5736-4d4c-b744-56710ba0b662",
                },
                {
                  buildHookId: "607deda7dfba3500a7d5b262",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-iqbaicm6",
                  apiId: "7f321a21-7a82-4b13-b02d-6cf25ce86ac4",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/kaleem-elahi/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-iqbaicm6.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
