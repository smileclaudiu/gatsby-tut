import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../../components/Layout'
import { portofolio, projects } from '../../styles/projects.module.css'

export default function Projects({data}) {
    const projectsData = data.projects.nodes
    console.log(data)

    return (
        <Layout>
            <div className={portofolio}>
                <h2>Portofolio</h2>
                <h3>Projects & Websites i've worked on</h3>
                <div className={projects}>
                    {projectsData.map(({id, frontmatter: {title, stack, slug, thumb: {childImageSharp: {gatsbyImageData}}}}) => (
                        <Link to={"/projects/" + slug} key={id}>
                            <div>
                                <GatsbyImage 
                                  image={gatsbyImageData} 
                                  alt={title} 
                                />
                                <h3>{title}</h3>
                                <p>{stack}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

// exports page query

export const query = graphql`
  query MyQuery {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
    siteInfo: site {
      siteMetadata {
        copyright
        description
        title
      }
    }
  } 
`