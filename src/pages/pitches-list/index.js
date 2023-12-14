import {
  Container,
  Title,
  Container2,
  Table,
  HeaderRow,
  BodyRow,
  HeaderCellDate,
  HeaderCellNum,
  HeaderCellName,
  BodyCellNum,
  BodyCellName,
  NameLink,
  Grade,
  BodyCellActions,
  HeaderCellActions,
  HeaderCellScore,
  BodyCellScore,
  BodyCellDate,
  DownloadIcon,
  PrintIcon,
  IconActionDownload,
  IconActionPrint,
} from "./styled";
import { i18n } from "./../../translate/i18n";
import { useTheme } from "styled-components";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import isEmpty from "lodash/isEmpty";

export default function PitchesList(props) {
  const theme = useTheme();
  const { prop1, prop2, prop3 } = props;
  const userInfo = useSelector((state) => state.auth.user);

  const [totalScore, setTotalScore] = useState("");

   // the datas from database

  return (
    <Container>
      <Title>{i18n.t("pitches.title")}</Title>
      <Container2>
        <Table color={theme.colors.gray200}>
          <thead>
            <HeaderRow
              bgcolor={theme.colors.gray100}
              color={theme.colors.gray200}
            >
              <HeaderCellNum>#</HeaderCellNum>
              <HeaderCellName>Name</HeaderCellName>
              <HeaderCellScore>Score</HeaderCellScore>
              <HeaderCellDate>Date</HeaderCellDate>
              <HeaderCellActions>Actions</HeaderCellActions>
            </HeaderRow>
          </thead>
          <tbody>
            <BodyRow color={theme.colors.gray200}>
              <BodyCellNum color={theme.colors.gray500}>1</BodyCellNum>
              <BodyCellName>
                <NameLink color={theme.colors.primary} href="/results">
                  Link 1
                </NameLink>
              </BodyCellName>
              <BodyCellScore>
                <Grade
                  color={
                    totalScore >= 64
                      ? theme.colors.green600
                      : totalScore >= 32
                      ? theme.colors.orange600
                      : theme.colors.red600
                  }
                  bordercolor={
                    totalScore >= 64
                      ? theme.colors.green200
                      : totalScore >= 32
                      ? theme.colors.orange200
                      : theme.colors.red200
                  }
                  backgroundcolor={
                    totalScore >= 64
                      ? theme.colors.green50
                      : totalScore >= 32
                      ? theme.colors.orange50
                      : theme.colors.red50
                  }
                >
                  {totalScore >= 80
                    ? "A+"
                    : totalScore >= 72
                    ? "A"
                    : totalScore >= 64
                    ? "A-"
                    : totalScore >= 48
                    ? "B+"
                    : totalScore >= 40
                    ? "B"
                    : totalScore >= 32
                    ? "B-"
                    : totalScore >= 16
                    ? "C+"
                    : totalScore >= 8
                    ? "C"
                    : "C-"}
                </Grade>
              </BodyCellScore>
              <BodyCellDate color={theme.colors.gray500}>
                15 Mar 2023
              </BodyCellDate>
              <BodyCellActions>
                <IconActionDownload bgcolor={theme.colors.gray200}>
                  <DownloadIcon color={theme.colors.gray700} />
                </IconActionDownload>
                <IconActionPrint bgcolor={theme.colors.gray200}>
                  <PrintIcon color={theme.colors.gray700} />
                </IconActionPrint>
              </BodyCellActions>
            </BodyRow>
            <BodyRow color={theme.colors.gray200}>
              <BodyCellNum color={theme.colors.gray500}>2</BodyCellNum>
              <BodyCellName>
                <NameLink color={theme.colors.primary} href="/results">
                  Link 2
                </NameLink>
              </BodyCellName>
              <BodyCellScore>
                <Grade
                  color={
                    totalScore >= 64
                      ? theme.colors.green600
                      : totalScore >= 32
                      ? theme.colors.orange600
                      : theme.colors.red600
                  }
                  bordercolor={
                    totalScore >= 64
                      ? theme.colors.green200
                      : totalScore >= 32
                      ? theme.colors.orange200
                      : theme.colors.red200
                  }
                  backgroundcolor={
                    totalScore >= 64
                      ? theme.colors.green50
                      : totalScore >= 32
                      ? theme.colors.orange50
                      : theme.colors.red50
                  }
                >
                  {totalScore >= 80
                    ? "A+"
                    : totalScore >= 72
                    ? "A"
                    : totalScore >= 64
                    ? "A-"
                    : totalScore >= 48
                    ? "B+"
                    : totalScore >= 40
                    ? "B"
                    : totalScore >= 32
                    ? "B-"
                    : totalScore >= 16
                    ? "C+"
                    : totalScore >= 8
                    ? "C"
                    : "C-"}
                </Grade>
              </BodyCellScore>
              <BodyCellDate color={theme.colors.gray500}>
                12 Mar 2023
              </BodyCellDate>
              <BodyCellActions>
                <IconActionDownload bgcolor={theme.colors.gray200}>
                  <DownloadIcon color={theme.colors.gray700} />
                </IconActionDownload>
                <IconActionPrint bgcolor={theme.colors.gray200}>
                  <PrintIcon color={theme.colors.gray700} />
                </IconActionPrint>
              </BodyCellActions>
            </BodyRow>
          </tbody>
        </Table>
      </Container2>
    </Container>
  );
}
