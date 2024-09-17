import About from "./component/About";
import Experience from "./component/Experience";
import Introduction from "./component/Introduction";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";

export default function App() {
  return (
    <div className=" bg-[#f9f9f9]">
      <Navbar />
      <Introduction />
      <About />
      <Experience />
      <Projects />
    </div>
  )
}