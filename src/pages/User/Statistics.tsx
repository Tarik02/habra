import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import GreenRedNumber from 'src/components/formatters/GreenRedNumber'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'src/hooks'

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  headerColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    display: 'flex',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  headerTitle: {
    fontSize: 12,
    color: theme.palette.text.hint,
  },
  headerNumber: {
    fontSize: 24,
    fontWeight: 800,
    fontFamily: 'Google Sans',
  },
}))

export const Statistics = () => {
  const user = useSelector((store) => store.profile.profile.card.data)
  const classes = useStyles()
  const items = [
    { field: 'Карма', number: user.scoreStats.score, colored: true },
    { field: 'Рейтинг', number: user.rating },
  ]

  if (user.ratingPos) {
    items.push({ field: 'Позиция', number: user.ratingPos })
  }

  return (
    <Grid className={classes.headerContainer} container justify="center">
      {items.map((e, i) => (
        <div key={i} className={classes.headerColumn}>
          <Typography className={classes.headerTitle}>
            {e.field.toUpperCase()}
          </Typography>
          {e.colored ? (
            <GreenRedNumber number={e.number}>
              <Typography className={classes.headerNumber}>
                {e.number > 0 ? '+' : ''}
                {e.number}
              </Typography>
            </GreenRedNumber>
          ) : (
            <Typography className={classes.headerNumber}>{e.number}</Typography>
          )}
        </div>
      ))}
    </Grid>
  )
}
