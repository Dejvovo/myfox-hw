import { GraphQLClient } from "graphql-request";

// GraphQL endpoint
const endpoint =
  "https://cmyp37vc53jlbv5wa3nrnez6mi0dktla.lambda-url.eu-central-1.on.aws/";

// Your test token
const headers = {
  "X-Api-Key": "da2-gcyvktbwpfhnznbpdaghdbyf7m",
};

// Initialize client
const client = new GraphQLClient(endpoint, { headers });

export const fetchGql = async <T>(
  query: string,
  variables: any
): Promise<T | undefined> => {
  try {
    const data = await client.request(query, {
      ...variables,
    });
    console.log("Data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return undefined;
  }
};
