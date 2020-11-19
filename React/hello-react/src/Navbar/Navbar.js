import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData, MenuData } from './SidebarData'
import './Navbar.css'
import { IconContext } from 'react-icons'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '10%',
        maxWidth: 30,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClick = (e) => {
        setOpen(!open);
        e.stopPropagation()
    }

    return (
        <>
            <IconContext.Provider value={{ color: 'navy' }}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((SidebarData, index) => {
                            return (
                                <li key={index} className={SidebarData.cName}>
                                    <Link to={SidebarData.path}>
                                        {SidebarData.icon}
                                        <span>{SidebarData.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                        {MenuData.map((MenuData, index1) => {
                            return (
                                <div>
                                    <div key={index1} className={MenuData.cName1} onClick={(e) => handleClick(e)}>
                                        <div className="aa">
                                            {MenuData.icon1}
                                            <span>{MenuData.name}</span>
                                        </div>
                                        {/* {open ? <ExpandLess /> : <ExpandMore />} */}
                                    </div>
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItem button className={classes.nested}>

                                                <ListItemText primary="First" style={{ color: "purple" }} />
                                            </ListItem>
                                        </List>
                                        <List component="div" disablePadding>
                                            <ListItem button className={classes.nested}>

                                                <ListItemText primary="Second" style={{ color: "purple" }} />
                                            </ListItem>
                                        </List>
                                    </Collapse>
                                </div>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;