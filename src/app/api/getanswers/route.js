import { turso } from "@/lib/turso";

function calculatePrice(answers) {
  let basePrice = 2000;

  // Example logic — adjust as needed
  if (answers.propertyType === "Flat") basePrice += 100;
  if (answers.propertyType === "House") basePrice += 250;

  if (answers.bedrooms === "2") basePrice += 150;
  if (answers.bedrooms === "3") basePrice += 300;

  return basePrice;
}

export async function GET() {
  const url = process.env.TURSO_DB_URL;
  const token = process.env.TURSO_DB_TOKEN;

  if (!url || !token) {
    console.error("❌ Missing TURSO_DB_URL or TURSO_DB_TOKEN");
    return new Response(
      JSON.stringify({ error: "Missing Turso environment configuration" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const result = await turso.execute(
      "SELECT * FROM answers ORDER BY created_at DESC LIMIT 1"
    );

    console.log("✅ Raw DB result:", result.rows);

    if (!result.rows || result.rows.length === 0) {
      return Response.json({ message: "No answers found" });
    }

    const [row] = result.rows;
    const parsedData = JSON.parse(row.data);
    const price = calculatePrice(parsedData.answers);

    return Response.json({
      ...parsedData,
      calculatedPrice: price,
    });
  } catch (error) {
    console.error("❌ API error in /api/getanswers:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch answers" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}