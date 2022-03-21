import Intro from "./components/Intro";
import { useEffect, useState } from "react";
import { getEntry } from "./helpers/getData";

function App() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    let newData = await getEntry();
    setData(newData);
  }, []);

  return (
    <>
      <Intro data={data} />
    </>
  );
}

export default App;
