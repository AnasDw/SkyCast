import React from 'react'
import NavbarList from '../components/NavBarList'
import { Outlet } from 'react-router'

export default function ShearedLayOut() {
  return (
    <>
      <NavbarList />
      <Outlet />
    </>
  );
}
