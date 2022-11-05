import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useState, useEffect } from 'react'
import { getCategories } from '../sevices';


const Header = () => {




  return (
    <Nav>
      <Link href={`/`}>
        <img src="https://www.pngitem.com/pimgs/m/175-1757329_my-blog-logo-png-transparent-png.png" alt="" />
        <h2>N E W S - B L O G</h2>
      </Link>
    </Nav>
  )
}

const Nav = styled.nav`
    height: 50px;
    width: 100%;
    background-color: #e9f2f2;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
   
    a {
      display: flex;
      align-items: center;
      list-style: none;
      text-decoration: none;
    } 

    h2 {
      margin-left: 10px;
      color: gray;
      font-size: 15px;
    }

    img {
      width: 50px;
    }

    
    @media screen and (max-width: 500px){
      overflow: none;
    
    }
    
    `


  

export default Header