import React,  { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import {spacing, typography} from 'material-ui/styles';
import MenuItem from 'material-ui/MenuItem';
import { Link ,withRouter} from "react-router-dom";
import {ListItem} from 'material-ui';
import DashBoard from 'material-ui-icons/Dashboard'
import NoteAdd from 'material-ui-icons/NoteAdd'
import EventNote from 'material-ui-icons/EventNote'
import {blue600,lightBlueA400} from 'material-ui/styles/colors';
import Search from 'material-ui-icons/Search'
import Attachment from 'material-ui-icons/Attachment'
import Settings from 'material-ui-icons/Settings';
import ListIcon from 'material-ui-icons/List';
import Business from 'material-ui-icons/Business'
import PersonAdd from 'material-ui-icons/PersonAdd'
import GroupAdd from 'material-ui-icons/GroupAdd'
import Build from 'material-ui-icons/Build'

const iconStyles = {
  marginRight: 24,
};

const LeftDrawer = (props) => {
  
  let { open } = props;
  const { classes  , location:{pathname}, children } = props;
  console.log('$')
  console.log(props.location)
  console.log(props.location.pathname)
  console.log('$')
  const styles = {
    logo: {
      cursor: 'pointer',
      fontSize: 24,
      color: typography.textFullWhite,
      lineHeight: `${spacing.desktopKeylineIncrement}px`,
      fontWeight: typography.fontWeightLight,
      backgroundColor: lightBlueA400,
      height: 56,
      textAlign:'center',
      fontWeight:700
    },
    selected: {
      backgroundColor: "turquoise !important",
      color: "white",
      fontWeight: 600
    },
    menuItem: {
      color:'#ffffff',
      fontSize: 14,
    },
    listItem: {
      fontSize: 14,
      color:'red'
    },
    avatar: {
      div: {
        padding: '15px 0 20px 15px',
        backgroundImage:  'url(' + require('../../images/material_bg.png') + ')',
        height: 45
      },
      icon: {
        float: 'left',
        display: 'block',
        marginRight: 15,
        boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)',
      },
      span: {
        paddingTop: 12,
        display: 'block',
        color: 'white',
        fontWeight: 300,
        textShadow: '1px 1px #444'
      }
    }
  };

  return (
    <Drawer
      open={open}>
        <div style={styles.logo}>
         Xcite
        </div>
        <div>    
            <MenuItem
            onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
            onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
              primaryText="DashBoard"
              key={0}
              style={styles.menuItem}              
              classes={{ selected: styles.listItem }}
              leftIcon={<DashBoard color={'#ffffff'} />}
              selected
              containerElement={<Link to={"/dashboard"} selected={'/dashboard'===pathname} className={props.location.pathname === '/dashboard' || null ? 'menu-item' : 'notActive'}
              />}
            />


             <MenuItem
              key={1}
              style={styles.menuItem}
              primaryText="Existing Estimates"
              leftIcon={<EventNote color={'#ffffff'}/>}
              containerElement={<Link to={"/existing"} selected={'/existing'===pathname} className={props.location.pathname === '/existing' || null ? 'menu-item' : 'notActive'}/>}
            />

      <ListItem
      style={{color:"red"}} 
      primaryText="New Estimate"
      leftIcon={<NoteAdd color={'#ffffff'}/>}
      style={styles.menuItem}
      disabled	
      primaryTogglesNestedList={true}
      nestedItems={[
        <ListItem
          key={1}
          primaryText="Price Quote"
          style={styles.menuItem}
          containerElement={<Link to={"/"} />}  
        />,
        <ListItem
          key={2}
          primaryText="Quick Quote"
          style={styles.menuItem}
          containerElement={<Link to={"/"} />}  
        />
      ]}
    />

              <MenuItem
              key={3}
              style={styles.menuItem}
              primaryText="Customers"
              leftIcon={<PersonAdd color={'#ffffff'}/>}
              containerElement={<Link to={"/form"}/>}
            />


            <MenuItem
              key={4}
              style={styles.menuItem}
              primaryText="Contractors"
              leftIcon={<GroupAdd color={'#ffffff'}/>}
              containerElement={<Link to={"/form"}/>}
            />


     <ListItem
      style={{color:"white"}} 
      primaryText="Material"
      leftIcon={<Attachment color={'#ffffff'}/>}
      style={styles.menuItem}
      primaryTogglesNestedList={true}
      nestedItems={[
        <ListItem
          key={1}
          primaryText="Price Quote"
          style={styles.menuItem}
        />,
        <ListItem
          key={2}
          primaryText="Quick Quote"
          style={styles.menuItem}
        />
      ]}
    />


            <MenuItem
              key={5}
              style={styles.menuItem}
              primaryText="Reporting"
              leftIcon={<ListIcon color={'#ffffff'}/>}
              containerElement={<Link to={"/form"}/>}
            />

<ListItem
      style={{color:"white"}} 
      primaryText="Foundation"
      leftIcon={<Business color={'#ffffff'}/>}
      style={styles.menuItem}
      primaryTogglesNestedList={true}
      nestedItems={[
        <ListItem
          key={1}
          primaryText="Price Quote"
          style={styles.menuItem}
        />,
        <ListItem
          key={2}
          primaryText="Quick Quote"
          style={styles.menuItem}
        />
      ]}
    />

    <ListItem
      style={{color:"white"}} 
      primaryText="System"
      leftIcon={<Settings color={'#ffffff'}/>}
      style={styles.menuItem}
      primaryTogglesNestedList={true}
      nestedItems={[
        <ListItem
          key={1}
          primaryText="Price Quote"
          style={styles.menuItem}
        />,
        <ListItem
          key={2}
          primaryText="Quick Quote"
          style={styles.menuItem}
        />
      ]}
    />


    <ListItem
      style={{color:"white"}} 
      primaryText="Support"
      leftIcon={<Build color={'#ffffff'}/>}
      style={styles.menuItem}
      primaryTogglesNestedList={true}
      nestedItems={[
        <ListItem
          key={1}
          primaryText="Price Quote"
          style={styles.menuItem}
        />,
        <ListItem
          key={2}
          primaryText="Quick Quote"
          style={styles.menuItem}
        />
      ]}
    />

        </div>        
    </Drawer>
  );
};


export default withRouter(LeftDrawer);
