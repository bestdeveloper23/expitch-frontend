import { Section, Container, Title, Button, Content } from "./styled";

import { useTheme } from "styled-components";
import { i18n } from "../../translate/i18n";

export default function Experiment() {
  const theme = useTheme();
  return (
    <Section>
      <Container>
        <Title color={theme.colors.white}>{i18n.t("experiment.title")}</Title>
        <Button href={"/email"} bg={theme.colors.primary} color={theme.colors.white}>{i18n.t("experiment.button")}</Button>
        <Content color={theme.colors.white}>{i18n.t("experiment.content")}</Content>
      </Container>
    </Section>
  );
}
