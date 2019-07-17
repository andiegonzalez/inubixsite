import React from 'react'
import { Link, graphql } from 'gatsby'
import { useStaticQuery } from "gatsby"

const BlogSection = () => {
    const data = useStaticQuery(pageQuery)
    // const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    return (
        <section className="blogsection">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div className="blog-item" key={node.fields.slug}>
                  <h3 className="blog-title">
                    <Link to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </div>
              )
            })}
        </section>
    )
}

export default BlogSection

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
