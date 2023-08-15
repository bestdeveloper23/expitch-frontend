import { Container, Logo, Rota, Conjunto, Conjunto2, Rede } from "./styled";
import { Link } from "react-router-dom";
import { i18n } from "./../../translate/i18n";
export default function Footer() {
  return (
    <Container>
      <Conjunto>

        <Link to="/features">
        </Link>

        <Link to="/extension">
        </Link>

        <Link to="/contact">
        </Link>
      </Conjunto>

    </Container>
  );
}
