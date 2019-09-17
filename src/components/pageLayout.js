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

import { ThemeProvider } from '@material-ui/styles'
import theme from '../theme'

import SEO from './seo'
import Header from './header'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
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
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute">
          <Toolbar>
            <Typography component="h1" variant="h6">
              <Link component={RouterLink} to="/" color="inherit">
                {data.site.siteMetadata.title}
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <SEO />
        <Container maxWidth="lg">
          <main className={classes.content}>
            <div className={classes.appBarSpacer}></div>
            {children}
          </main>
        </Container>
      </div>
    </ThemeProvider>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
