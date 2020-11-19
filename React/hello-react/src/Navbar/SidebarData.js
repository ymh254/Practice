import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { FaFirstAid } from 'react-icons/fa';



export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Mypage',
        path: '/Mypage',
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
    },

    // {
    //     title: 'SubMenu',
    //     path: '/SubMenu',
    //     icon: <AiIcons.AiOutlineClose />,
    //     cName: 'nav-text',
    //     // items: [
    //     //     { name: 'first', label: 'First' },
    //     //     { name: 'second', label: 'Second' }
    //     // ],
    // }
]

export const MenuData = [{
    name: 'Sub',
    icon1: <AiIcons.AiOutlineClose />,
    cName1: 'nav-text1'
},]