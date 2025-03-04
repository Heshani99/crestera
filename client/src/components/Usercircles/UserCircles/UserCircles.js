import React from 'react';
import '@fontsource/roboto';
import './UserCircles.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faSearch,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import UserCirclesSearch from './Utils/UserCirclesSearch/UserCirclesSearch';
import UserCirclesHeader from './Utils/UserCirclesHeader/UserCirclesHeader';
import UserCirclesItem from './Utils/UserCirclesItem/UserCirclesItem';
function UserCircles() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="usercircles">
      <div className="usercircles_header">
        <p>USER CIRCLES</p>
      </div>
      <div className="usercircles_header_container">
        <Link to="/UserCirclesCreate" style={{ textDecoration: 'none' }}>
          <button className="usercircles_button">
            <FontAwesomeIcon className="plus_button " icon={faPlus} />
            <span>Create Circle</span>
          </button>
        </Link>
        {/* <div className="usercircles_search_box">
          <div className="usercircles_search_form">
            <form>
              <input type="text" name="search" placeholder="Search.."></input>
            </form>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div> */}
        <div className="usercircles__search">
          <UserCirclesSearch page="crestera" />
        </div>
        {/* <div className="usercircles_filter_box">
          <div className="usercircles_filter_dropdown">
            <div
              className="usercircles_filter_dropdown_button"
              onClick={(e) => setIsActive(!isActive)}
            >
              <p>All Circles</p>
              <div className="dropdown_icon">
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
            {isActive && (
              <div className="usercircles_filter_dropdown_content">
                <Link
                  to="/UserCirclesPublic"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="usercircles_filter_dropdown_item">
                    <p>Public Circles</p>
                  </div>
                </Link>
                <Link
                  to="/UserCirclesPrivate"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="usercircles_filter_dropdown_item">
                    <p>Private Circles</p>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div> */}
      </div>
      <div className="User_Circles_List">
        <div className="usercircles__header">
          <UserCirclesHeader
            title1="Name"
            title2="Type"
            title3="Owned By"
            title4="Members"
          />
        </div>
        <div className="usercircles__items">
          <UserCirclesItem
            fileIcon="note"
            fileName="Circle 01"
            shared={false}
            title1="Public"
            title2="Janith Thenuka"
          />
          <UserCirclesItem
            fileIcon="board"
            fileName="Circle 02"
            shared={false}
            title1="Private"
            title2="Janith Thenuka"
          />
          <UserCirclesItem
            fileIcon="note"
            fileName="Circle 03"
            shared={false}
            title1="Private"
            title2="Janith Thenuka"
          />
          <UserCirclesItem
            fileIcon="note"
            fileName="Circle 04"
            shared={false}
            title1="Private"
            title2="Janith Thenuka"
          />

          <UserCirclesItem
            fileIcon="board"
            fileName="Circle 05"
            shared={false}
            title1="Public"
            title2="Janith Thenuka"
          />
          <UserCirclesItem
            fileIcon="note"
            fileName="Circle 06"
            title1="Public"
            title2="Janith Thenuka"
          />
          <UserCirclesItem
            fileIcon="note"
            fileName="Circle 07"
            title1="Private"
            title2="Janith Thenuka"
          />
          <UserCirclesItem
            fileIcon="note"
            fileName="Circle 08"
            title1="Private"
            title2="Janith Thenuka"
          />
        </div>
      </div>
    </div>
  );
}

export default UserCircles;
