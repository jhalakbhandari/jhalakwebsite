import About from "./About";
import Images from "./Images";
import { gsap, Power3 } from "gsap";
function Home() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();
  return (
    <div className="min-h-screen">
      <About />
      <Images timeline={tl} ease={ease} />
    </div>
  );
}

export default Home;
