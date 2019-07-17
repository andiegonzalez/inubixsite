import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
    const data = useStaticQuery(graphql `
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            linkedin
          }
        }
      }
    }
  `)

    const {author, social} = data.site.siteMetadata
    const style = {
        'borderRadius': '50%'
    }
    return (<section className="biosection">
        <Image fixed={data.avatar.childImageSharp.fixed} alt={author} style={style}/>
        <div>
            <h1 className="biotitle">Acerca de Mi</h1>
            <p>
                More than 30 years of experience on Information Technology. More than 20 years of experience on Financial Services Industry. Fluent in English. Experienced in a broad set of critical IT competencies like Strategic Planning, Strategic Alignment, Enterprise Architecture, Portfolio Management, Business Case Development, Vendor Management, Budget Management, Cost Transparency, Internal Control, Risk Management and RFPs. Executed the Information Technology Due Dilligence of recent acquisition targets in USA. Financial Management of IT.
            </p>
            <p>
                <strong>Specialties: Information Technology, Strategic Planning, Enterprise Architecture, Internal Control, Vendor Management, IT Risk Management, Budget Planning</strong>
            </p>
            <div className="socialmedia-wrapper">
                <a href={`https://twitter.com/${social.twitter}`}>
                    Twitter
                </a>
                <a href={`https://linkedin.com/${social.twitter}`}>
                    LinkedIn
                </a>
            </div>
        </div>
    </section>)
}

export default Bio
