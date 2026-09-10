import connectDB from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();

    return Response.json({
      success: true,
      message: "MongoDB Connected Successfully!",
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "MongoDB Connection Failed",
        error: error.message,
      },
      { status: 500 }
    );
  }
}