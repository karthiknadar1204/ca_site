import { Resend } from "resend";
import { NextResponse } from "next/server";
import { YelpRecentLoginEmail } from "@/emails/index";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const formData = await req.json();
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "karthiknadar1204@gmail.com",
      subject: "Query Form Submission",
      react: (
        <YelpRecentLoginEmail
          userFirstName={formData.name}
          loginDate={new Date()}
          loginDevice="Query Form"
          loginLocation={formData.city}
          loginIp="N/A"
        />
      ),
    });

    return NextResponse.json({
      status: "ok",
      data,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
};
