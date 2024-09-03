import { Resend } from 'resend';
import { EmailTemplate } from '../../_components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const formData = await request.json();

    const { name, emailAddress, phoneNumber, description } = formData;

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['caskverma@mdsassociate.in'],
      subject: `Query from ${name}`,
      react: EmailTemplate({ 
        firstName: name, 
        emailAddress, 
        phoneNumber, 
        description 
      }),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error('Error processing POST request:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
