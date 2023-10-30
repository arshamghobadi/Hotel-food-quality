import request, { gql } from 'graphql-request';

export const getFoodList = async () => {
  const query = gql`
    query Foods {
      foods {
        id
        name
        title
        slug
        date
        image {
          url
        }
      }
    }
  `;
  const result = await request(
    'https://api-eu-west-2.hygraph.com/v2/clod9gq01rt6t01t28l6o1qie/master',
    query
  );
  return result;
};
