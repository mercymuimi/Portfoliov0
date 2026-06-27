import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { resend } from "@/lib/resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }

    // Save message to Supabase
    const { error } = await supabase
      .from("contact_messages")
      .insert([
        {
          name,
          email,
          message,
        },
      ]);

    if (error) {
      console.error("Supabase Error:", error);

      return NextResponse.json(
        {
          error: "Failed to save message.",
        },
        {
          status: 500,
        }
      );
    }

    // Send email notification
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["muimimercy651@gmail.com"],
      subject: `New message from ${name}`,
      html: `
        <h2>Portfolio Contact Form</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}