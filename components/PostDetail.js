import moment from 'moment'
import React from 'react'
import styled from 'styled-components'

const PostDetail = ({ post }) => {

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <Text key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</Text>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (

            <img
              key={index}
              alt={obj.title}
              height={obj.height}
              width={obj.width}
              src={obj.src}
            />
     
        );
      default:
        return modifiedText;
    }
  };

  return (
    <Container>
      <h2>{post.title}</h2>

      <Content>
        <img src={post.featuredImage.url} alt={post.title} />
        <br />
        <span>{moment(post.createdAt).format('MM, DD, YYYY')}
        </span>
        <h4>{post.author.name}</h4>

      </Content>
      {post.content.raw.children.map((typeObj, index) => {
        const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

        return getContentFragment(index, children, typeObj, typeObj.type)
      })}

    </Container>
  )
}

const Container = styled.div`
display: flex;
flex-direction: column;

`

const Content = styled.div`
width: 60vw;
/* background-color: lightblue; */
box-shadow: 0px 0px, 0em 0 0.4em lightblue;
    margin-left: 50px;
margin-bottom: 10px;
margin-top: 20px ;


h2 {
    padding: 10px;
}

img { 
    width: 40vw;
    height: 35vh;
    justify-content: center;
    padding-bottom: 10px;
    align-items: center;
    margin-left: 90px;
    margin-top: 58px;
}

span {
    justify-content: center;
}
h4{
    padding: 5px;
    font-weight: bold;
    text-transform: uppercase;
}
`

const Text = styled.p`
font-size: 18px;
margin-top: 10px;
line-height: 40px;
padding: 10px;
`

const Img = styled.img`

`

export default PostDetail


