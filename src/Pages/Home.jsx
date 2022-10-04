import React from "react";
import Hero from "../Component/Elements/Hero";
import Section1 from "../Component/Elements/Section1";
import Section2 from "../Component/Elements/Section2";
import Patners from "../Component/Elements/Patners";
import Card1 from "../Component/Elements/Card1";
import Card from "../Component/Elements/Card";
import Interoperability from "../Component/Elements/Interoperability";
import Developers from "../Component/Elements/Developers";
import Build from "../Component/Elements/Build";
import Designed from "../Component/Elements/Designed";
import Futurefinance from "../Component/Elements/Futurefinance";
import Aboutus from "../Component/Elements/Aboutus";
function Home() {
  return (
    <div>
      <Hero />
      <Section1/>
      <Section2/>
      <Patners/>
      <Card1/>
      <Card/>
      <Interoperability/>
      <Developers/>
      <Build/>
      <Designed/>
      <Futurefinance/>
      <Aboutus/>
    </div>
  );
}
export default Home;
