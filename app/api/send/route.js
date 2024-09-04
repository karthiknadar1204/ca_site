import { Resend } from 'resend';
import { EmailTemplate } from '../../_components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const formData = await request.json();

    const { firstName,lastName,name, email,mobileNo,gender,emailAddress, roleApplyingFor,phoneNumber, highestQualification,date,portfolioLink,resume,lastCompany,yearsExperience,monthsExperience,description } = formData;
    // lastName: '',
    // email: '',
    // mobileNo: '',
    // gender: '',
    // roleApplyingFor: '',
    // date: '',
    // highestQualification: '',
    // portfolioLink: '',
    // resume: null,
    // lastCompany: '',
    // yearsExperience: '',
    // monthsExperience: '',
    // description: ''

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['caskverma@mdsassociate.in'],
      subject: `Query from ${firstName || name}`,
      react: EmailTemplate({ 
        firstName: name, 
        emailAddress, 
        phoneNumber, 
        description,
        lastName,
        email,
        mobileNo,
        gender,
        roleApplyingFor,
        phoneNumber,
        highestQualification,
        date,
        portfolioLink,
        resume,
        lastCompany,
        yearsExperience,
        monthsExperience,
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
