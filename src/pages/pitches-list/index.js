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
import axios from "axios";
import { useTheme } from "styled-components";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import isEmpty from "lodash/isEmpty";
import { useLocation } from "react-router-dom";
import { useRecaptcha } from "../../core/hooks/useRecaptcha";
import { useNavigate } from "react-router-dom";

export default function PitchesList() {
  const theme = useTheme();
  const navigate = useNavigate();
  const email = useSelector((state) => state.pitch.email);
  const [totalScore, setTotalScore] = useState("");
  const [pitchesData, setPitchesData] = useState([]);

  const location = useLocation();
  const responseData = location.state.responseData || [];
  // the datas from database
  // Begin POST call
  const immediateFunction = () => {
    if (responseData && responseData.length > 0) {
      const pitches = [];
      responseData.map((pitch, index) => {
        let pitchData = {};
        pitchData._id = pitch._id;
        pitchData.fileName = pitch.fileName;
        let scores = 0;
        Object.keys(pitch).forEach((section) => {
          const currentSection = pitch[section];
          switch (currentSection.letterGrade) {
            case "A+":
              scores += 10;
              break;
            case "A":
              scores += 9;
              break;
            case "A-":
              scores += 8;
              break;
            case "B+":
              scores += 6;
              break;
            case "B":
              scores += 5;
              break;
            case "B-":
              scores += 4;
              break;
            case "C+":
              scores += 2;
              break;
            case "C":
              scores += 1;
              break;
            default:
              break;
          }
        });
        pitchData.totalScore = scores;
        pitchData.date = pitch.createdAt;
        pitches.push(pitchData);
      });
      setPitchesData({
        pitches,
      });
    }
  };

  useEffect(() => {
    immediateFunction();
  }, []);

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
            {pitchesData.pitches && pitchesData.pitches.map((pitch, index) => {
              return (
                <BodyRow color={theme.colors.gray200} key={pitch._id}>
                  <BodyCellNum color={theme.colors.gray500}>1</BodyCellNum>
                  <BodyCellName>
                    <NameLink
                      color={theme.colors.primary}
                      href={`/results?id=${pitch._id}`}
                      key={pitch._id}
                    >
                      {pitch.fileName}
                    </NameLink>
                  </BodyCellName>
                  <BodyCellScore>
                    <Grade
                      key={pitch._id}
                      color={
                        pitch.totalScore >= 64
                          ? theme.colors.green600
                          : totalScore >= 32
                          ? theme.colors.orange600
                          : theme.colors.red600
                      }
                      bordercolor={
                        pitch.totalScore >= 64
                          ? theme.colors.green200
                          : pitch.totalScore >= 32
                          ? theme.colors.orange200
                          : theme.colors.red200
                      }
                      backgroundcolor={
                        pitch.totalScore >= 64
                          ? theme.colors.green50
                          : pitch.totalScore >= 32
                          ? theme.colors.orange50
                          : theme.colors.red50
                      }
                    >
                      {pitch.totalScore >= 80
                        ? "A+"
                        : pitch.totalScore >= 72
                        ? "A"
                        : pitch.totalScore >= 64
                        ? "A-"
                        : pitch.totalScore >= 48
                        ? "B+"
                        : pitch.totalScore >= 40
                        ? "B"
                        : pitch.totalScore >= 32
                        ? "B-"
                        : pitch.totalScore >= 16
                        ? "C+"
                        : pitch.totalScore >= 8
                        ? "C"
                        : "C-"}
                    </Grade>
                  </BodyCellScore>
                  <BodyCellDate color={theme.colors.gray500} key={pitch._id}>
                    {pitch.date}
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
              );
            })}
          </tbody>
        </Table>
      </Container2>
    </Container>
  );
}
