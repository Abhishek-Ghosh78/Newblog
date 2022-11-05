import React from 'react'
import styled from 'styled-components';
import moment from 'moment/moment';
import Link from 'next/link'

const Post = ({ post }) => {
    return (
        <Content>
          <Link href={`/post/${post.slug}`}>
            <img src={post.featuredImage.url} alt={post.title}/>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <span>{ moment(post.createdAt).format('MM, DD, YYYY')}</span>
          </Link>

        </Content>
    )
}

const Content = styled.div`
      display: flex;
      margin-top: 40px;
      justify-content: center;
      a {

        text-decoration: none;
        list-style: none;
        margin-bottom: 38px;
        margin-left: 22%;
      margin-top: 4px;
      margin-right: 48px;
      
      transition: all 200ms ease-in-out 0s;
      
      &:hover {
       transform: scale(1);
       img {
         background-color: black;
         border: 0.5px solid black;
       }
       p {
         color: lightslategrey;
       }
       h2 {
         color: #000;
       }
      }
      
      &:after {
       content: "";
       clear: both;
       display: flex;
      }
      }
      
      h2 {
      font-size: 20px;
      color: black;
      }
      p {
      font-size: 18px;
      color: #000;
      position: relative;
      width: 428px;
      }
      img {
      height: 200px;
      width: 418px;
      
      border-radius: 2px;
      transition: all 200ms ease-in 0s;
      }
      
      @media screen and (max-width: 738px) {
      flex-direction: column;
      margin-top: 10px;
      
      img {
       height: 80px;
       width: 200px;
      }
      a {
       margin-top: 10px;
       align-items: center;
       width: 100vw;
       margin-right: auto;
       position: relative;
       left: 0;
       right: 0;
      }
      }
      
      /* @media screen and (min-width: 483.2px) {
      img{
       height: 100px;
       width: 100px;
      }
      
      } */
      
      @media screen and (max-width: 1355px) {
      img{
      width: 300px;
      height: 100px;
      }
      p{
      width: 300px;
      }
      }
      @media screen and (max-width: 1084px) {
      img{
      width: 250px;
      height: 80px;
      }
      p{
      width: 200px;
      }
      }
      /* @media screen and (max-width: 850.4px) {
      img{
      width: 80px;
      height: 40px;
      }
      p{
      width: 10vw;
      } */
      
      @media screen and (max-width: 483.3px) {
      margin-left: 10px;
      
      p{
      width: 300px;
      }
      img {
      width: 50%;
      }
      }
      `;

export default Post