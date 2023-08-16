import { Section, Container, Title, Button, Content } from "./styled.js";

import { useTheme } from "styled-components";
import { i18n } from "../../translate/i18n.js";

export default function Experiment() {
  const theme = useTheme();
  return (
    <Section bg={theme.colors.gray900}>
      <Container>
        <Title color={theme.colors.white}>{i18n.t("experiment.title")}</Title>
        <Button bg={theme.colors.primary} color={theme.colors.white}>{i18n.t("experiment.button")}</Button>
        <Content color={theme.colors.white}>{i18n.t("experiment.content")}</Content>
      </Container>
    </Section>
  );
}
