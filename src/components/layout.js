/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { GlobalStyle, StyledLayout } from '../styles'

import Header from './header'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/zmx0zdq.css" />
      </Helmet>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <StyledLayout>
        {children}
        <footer>
          © {new Date().getFullYear()}, by
          {` `}
          <a href="#">toypiano</a>
        </footer>
      </StyledLayout>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
