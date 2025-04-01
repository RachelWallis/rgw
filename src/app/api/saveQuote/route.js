import { createClient } from "@libsql/client";

const client = createClient({
  url: process.env.TURSO_DB_URL,
  authToken: process.env.TURSO_DB_TOKEN,
});

export const POST = async (request) => {
  try {
    const body = await request.json();

    const result = await client.execute({
      sql: `INSERT INTO answers (id, data) VALUES (?, ?)`,
      args: [
        body.id || crypto.randomUUID(),
        JSON.stringify({
          name: body.name || "",
          email: body.email || "",
          phone: body.phone || "",
          answers: body.answers || {},
          price: body.price || 0,
        }),
      ],
    });

    return new Response(JSON.stringify({ success: true, result }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ DB Insert error:", error);
    return new Response(JSON.stringify({ error: "Database error", detail: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}