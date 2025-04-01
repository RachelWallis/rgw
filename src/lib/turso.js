// src/lib/turso.js
import { createClient } from "@libsql/client";

export const turso = createClient({
  url: process.env.TURSO_DB_URL,
  authToken: process.env.TURSO_DB_TOKEN,
});

export async function getAnswersBySession(sessionId) {
  const result = await turso.execute({
    sql: `
      SELECT question_id, answer 
      FROM answers 
      WHERE session_id = ? 
      ORDER BY question_id ASC
    `,
    args: [sessionId],
  });

  return result.rows;
}