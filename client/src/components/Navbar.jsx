import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={'flex py-4 justify-between items-center'}>
            <span className={'flex justify-center items-center py-2 px-2  bg-gray-600 text-xs text-white rounded-sm'}>Чебуреки</span>
            <ul className="flex gap-8">
                <li>
                    <NavLink  to="/" className={'text-xs text-gray-400 hover:text-white'}>Главная</NavLink>
                </li>
                <li>
                    <NavLink  to="/new" className={'text-xs text-gray-400 hover:text-white'}>Добавить чебурек</NavLink>
                </li>
            </ul>

        </div>
    );
};

export default Navbar;