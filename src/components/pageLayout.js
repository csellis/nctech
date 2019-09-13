import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link as RouterLink } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import AppBar from '@material-ui/core/AppBar'

import SEO from './seo'
import Header from './header'
import './layout.css'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}))

const PageLayout = ({ children }) => {
  const classes = useStyles()

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
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute">
        <Toolbar>
          <Typography component="h1" variant="h6">
            <Link component={RouterLink} to="/">
              {data.site.siteMetadata.title}
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <SEO />
      <Container maxWidth="lg">
        <main>{children}</main>
      </Container>
    </div>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
