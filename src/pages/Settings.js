import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import {
  Switch,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { makeBackgroundColors } from '../config/theme'

const useStyles = makeStyles(theme => ({
  root: { width: '100%', height: '100%', maxWidth: '100vw' },
  title: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    background: theme.palette.background.default,
    '& p': {
      fontFamily: 'Google Sans',
      fontWeight: 500,
      fontSize: 24,
    },
  },
  list: {
    '& span': { fontSize: 16 },
    '& p': { fontSize: 14 },
  },
}))

const Settings = ({ state, setState }) => {
  const { theme } = state
  const classes = useStyles()

  const setTheme = () => {
    const newThemeType = theme.palette.type === 'light' ? 'dark' : 'light'
    const newTheme = theme
    newTheme.palette.type = newThemeType
    newTheme.palette.background = makeBackgroundColors(newThemeType)
    setState(prev => ({ ...prev, theme: newTheme }))
    localStorage.setItem('theme', newThemeType)
  }

  return (
    <div style={{ width: '100%' }}>
      <Container className={classes.title}>
        <Typography>Настройки</Typography>
      </Container>
      <Divider />

      <List className={classes.list}>
        <ListItem button onClick={setTheme}>
          <ListItemText
            secondary={
              theme.palette.type === 'dark'
                ? 'Сейчас включена темная тема'
                : 'Сейчас включена светлая тема'
            }
            primary="Включить тёмную тему"
          />
          <Switch checked={theme.palette.type === 'dark'} color="primary" />
        </ListItem>
      </List>
    </div>
  )
}

export default Settings
