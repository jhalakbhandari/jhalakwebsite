<<<<<<< HEAD
import About from "./About";
import Images from "./Images";
import { gsap, Power3 } from "gsap";
=======
import About from "./AboutPage/About";
import Images from "./AboutPage/Images";
import { gsap, Power3 } from "gsap";
import Layout from "../Layout/Layout";
>>>>>>> 010ea49b03c45289d6a76b2c49c20f7726b3fad2
function Home() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();
  return (
<<<<<<< HEAD
    <div className="min-h-screen">
      <About />
      <Images timeline={tl} ease={ease} />
    </div>
=======
    <Layout>
      <div className="min-h-screen">
        <About />
        <Images timeline={tl} ease={ease} />
      </div>
    </Layout>
>>>>>>> 010ea49b03c45289d6a76b2c49c20f7726b3fad2
  );
}

export default Home;
