"use client";

import { useEffect, useState } from "react";

export default function QuoteResultsPage() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("/api/getanswers")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .catch((err) => console.error("Failed to load quote:", err));
  }, []);

  if (!quote) return <p>Loading your quote...</p>;

  const parsedAnswers = typeof quote.answers === "string" ? JSON.parse(quote.answers) : quote.answers;

  return (
    <main>
      <h1>Your Boiler Quote</h1>
      <p><strong>Name:</strong> {quote.name}</p>
      <p><strong>Email:</strong> {quote.email}</p>
      <p><strong>Phone:</strong> {quote.phone}</p>
      <p><strong>Base Price:</strong> £{quote.price}</p>
      <p><strong>Calculated Price:</strong> £{quote.calculatedPrice}</p>

      <h2>Answers</h2>
      <ul>
        {Object.entries(parsedAnswers).map(([key, value]) => (
          <li key={key}><strong>{key}:</strong> {value}</li>
        ))}
      </ul>
    </main>
  );
}