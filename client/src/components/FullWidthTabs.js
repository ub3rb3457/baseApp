import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CanvasChart from './CanvasChart';
import RPMGauge from './RPMGauge';
import TitleBar from './TitleBar';
import SpeedIcon from '@material-ui/icons/Speed';
import BarChartIcon from '@material-ui/icons/BarChart';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import MaterialsCoverFlow from './MaterialsCoverFlow';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  appBar: {
    marginTop: '60px'
  }
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    
    <div className={classes.root}>
      <CssBaseline />
      <TitleBar />
      <AppBar className={classes.appBar} position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Speed" icon={<SpeedIcon />} {...a11yProps(0)} />
          <Tab label="Statistics" icon={<BarChartIcon />} {...a11yProps(1)} />
          <Tab label="Material" icon={<FolderSpecialIcon />} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <RPMGauge />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <CanvasChart />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <MaterialsCoverFlow />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}