import React from "react"
import { Link, graphql } from "gatsby"
import logo from '../../content/assets/logo.png'
import Bio from "../components/bio"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    // const siteTitle = this.props.data.site.siteMetadata.title
    return (
        <div className="blogpost">
            <Link to={'/'}><img src={logo} alt="logo"/></Link>
            <h1 className="blog-title">
              {post.frontmatter.title}
            </h1>
            <p>
              {post.frontmatter.date}
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr/>
            <Bio />
        </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
