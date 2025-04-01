import React, { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { List, ListItem, Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Queryavg from './Queryavg'; // Import the Query1 modal component
import Queryrev from './Queryrev';
import Querysub from './Querysub';
import Queryyear from './Queryyear';
import Q5 from './Q5';
import Q6 from './Q5';

export const MainListItems = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [openQuery1, setOpenQuery1] = useState(false); // State for Query1 modal
  const [openQuery2, setOpenQuery2] = useState(false);
  const [openQuery3, setOpenQuery3] = useState(false);
  const [openQuery4, setOpenQuery4] = useState(false);
  const [openQuery5, setOpenQuery5] = useState(false);
  const [openQuery6, setOpenQuery6] = useState(false);


  const handleClick = () => {
    setOpen(!open);
  };

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const handleQuery1Click = () => {
    setOpenQuery1(true);
  };

  const handleQuery2Click = () => {
    setOpenQuery2(true);
  };

  const handleQuery3Click = () => {
    setOpenQuery3(true);
  };

  const handleQuery4Click = () => {
    setOpenQuery4(true);
  };

  const handleCloseQuery1 = () => {
    setOpenQuery1(false);
  };

  const handleCloseQuery2 = () => {
    setOpenQuery2(false);
  };

  const handleCloseQuery3 = () => {
    setOpenQuery3(false);
  };

  const handleCloseQuery4 = () => {
    setOpenQuery4(false);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const handleQuery5Click = () => {
    setOpenQuery5(!openQuery5);
  };

  const handleCloseQuery5 = () => {
    setOpenQuery5(false);
  };

  const handleQuery6Click = () => {
  setOpenQuery6(true);
  };

  const handleCloseQuery6 = () => {
  setOpenQuery6(false);
  };



  return (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Quantitative" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button onClick={handleQuery1Click}>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Products subcategory" />
          </ListItem>
            
          <ListItem button onClick={handleQuery2Click}>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reviews" />
          </ListItem>

          <ListItem button onClick={handleQuery3Click}>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>          
            <ListItemText primary="Avg Size" />
          </ListItem>

          <ListItem button onClick={handleQuery4Click}>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reviews Submitted" />
          </ListItem>
          {/* Add more subcategories as needed */}
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick1}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Exact-Search" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItem >
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Query 1" />
          </ListItem>
            
          <ListItem>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Query 2" />
          </ListItem>
          {/* Add more subcategories as needed */}
        </List>
        </Collapse>
      <ListItemButton onClick={handleClick2}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Hybrid-Search" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItem button onClick={handleQuery5Click}>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Q 1" />
          </ListItem>
            
          <ListItem button onClick={handleQuery6Click}>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Q 2" />
          </ListItem>
          {/* Add more subcategories as needed */}
        </List>
        </Collapse>
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItemButton>
      <Queryavg open={openQuery1} handleClose={handleCloseQuery1} /> {/* Render Query1 modal */}
      {/* Render Query2 modal */}
      <Queryrev open={openQuery2} handleClose={handleCloseQuery2} />
      {/* Render Query3 modal */}
      <Querysub open={openQuery3} handleClose={handleCloseQuery3} />
      {/* Render Query4 modal */}
      <Queryyear open={openQuery4} handleClose={handleCloseQuery4} />


      <Q5 open={openQuery5} handleClose={handleCloseQuery5} />
      <Q6 open={openQuery6} handleClose={handleCloseQuery6} />
    </React.Fragment>
  );
};

export const SecondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);