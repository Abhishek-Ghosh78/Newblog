import React from 'react'
import styled from 'styled-components';
import { useState, useEffect } from 'react'
import { getRecentPosts, getSimilarPosts } from '../sevices';
import Link from 'next/link';
import moment from 'moment';

const Sidebar = ({ categories, slug }) => {

  const [relatedPost, setRelatedPost] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug)
        .then((result) => setRelatedPost(result));
    } else {
      getRecentPosts()
        .then((result) => setRelatedPost(result))
    }

  }, [slug])

  console.log(relatedPost)

  return (
    <Post>
      <h2>{slug ? 'Related Posts' : 'Recent Posts'}</h2>
      <hr />
      {relatedPost.map((post) => (
        <Link href={`/post/${post.slug}`}>
          <img src={post.featuredImage.url} alt="" />
          <h4>{moment(post.createdAt).format('MM, DD, YYYY')}</h4>
          <p>{post.excerpt}
            {post.title}
          </p>
        </Link>
      ))}

      {/* <Vertical /> */}

    </Post>

  );
}



const Post = styled.div`


         height: 100%;
         padding-left: 10px;
         margin-left: 43px;
    margin-right: 27px;
    margin-top: 33px;
         h2 {
           font-size: 32px;

         }
         hr {
           border: 1px solid gray;
           border-radius: 4px;
           width: 70px;
        margin-left: 20px;
         }
         img {
           height: 100px;
           width: 150px;
           margin-top: 30px;
           border-radius: 4px;
           transition: all 200ms ease-in 0s;
           box-sizing: border-box;
           background-color: #000;
         }
         a {
           margin-top: 10px;
           padding: 2px 0;
           text-decoration: none;
           color: black;
           display: block;
           align-items: center;
           /* background-color: #92969c; */
           justify-content: center;
           padding-left: 10px;
       
           &:hover {
             border-radius: 2px;
             p {
               color: #000;
             }
             img {
               font-size: 10px;
             }
           }
         }
         p {
           font-size: 12px;
           width: -8vw;
           color: #000;
           padding-top: 10px;
           padding-right: 5px;
           align-items: center;
           font-weight: 500;
           text-transform: lowercase;
           font-family: sans-serif;
           font-weight: bold;
           text-transform: uppercase;
         }
       
         h4 {
           color: #000;
           font-size: 12px;
         }
       
         @media screen and (min-width: 1400px){
           a{
             padding-left: 40px;
       
           }
         }
       
         @media screen and (max-width: 738px) {
           a {
             width: 100vw;
             margin-bottom: 0;
             white-space: normal;
             flex-direction: row;
             width: 100vw;
           }
           h2 {
             align-items: center;
             justify-content: center;
             text-align: center;
           }
           hr {
             display: none;
           }
           p {
             width: 100%;
             padding-right: 40px;
             padding-left: 10px;
           }
           img {
             width: 30%;
             display: flex;
             flex-direction: row;
           }
         }
       
         @media screen and (max-width: 400px) {
           margin-left: 10px;
       
           a {
             width: auto;
           }
           p{
             width: 300px;
             padding-right: 10px;
             padding-left: 0px;
             text-align: start;
           }
         }
       `;



const Vertical = styled.div`

         border-left: 1px solid gray;
         height: 100px;
         margin-left: 10px;
         border-radius: 4px;
    
       
         @media screen and (max-width: 738px) {
           border-top: 1px solid gray;
           display: inline-block;
           width: 100%;
           height: 0;
         }
       `;


export default Sidebar