import React from 'react'
import {useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { submitComment } from '../sevices'



const CommentsForm = ({ slug }) => {

  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');
  },[])

  const handleCommentSubmission = () => {
    setError(false)

    const {value: comment} = commentEl.current;
    const {value: name} = nameEl.current;
    const {value: email} = emailEl.current;
    const {checked: storeData} = storeDataEl.current;

    if(!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = {name, email, comment, slug};

    if(storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name', name);
      window.localStorage.removeItem('email', email);
    }

    submitComment(commentObj)
    .then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 3000);
    })

  }


  return (
    <Container>
      <h2>Leave A Reply</h2>
      <textarea name="comment" ref={commentEl} placeholder="Comment....." ></textarea>
      <hr />
      <input type="text" ref={nameEl}  name="name" placeholder='Name..'/>
      <hr />
      <input type="text" ref={emailEl}  name="eamil" placeholder='Email..'/>
      <hr />
      <Check>
        <input type="checkbox" name="storeData" id="storeData" ref={storeDataEl} value="true" />
        <label htmlFor="storeData">Save name and e-mail</label>
      </Check>
      {error && <p>All fields are required</p>}
      <hr />
      <button type='button' onClick={handleCommentSubmission}>Post Comment</button>
      {showSuccessMessage && <span>Comment Submitted for review</span>}
    </Container>
  )
}

const Container = styled.div`
padding: 10px;
width: 70vw;
/* background-color: gray; */
margin-top: 80px;
height: 50vh;


h2 {
  font-size: 15px;
  margin-bottom: 10px;
}

textarea {
  width: 100%;
  height: 15vh;
  padding: 10px;
  font-size: 15px;
}

input {
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  margin-bottom: 10px;
}

button { 
  padding: 10px;
  margin-top: 10px;

  transition: all 200ms ease-in 0s;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: lightblue;
  }

}

  hr {

    border-radius: 4px;
    width: 70px;
   }

`

const Check = styled.div`
display: flex;
align-items: center;


input {
  width: 15px;
}
label { 
  margin-left: 5px;
}
`

export default CommentsForm