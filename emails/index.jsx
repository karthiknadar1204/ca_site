
// // import {
// //   Body,
// //   Button,
// //   Container,
// //   Column,
// //   Head,
// //   Heading,
// //   Html,
// //   Img,
// //   Preview,
// //   Row,
// //   Section,
// //   Text,
// // } from "@react-email/components";
// // import * as React from "react";

// // const baseUrl = process.env.VERCEL_URL
// //   ? `https://${process.env.VERCEL_URL}`
// //   : "";

// // export const YelpRecentLoginEmail = ({
// //   userFirstName,
// //   loginDate,
// //   loginDevice,
// //   loginLocation,
// //   loginIp,
// // }) => {
// //   const formattedDate = new Intl.DateTimeFormat("en", {
// //     dateStyle: "long",
// //     timeStyle: "short",
// //   }).format(loginDate);

// //   return (
// //     <Html>
// //       <Head />
// //       <Preview>Yelp recent login</Preview>
// //       <Body style={main}>
// //         <Container>
// //           <Section style={logo}>
// //           </Section>

// //           <Section style={content}>
// //             <Row>
// //             </Row>

// //             <Row style={{ ...boxInfos, paddingBottom: "0" }}>
// //               <Column>
// //                 <Heading
// //                   style={{
// //                     fontSize: 32,
// //                     fontWeight: "bold",
// //                     textAlign: "center",
// //                   }}
// //                 >
// //                   Hi {userFirstName},
// //                 </Heading>
// //                 <Heading
// //                   as="h2"
// //                   style={{
// //                     fontSize: 26,
// //                     fontWeight: "bold",
// //                     textAlign: "center",
// //                   }}
// //                 >
// //                   We noticed a recent login to your Yelp account.
// //                 </Heading>

// //                 <Text style={paragraph}>
// //                   <b>Time: </b>
// //                   {formattedDate}
// //                 </Text>
// //                 <Text style={{ ...paragraph, marginTop: -5 }}>
// //                   <b>Device: </b>
// //                   {loginDevice}
// //                 </Text>
// //                 <Text style={{ ...paragraph, marginTop: -5 }}>
// //                   <b>Location: </b>
// //                   {loginLocation}
// //                 </Text>
// //                 <Text
// //                   style={{
// //                     color: "rgb(0,0,0, 0.5)",
// //                     fontSize: 14,
// //                     marginTop: -5,
// //                   }}
// //                 >
// //                   *Approximate geographic location based on IP address:
// //                   {loginIp}
// //                 </Text>

// //                 <Text style={paragraph}>
// //                   If this was you, there's nothing else you need to do.
// //                 </Text>
// //                 <Text style={{ ...paragraph, marginTop: -5 }}>
// //                   If this wasn't you or if you have additional questions, please
// //                   see our support page.
// //                 </Text>
// //               </Column>
// //             </Row>
// //             <Row style={{ ...boxInfos, paddingTop: "0" }}>
// //               <Column style={containerButton} colSpan={2}>
// //                 <Button style={button}>Learn More</Button>
// //               </Column>
// //             </Row>
// //           </Section>

// //           <Section style={containerImageFooter}>
// //             {/* <Img
// //               style={image}
// //               width={620}
// //               src={`${baseUrl}/static/yelp-footer.png`}
// //             /> */}
// //           </Section>

// //           <Text
// //             style={{
// //               textAlign: "center",
// //               fontSize: 12,
// //               color: "rgb(0,0,0, 0.7)",
// //             }}
// //           >
// //             © 2022 | Yelp Inc., 350 Mission Street, San Francisco, CA 94105,
// //             U.S.A. | www.yelp.com
// //           </Text>
// //         </Container>
// //       </Body>
// //     </Html>
// //   );
// // };

// // YelpRecentLoginEmail.PreviewProps = {
// //   userFirstName: "Alan",
// //   loginDate: new Date("September 7, 2022, 10:58 am"),
// //   loginDevice: "Chrome on Mac OS X",
// //   loginLocation: "Upland, California, United States",
// //   loginIp: "47.149.53.167",
// // };

// // export default YelpRecentLoginEmail;

// // const main = {
// //   backgroundColor: "#fff",
// //   fontFamily:
// //     '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
// // };

// // const paragraph = {
// //   fontSize: 16,
// // };

// // const logo = {
// //   padding: "30px 20px",
// // };

// // const containerButton = {
// //   display: "flex",
// //   justifyContent: "center",
// //   width: "100%",
// // };

// // const button = {
// //   backgroundColor: "#e00707",
// //   borderRadius: 3,
// //   color: "#FFF",
// //   fontWeight: "bold",
// //   border: "1px solid rgb(0,0,0, 0.1)",
// //   cursor: "pointer",
// //   padding: "12px 30px",
// // };

// // const content = {
// //   border: "1px solid rgb(0,0,0, 0.1)",
// //   borderRadius: "3px",
// //   overflow: "hidden",
// // };

// // const image = {
// //   maxWidth: "100%",
// // };

// // const boxInfos = {
// //   padding: "20px",
// // };

// // const containerImageFooter = {
// //   padding: "45px 0 0 0",
// // };










// import {
//   Body,
//   Button,
//   Container,
//   Column,
//   Head,
//   Heading,
//   Hr,
//   Html,
//   Img,
//   Link,
//   Preview,
//   Row,
//   Section,
//   Text,
//   Tailwind,
// } from "@react-email/components";
// import * as React from "react";

// const baseUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : "";

// export const VercelInviteUserEmail = ({
//   username,
//   userImage,
//   invitedByUsername,
//   invitedByEmail,
//   teamName,
//   teamImage,
//   inviteLink,
//   inviteFromIp,
//   inviteFromLocation,
// }) => {
//   const previewText = `Join ${invitedByUsername} on Vercel`;

//   return (
//     <Html>
//       <Head />
//       <Preview>{previewText}</Preview>
//       <Tailwind>
//         <Body className="bg-white my-auto mx-auto font-sans px-2">
//           <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
//             <Section className="mt-[32px]">
//               <Img
//                 src={`${baseUrl}/static/vercel-logo.png`}
//                 width="40"
//                 height="37"
//                 alt="Vercel"
//                 className="my-0 mx-auto"
//               />
//             </Section>
//             <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
//               Join <strong>{teamName}</strong> on <strong>Vercel</strong>
//             </Heading>
//             <Text className="text-black text-[14px] leading-[24px]">
//               Hello {username},
//             </Text>
//             <Text className="text-black text-[14px] leading-[24px]">
//               <strong>{invitedByUsername}</strong> (
//               <Link
//                 href={`mailto:${invitedByEmail}`}
//                 className="text-blue-600 no-underline"
//               >
//                 {invitedByEmail}
//               </Link>
//               ) has invited you to the <strong>{teamName}</strong> team on{" "}
//               <strong>Vercel</strong>.
//             </Text>
//             <Section>
//               <Row>
//                 <Column align="right">
//                   <Img
//                     className="rounded-full"
//                     src={userImage}
//                     width="64"
//                     height="64"
//                   />
//                 </Column>
//                 <Column align="center">
//                   <Img
//                     src={`${baseUrl}/static/vercel-arrow.png`}
//                     width="12"
//                     height="9"
//                     alt="invited you to"
//                   />
//                 </Column>
//                 <Column align="left">
//                   <Img
//                     className="rounded-full"
//                     src={teamImage}
//                     width="64"
//                     height="64"
//                   />
//                 </Column>
//               </Row>
//             </Section>
//             <Section className="text-center mt-[32px] mb-[32px]">
//               <Button
//                 className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
//                 href={inviteLink}
//               >
//                 Join the team
//               </Button>
//             </Section>
//             <Text className="text-black text-[14px] leading-[24px]">
//               or copy and paste this URL into your browser:{" "}
//               <Link href={inviteLink} className="text-blue-600 no-underline">
//                 {inviteLink}
//               </Link>
//             </Text>
//             <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
//             <Text className="text-[#666666] text-[12px] leading-[24px]">
//               This invitation was intended for{" "}
//               <span className="text-black">{username}</span>. This invite was
//               sent from <span className="text-black">{inviteFromIp}</span>{" "}
//               located in{" "}
//               <span className="text-black">{inviteFromLocation}</span>. If you
//               were not expecting this invitation, you can ignore this email. If
//               you are concerned about your account's safety, please reply to
//               this email to get in touch with us.
//             </Text>
//           </Container>
//         </Body>
//       </Tailwind>
//     </Html>
//   );
// };

// VercelInviteUserEmail.PreviewProps = {
//   username: "alanturing",
//   userImage: `${baseUrl}/static/vercel-user.png`,
//   invitedByUsername: "Alan",
//   invitedByEmail: "alan.turing@example.com",
//   teamName: "Enigma",
//   teamImage: `${baseUrl}/static/vercel-team.png`,
//   inviteLink: "https://vercel.com/teams/invite/foo",
//   inviteFromIp: "204.13.186.218",
//   inviteFromLocation: "São Paulo, Brazil",
// };

// export default VercelInviteUserEmail;
