import { Header } from "../components/header/header";
import { Form } from "../components/form/form";
import { useState, useEffect } from "react";
import { getDataFetch } from "../api/fakeApi";

export const HomePage = () => {
  const [demoData, setDemoData] = useState();
  
  useEffect(() => {
    getFetch();
  }, []);

  function getFetch() {
    getDataFetch().then((res) => {
      return setDemoData(res.data);
    });
  }
  return (
    <>
      <Header />
      <main>
        <Form userData={demoData}/>
      </main>
    </>
  );
};

export default HomePage;
