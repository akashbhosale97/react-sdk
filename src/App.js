import Intro from "./components/Intro";
import * as contentstack from "contentstack";
import { useEffect, useState } from "react";

const Stack = contentstack.Stack({
  api_key: process.env.REACT_APP_CONTENTSTACK_API_KEY,
  delivery_token: process.env.REACT_APP_CONTENTSTACK_DELIVERY_TOKEN,
  environment: process.env.REACT_APP_CONTENTSTACK_ENVIRONMENT,
});

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const Query = Stack.ContentType("portfolio").Query();
    Query.includeCount()
      .toJSON()
      .find()
      .then(
        function success(result) {
          setData(result[0][0]);
        },
        function error(err) {
          console.log(err);
        }
      );
  }, []);

  return (
    <>
      <Intro data={data} />
    </>
  );
}

export default App;
