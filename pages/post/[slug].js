import React from 'react'
import { getPosts, getPostDetails } from '../../sevices';
import Author from '../../components/Author';
import PostDetail from '../../components/PostDetail';
import CommentsForm from '../../components/CommentsForm';
import Comments from '../../components/Comments';
import Sidebar from '../../components/Sidebar';
import styled from 'styled-components';
import Header from '../../components/Header'
import { useRouter } from 'next/router';
import Loader from '../../components/Loader';

const PostDetails = ({ post }) => {

    const router = useRouter();

    if(router.isFallback){
        return <Loader/>
    }


    return (
        <>
            <Header />
            <Container>
                <Content>
                    <PostDetail post={post} />
                    {/* <Author author={post.author} /> */}
                    <CommentsForm slug={post.slug} />
                    <Comments slug={post.slug} />
                </Content>

                <Side>
                    <Sidebar slug={post.slug} categories={post.categories.map((category) => category.slug)} />

                </Side>
            </Container>
        </>
    )
}

const Container = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 10px;
`;

const Content = styled.div`
padding: 20px;
margin-bottom: 10px;
margin-top: 20px;
`;

const Side = styled.div`
justify-content: flex-end;

`;

export default PostDetails


export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug)

    return {
        props: { post: data }
    }
}

export async function getStaticPaths() {
    const posts = await getPosts();

    return {
        paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: true,
    }

}