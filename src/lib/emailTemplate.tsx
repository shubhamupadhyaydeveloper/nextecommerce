import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
} from "@react-email/components";

type EmailTemplate = {
  username: string;
  otp: string;
};

export default function EmailTemplate({ username, otp }: EmailTemplate) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Here&apos;s your verification code: {otp}</Preview>
      <Section>
         <Heading as="h1">Nikee 👋</Heading>
        <Row>
          <Heading as="h3">Hello {username},</Heading>
        </Row>
        <Row>
          <Text>
            Thank you for registering. Please use the following verification
            code to complete your registration:
          </Text>
        </Row>
        <Row>
          <Heading as="h2">{otp}</Heading>
          <Text>here your otp use the button for navigate</Text>
        </Row>
         
        <Button
          href={`http://localhost:3000/verify-email`}
          style={{
            display: "inline-block",
            padding: "10px 20px",
            fontSize: "16px",
            color: "#fff",
            backgroundColor: "#5AB2FF",
            borderRadius: "5px",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          Verify Email
        </Button>
        <Row>
          <Text>
            If you did not request this code, please ignore this email.
          </Text>
        </Row>
      </Section>
    </Html>
  );
}
