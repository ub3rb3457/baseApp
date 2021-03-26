import React, { useState, useEffect } from "react"
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BottomNavigation } from '@material-ui/core'
import { BottomNavigationAction } from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import SpeedIcon from '@material-ui/icons/Speed';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

function BottomNav() {
  const classes = useStyles();
  const [selected,setSelected] = useState('dash')

  useEffect(() => {
    
  },[])
  
  return (
    <BottomNavigation value={selected} className={classes.root}>
      <BottomNavigationAction label="Dash" value="dash" icon={<DashboardIcon />} />
      <BottomNavigationAction label="Speed" value="speed" icon={<SpeedIcon />} />
      <BottomNavigationAction label="Stats" value="stats" icon={<BarChartIcon />} />
      <BottomNavigationAction label="Materials" value="materials" icon={<FolderSpecialIcon />} />
    </BottomNavigation>
  )
  
}
export default BottomNav
