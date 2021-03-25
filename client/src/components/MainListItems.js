import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import SpeedIcon from '@material-ui/icons/Speed';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SpeedIcon />
      </ListItemIcon>
      <ListItemText primary="Set Target RPM" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Statistics" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FolderSpecialIcon />
      </ListItemIcon>
      <ListItemText primary="Materials" />
    </ListItem>
  </div>
);
