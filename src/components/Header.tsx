"use client";
import { Button, Menu, MenuItem } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <div className="bg-white flex py-5 sm:py-10 py-5 sm:px-20 flex-row justify-between w-100">
            <div className='relative' style={{width: 200, height:45}}>
             <Image src="/logo-mvl.png" alt="Logo" 
                fill={true}
                objectFit="contain" />
            </div>
            <div className="sm:hidden">
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MenuIcon/>
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem  href="/informacion-diaria"><a href="/informacion-diaria">Informacion diaria</a></MenuItem>
                    <MenuItem><a href="/reglamentaria">Sección reglamentaria</a></MenuItem>
                    <MenuItem><a href="/contacto">Contacto</a></MenuItem>
                </Menu>
            </div>
            <div className="hidden sm:flex justify-between flex-row">
                <Link passHref href="/informacion-diaria" style={styles.headerTitle} className="ml-10 d-flex align-center text-center cursor-pointer">Información diaria</Link>
                <Link passHref href="/reglamentaria" style={styles.headerTitle} className="ml-10 d-flex align-center text-center cursor-pointer">Sección reglamentaria</Link>
                <Link passHref href="/contacto" style={styles.headerTitle} className="ml-10 d-flex align-center text-center cursor-pointer">Contacto</Link>
            </div>
        </div>
    );
}

const styles = {
    headerTitle: {
        fontSize: 16,
        color: '#616161',
    },
}