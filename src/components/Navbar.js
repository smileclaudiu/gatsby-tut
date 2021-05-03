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
            <h1><Link to="/" >{data.site.siteMetadata.title}</Link></h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Portofolio</Link>
            </div>
        </nav>
    )
}
