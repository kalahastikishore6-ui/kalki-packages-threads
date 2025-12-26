import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, email, subject, message }: ContactEmailRequest = await req.json();

    // Validate inputs
    if (!name || !phone || !email || !subject || !message) {
      console.error("Missing required fields:", { name, phone, email, subject, message });
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Sending contact email from:", email, "Phone:", phone);

    // Send notification email to Kalki Groups
    const emailResponse = await resend.emails.send({
      from: "Sri Sorakayala Thatha Gunnies <onboarding@resend.dev>",
      to: ["kalki182@gmail.com"],
      subject: `New Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fff; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #B8860B, #DAA520); padding: 20px; text-align: center;">
            <h1 style="color: #fff; margin: 0; font-size: 24px;">Sri Sorakayala Thatha Gunnies Merchant</h1>
          </div>
          
          <div style="padding: 30px;">
            <h2 style="color: #B8860B; margin-top: 0;">New Contact Form Submission</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Phone:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Gmail ID:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Subject:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">${subject}</td>
              </tr>
            </table>
            
            <h3 style="color: #333; margin-top: 20px;">Message:</h3>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #B8860B;">
              <p style="margin: 0; color: #555; line-height: 1.6;">${message}</p>
            </div>
          </div>
          
          <div style="background: #f5f5f5; padding: 15px; text-align: center; border-top: 1px solid #eee;">
            <p style="color: #999; font-size: 12px; margin: 0;">This email was sent from the Sri Sorakayala Thatha Gunnies Merchant website contact form.</p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
