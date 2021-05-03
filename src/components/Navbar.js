import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Navbar() {
    const data = useStaticQuery(graphql`
        query SiteInfo {
            site(siteMetadata: {}) {
              siteMetadata {
                copyright
                description
                title
              }
            }
          }
        `
    )
    return (
        <nav>
            <h1>{data.site.siteMetadata.title}</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Portofolio</Link>
            </div>
        </nav>
    )
}
