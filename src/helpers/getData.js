import * as contentstack from "contentstack";

const Stack = contentstack.Stack({
  api_key: process.env.REACT_APP_CONTENTSTACK_API_KEY,
  delivery_token: process.env.REACT_APP_CONTENTSTACK_DELIVERY_TOKEN,
  environment: process.env.REACT_APP_CONTENTSTACK_ENVIRONMENT,
});

export const getEntry = () => {
  return new Promise((resolve, reject) => {
    const Query = Stack.ContentType("portfolio").Query();
    Query.includeCount()
      .toJSON()
      .find()
      .then(
        (result) => {
          resolve(result[0][0]);
        },
        (err) => {
          reject(err);
        }
      );
  });
};
