import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import RPMGauge from './RPMGauge'
import StickyFooter from './StickyFooter'
import RenderChart from './RenderChart'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  noScroll: {
    overflow: 'hidden',
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  
  const fixedHeightPaperNoScroll = clsx(classes.paper, classes.fixedHeight, classes.noScroll);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
                <Paper className={classes.paper}>
                  <RenderChart />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaperNoScroll}>
                  <RPMGauge />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <p>orders</p>
                </Paper>
              </Grid>
            </Grid>   
          </Container>
        </main> 
      </Container>
      <StickyFooter /> 
    </div>
  );
}




