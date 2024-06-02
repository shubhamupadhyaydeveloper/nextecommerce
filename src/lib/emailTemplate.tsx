import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Section,
  Text,
  Button,
  Link,
} from "@react-email/components";

type EmailTemplate = {
  username: string;
  otp: string;
};

export default function EmailTemplate({ username, otp }: EmailTemplate) {
  return (
    <Html lang="en" dir="ltr" style={{display : "flex" , justifyContent : 'center'}}>
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
      <Preview>Here's your verification code: {otp}</Preview>
      <Section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f9f9f9",
          padding: "20px",
          width: "100%",
        }}
      >
        <div style={{ backgroundColor: "white", padding: "40px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", textAlign: "center", maxWidth: "600px", width: "100%" }}>
          <Heading as="h1" style={{ color: "#333", marginBottom: "20px" }}>Nikee 👋</Heading>
          <Heading as="h3" style={{ color: "#333" }}>Hello {username},</Heading>
          <Text style={{ color: "#333", fontSize: "16px", margin: "20px 0" }}>
            Thank you for registering. Please use the following verification
            code to complete your registration:
          </Text>
          <Heading as="h2" style={{ color: "#5AB2FF", margin: "20px 0" }}>{otp}</Heading>
          <Text style={{ color: "#333", fontSize: "16px", marginBottom: "20px" }}>
            Here's your OTP. Use the button below to navigate.
          </Text>
          <Button
            href={`http://localhost:3000/verify-email`}
            style={{
              display: "inline-block",
              padding: "10px 20px",
              fontSize: "16px",
              color: "#fff",
              backgroundColor: "#16A34A",
              borderRadius: "5px",
              textDecoration: "none",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Verify Email
          </Button>
         
          <Text style={{ color: "#aaa", fontSize: "12px", marginBottom: "10px" }}>
            You're receiving this email because you signed up for Nikee.
          </Text>
          <Link
            href="http://localhost:3000"
            style={{ color: "#5AB2FF", fontSize: "12px", textDecoration: "none" }}
          >
            one stop destination for your all clothing needs visit now
          </Link>
          <Text style={{ color: "#aaa", fontSize: "12px", marginTop: "20px" }}>
            113 Cherry St #92768, Seattle, WA 98104-2205
          </Text>
          <Text style={{ color: "#333", fontSize: "14px", marginBottom: "20px" }}>
            If you did not request this code, please ignore this email.
          </Text>
        </div>
      </Section>
    </Html>
  );
}
