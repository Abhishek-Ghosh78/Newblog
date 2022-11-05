import React from 'react';
import { useRouter } from 'next/router';
import Loader from '../../components/Loader';

import { getCategories, getCategoryPost } from '../../sevices';
// import { PostCard, Categories, Loader } from '../../components';
import Post
 from '../../components/Post';

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div >
      <div >
        <div>
          {posts.map((post, index) => (
            <Post key={index} post={post.node} />
          ))}
        </div>
  
      </div>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}