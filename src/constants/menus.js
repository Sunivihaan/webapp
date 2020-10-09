import Profile from "../assets/img/hero-header/profile.svg";
import Chat from "../assets/img/hero-header/chat.svg";
import RateLooper from "../assets/img/hero-header/rateLooper.svg";
import HallofFame from "../assets/img/hero-header/hallOfFame.svg";
import HeroLog from "../assets/img/hero-header/heroLog.svg";
import Task from "../assets/img/hero-header/task.svg";
import Map from "../assets/img/hero-header/map.svg";

export const HERO_PROFILE_MENU = [
    {
        img: Profile,
        to: '/hero/profile/heroProfile',
        text: 'Profile',
    },
    {
        img: Chat,
        to: '/chat',
        text: 'Chat',
    },
    {
        img: RateLooper,
        to: '/ratings/ratelooper',
        text: 'Rate a Looper',
    },
    {
        img: HallofFame,
        to: '/hall-of-fame',
        text: 'Hall of Fame',
    },
    {
        img: HeroLog,
        to: '/ratings/myheroapp',
        text: 'My Hero Log',
    },
    {
        img: Task,
        to: '/hero/request/mytasks2',
        text: 'My Tasks',
    },
    {
        img: Map,
        to: '/helper/map',
        text: 'The Map',
    },
    {
        to: '/request',
        text: 'I need a Hero',
    },
];

export const LOOPER_PROFILE_MENU = [
    {
        img: Profile,
        to: '/hero/profile/heroProfile',
        text: 'Profile',
    },
    {
        img: Chat,
        to: '/chat',
        text: 'Chat',
    },
    {
        img: HallofFame,
        to: '/hall-of-fame',
        text: 'Hall of Fame',
    },
    {
        img: HeroLog,
        to: '/ratings/myheroapp',
        text: 'My Hero Log',
    },
    {
        img: Task,
        to: '/hero/request/mytasks2',
        text: 'My Tasks',
    },
    {
        img: Map,
        to: '/helper/map',
        text: 'The Map',
    },
    {
        to: '/request',
        text: 'I need a Hero',
    },
];