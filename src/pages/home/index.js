
import { Container } from "./styled";
import About from "./../../components/about";
import Workflow from "../../components/workflow";
import GetStart from "../../components/getstart";
// import Inspiring from "../../components/inspiring";
import Research from "../../components/research";
import Experiment from "../../components/experiment";

export default function Home() {
  return (
    <Container>
     <About/>
     <GetStart/>
     {/* <Inspiring/> */}
     <Workflow/>
     <Research/>
     <Experiment/>
    </Container>
  );
}
