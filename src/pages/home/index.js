
import { Container } from "./styled";
import About from "./../../components/about";
import Workflow from "../../components/workflow";
import GetStart from "../../components/getstart";

export default function Home() {
  return (
    <Container>
     <About/>
     <Workflow/>
     <GetStart/>
    </Container>
  );
}
