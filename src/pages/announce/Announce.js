import React from "react";
import ResultFilterList from "../../components/houseCard/ResultFilterList";
import Layout from "../../components/Layout";
import "./announce.css";

const Announce = () => {
  return (
    <Layout>
      <div>
        <div className="background-announce">
          {" "}
          <h1 className="tit-h1"> choose your future home </h1>
        </div>

        <div style={{ background: "#221C134D" }} className="overlay"></div>
      </div>

      <div style={{ marginTop: "600px", marginBottom: "100px" }}>
        <ResultFilterList />
      </div>
    </Layout>
  );
};

export default Announce;
