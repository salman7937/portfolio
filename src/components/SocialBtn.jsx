import React from 'react';
import { FaFacebook, FaReddit, FaTwitterSquare } from 'react-icons/fa';
import { RiDiscordLine, RiTwitterXLine } from 'react-icons/ri';
import { socialData } from '../utils/Data';

function SocialBtn() {
  return (
    <div className='flex gap-6 '>
      {socialData.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target="_blank"
          className='border border-black h-14 w-14 p-4 rounded flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'
        >
          {/* Dynamically render icons based on social.icon */}
          {getIconComponent(social.icon)}
        </a>
      ))}
    </div>
  );
}

export default SocialBtn;

// Helper function to retrieve the appropriate icon component
function getIconComponent(iconName) {
  switch (iconName) {
    case 'FaFacebook':
      return <FaFacebook />;
    case 'FaReddit':
      return <FaReddit />;
    case 'FaTwitterSquare':
      return <FaTwitterSquare />;
    case 'RiDiscordLine':
      return <RiDiscordLine />;
    case 'RiTwitterXLine':
      return <RiTwitterXLine />;
    default:
      return null; 
  }
}