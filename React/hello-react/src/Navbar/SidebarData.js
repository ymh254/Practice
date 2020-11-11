import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/About',
        icon: <AiIcons.AiFillBook />,
        cName: 'nav-text'
    },
    {
        title: 'Calendar',
        path: '/MyCalendar',
        icon: <BsIcons.BsFillCalendarFill />,
        cName: 'nav-text'
    },
    {
        title: 'Users',
        path: '/Users',
        icon: <BsIcons.BsFillPersonFill />,
        cName: 'nav-text'
    }
]