import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import {
  Switch,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@material-ui/core'
import { makeStyles, fade } from '@material-ui/core/styles'
import PostItem from '../components/PostItem'
import DotStepper from '../components/DotStepper'
import { ReactSVG } from 'react-svg'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    background: theme.palette.background.paper,
  },
  search: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    border: '1px solid ' + theme.palette.divider,
    borderRadius: theme.shape.borderRadius,
  },
  searchIcon: {
    padding: theme.spacing(1),
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
    flex: 1,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    width: '100%',
  },
  svgHolder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  svg: {
    marginTop: theme.spacing(4),
    width: '78%',
    display: 'flex',
    justifyContent: 'center',
    '& svg': { maxWidth: 400, width: '100%', height: '100%' },
  },
}))

const Search = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        <div className={classes.search}>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
          <IconButton className={classes.searchIcon}>
            <SearchIcon />
          </IconButton>
        </div>
      </div>
      <div className={classes.svgHolder}>
        <ReactSVG className={classes.svg} src="search.svg" />
      </div>
    </>
  )
}

export default Search
