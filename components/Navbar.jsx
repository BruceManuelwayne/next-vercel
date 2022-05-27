import React from 'react'
import { ActiveLink } from './ActiveLink';
import styles from './Navbar.module.css';

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const Navbar = () => {
  return ( //menu con [] porque no es valido el - en js
    <nav className={ styles['menu-container']}>
      {menuItems.map( ({ text, href} ) => (
          <ActiveLink key={href} href={href} text={text}/> 
      ))}  
      {/* <ActiveLink href="/" text="Home"></ActiveLink>
      <ActiveLink href="/about" text="About"></ActiveLink>
      <ActiveLink href="/contact" text="Contact"></ActiveLink>   */}
    </nav>
  );
}; 
