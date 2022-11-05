// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {GraphQLClient, gql} from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS.ENDPOINT;

export default async function comments(req, res) {
  // const { name, email, slug, comment} = req.body
  const graphQlClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`
    }
  })

  const query = gql`
   mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
    createComment(data: { name: $name, email: $email, comment: $comment, post: { connect: {slug: $slug}}}) {id}
   }
  `

  const result = graphQlClient.request(query, req.body)
  return res.status(200).send(result);
}