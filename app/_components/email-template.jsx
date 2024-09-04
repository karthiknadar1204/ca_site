import React from "react";
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const EmailTemplate = ({
  name,
  firstName,
  emailAddress,
  phoneNumber,
  description,
  lastName,
  email,
  mobileNo,
  gender,
  roleApplyingFor,
  highestQualification,
  date,
  portfolioLink,
  resume,
  lastCompany,
  yearsExperience,
  monthsExperience,
}) => {
  return (
    <Html>
      <Head />
      <Preview>New Application Received</Preview>
      <Body style={main}>
        <Container>
          <Section style={content}>
            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  New Application Alert
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                </Heading>

                <Text style={paragraph}>
                  <b>Name: </b>
                  {firstName || name} {lastName}
                </Text>
                {(emailAddress || email) && (
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Email: </b>
                    {emailAddress || email}
                  </Text>
                )}
                {(phoneNumber || mobileNo) && (
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Phone: </b>
                    {phoneNumber || mobileNo}
                  </Text>
                )}
                {gender && (
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Gender: </b>
                    {gender}
                  </Text>
                )}
                {roleApplyingFor && (
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Role Applying For: </b>
                    {roleApplyingFor}
                  </Text>
                )}
                {highestQualification && (
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Highest Qualification: </b>
                    {highestQualification}
                  </Text>
                )}
                {date && (
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Date: </b>
                    {date}
                  </Text>
                )}
                {portfolioLink && (
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Portfolio: </b>
                    {portfolioLink}
                  </Text>
                )}
                {resume && (
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Resume: </b>
                    {resume}
                  </Text>
                )}
                {lastCompany && (
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Last Company: </b>
                    {lastCompany}
                  </Text>
                )}
                {(yearsExperience || monthsExperience) && (
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Experience: </b>
                    {yearsExperience && `${yearsExperience} years`} {monthsExperience && `${monthsExperience} months`}
                  </Text>
                )}
                {description && (
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Description: </b>
                    {description}
                  </Text>
                )}
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: "0" }}>
              <Column style={containerButton} colSpan={2}>
                <Button style={button}>View Full Application</Button>
              </Column>
            </Row>
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2024 | MDS CA associates, India | mdsassociate.in
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#007bff",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

export default EmailTemplate;
