<h1 align="center">
  Github organization renderer.
</h1>

This Gatsby project creates a website with all the repos of an organization queried from Github's API.

## 🚀 Quick start

1.  **Clone this repo.**

    ```shell
    git clone https://github.com/DanMMX/github-repos.git
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd github-repos/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## 🧐 What's inside?

This project depends of 2 environment variables:

1. GITHUB_TOKEN: Get a Github token [here](https://github.com/settings/tokens/new) to use the Github GraphQL API
1. GATSBY_GITHUB_ORG: Name a Github organization to query from Github, for example for [Microsoft](https://github.com/microsoft/) it would be just `microsoft`

It will create a homepage for the organization with 100 of its repos and a static page for each of them to be generated on deploy time.

## 📝 TODO

1. Pagination: This project queries the first 100 repos of an organization, when there are more it won't work properly.
1. Regular updates: When the project gets deployed, it fetches all the information (that's why the date of update is on the page). It would be nice to have regular and programmed updates, maybe once a day.
1. Tests