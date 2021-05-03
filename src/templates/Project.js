import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'
import {details, featured} from '../styles/project.module.css'

export default function Project({data: {markdownRemark: {html, frontmatter: {title, stack, featuredImg: {childImageSharp: { gatsbyImageData }}}}}}) {

    return (
        <Layout>
            <div className={details}>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <GatsbyImage 
                    image={gatsbyImageData} 
                    className={featured}
                    alt={title}
                />
                <div dangerouslySetInnerHTML={{ __html: html}} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query ProjectQuery($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
        html
        frontmatter {
            stack
            title
            featuredImg {
            childImageSharp {
                gatsbyImageData
            }
            }
        }
        }
    }
`