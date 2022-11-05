import React from 'react'
import { useState, useEffect } from 'react';
import moment from 'moment';
import parse from 'html-react-parser'
import { getComments } from '../sevices';
import { comment } from 'postcss'
import styled from 'styled-components';

const Comments = ({ slug }) => {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug)
      .then((result) => setComments(result))
  }, [])



  return (
    <>
      {comment.length > 0 && (
        <Container>
          {comments.length}

          {' '}
          Comments
          <br />
          {comments.map((comment) => (
            <Content key={comment.createdAt}>
              <p>
                <h3>{comment.name}</h3>
                <span>{moment(comment.createdAt).format('MMM, DD, YYYY')}</span>
              </p>
              <p>{parse(comment.comment)}</p>
            </Content>
          ))}
        </Container>
      )}
    </>

  )
}


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
border: 1px solid black;
border-radius: 10px;
padding: 10px;
margin-top: 10px;

h3{
  font-size: 15px;
  margin-top: 10px;

}


`;

const Content = styled.div`

p{
  margin-top: 10px;
  padding: 5px;
}

span { 
  margin-top: 10px;
  padding: 10px;
}

`

export default Comments