"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faBell,faGear, faImage} from '@fortawesome/free-solid-svg-icons';

function LeftBar() {
  const [activeIcon, setActiveIcon] = useState('home');

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <div className="h-screen w-[4vw] fixed left-0 top-0 bg-slate-900 flex flex-col items-center py-4 p-5 pt-14 justify-between justify-items-center">
    <div>
      <FontAwesomeIcon
        icon={faHome}
        size='2x'
        className={`mb-14 ${activeIcon === 'home' ? 'text-green-500' : 'text-white'}`}
        onClick={() => handleIconClick('home')}
      />
      <FontAwesomeIcon
        icon={faImage}
        size='2x'
        className={`mb-14 ${activeIcon === 'user' ? 'text-green-500' : 'text-white'}`}
        onClick={() => handleIconClick('user')}
      />
      <FontAwesomeIcon
        icon={faCog}
        size='2x'
        className={`mb-14 ${activeIcon === 'cog' ? 'text-green-500' : 'text-white'}`}
        onClick={() => handleIconClick('cog')}
      />
      <FontAwesomeIcon
        icon={faBell}
        size='2x'
        className={`mb-14 ${activeIcon === 'bell' ? 'text-green-500' : 'text-white'}`}
        onClick={() => handleIconClick('bell')}
      />
    </div>
      <div>
      <FontAwesomeIcon
        icon={faGear}
        size='2x'
        className={`mb-3 ${activeIcon === 'gear' ? 'text-green-500' : 'text-white'}`}
        onClick={() => handleIconClick('gear')}
      />
      </div>
    </div>
  );
}

export default LeftBar;
