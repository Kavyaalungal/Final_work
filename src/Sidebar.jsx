import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon_header'/> icon
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to="/">
            <BsGrid1X2Fill className='icon'/> Dashboard
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/editinvoice">
            <BsFillArchiveFill className='icon'/> Edit Invoice
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/pendingcollection">
            <BsFillGrid3X3GapFill className='icon'/> Pending Collection
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/customers">
            <BsPeopleFill className='icon'/> Customers
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/inventory">
            <BsListCheck className='icon'/> Inventory
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/reports">
            <BsMenuButtonWideFill className='icon'/> Reports
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/settings">
            <BsFillGearFill className='icon'/> Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
