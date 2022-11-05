import Head from 'next/head'
import Header from '../components/Header'
import Post from '../components/Post'
import styled from 'styled-components';
import { getPosts } from '../sevices';
import Sidebar from '../components/Sidebar';
import Categories from '../components/Categories';


export default function Home({ posts }) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
        <Content>
          {posts.map((post) => <Post post={post.node} key={post.title} />)}
        </Content>

        <Side>
          <Sidebar />

        </Side>

      </Container>
    </div>
  )
}

const Container = styled.div`
display: flex;
justify-content: space-between;


@media screen and (max-width: 500px){
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}


`

const Content = styled.div`
display: flex;
flex-wrap: wrap;

align-items: center;

@media screen  and (max-width: 500px){

}
`

const Side = styled.div`
display: flex;
margin-top: 20px;
margin-left: 20px;

`


export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}