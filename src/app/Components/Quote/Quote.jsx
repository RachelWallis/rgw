"use client";

import React, { useState, useEffect, useCallback } from "react";
import questions from "../../Data/questions.json";
import { calculateQuote } from "@/app/api/getBoilerPrices/pricingEngine";
import authorizedPostcodes from "../../Data/ServicesPostcodeData";
import QuoteModal from "./QuoteModal";

const Quote = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(1); // Start at Q1
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState("");
  const [questionHistory, setQuestionHistory] = useState([]);
  const [goingBack, setGoingBack] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    const savedProgress = localStorage.getItem("quoteProgress");
    if (savedProgress) {
      const { answers: savedAnswers, currentQuestion: savedQuestion, questionHistory: savedHistory } = JSON.parse(savedProgress);
      setAnswers(savedAnswers || {});
      setCurrentQuestion(savedQuestion || 1);
      setQuestionHistory(savedHistory || []);
    }
  }, []);

  useEffect(() => {
    if (goingBack) {
      setGoingBack(false);
      return;
    }
    if (answers[currentQuestion] && currentQuestion !== 1) {
      console.log("✅ State updated, now advancing:", answers[currentQuestion]);
      handleNext();
    }
  }, [answers[currentQuestion]]);

  const handleAnswer = (event) => {
    const { value } = event.target;
    console.log("🔘 Selected:", value, "for question:", currentQuestion);

    setAnswers((prev) => {
      const updatedAnswers = {
        ...prev,
        [currentQuestion]: value,
      };
      console.log("📝 Updated Answers:", updatedAnswers);
      return updatedAnswers;
    });

    setError("");
  };

  useEffect(() => {
    if (currentQuestion !== 1) {
      localStorage.setItem("quoteProgress", JSON.stringify({ answers, currentQuestion, questionHistory }));
    }
  }, [answers, currentQuestion]);

  const handleNext = () => {
    console.log("📌 Current Question:", currentQuestion);
    console.log("📌 Stored Answer:", answers[currentQuestion]);

    const answer = answers[currentQuestion];
    const question = questions[currentQuestion];

    if (!answer) {
      setError("Please select an option to continue.");
      console.warn("⚠️ handleNext stopped: No answer selected.");
      return;
    } else {
      setError(""); // ✅ Clear error if there *is* an answer
    }

    // Postcode coverage check
    if (currentQuestion === 1) {
      const formatted = answer.replace(/\s/g, "").toUpperCase();
      const prefix = formatted.slice(0, 3);
      const prefix2 = formatted.slice(0, 4);

      const ukPostcodeRegex = /^([A-Z]{1,2}\d{1,2}[A-Z]?)\d[A-Z]{2}$/i;
      if (!ukPostcodeRegex.test(formatted)) {
        setError("Please enter a valid UK postcode.");
        return;
      }

      const isValid = authorizedPostcodes.includes(prefix) || authorizedPostcodes.includes(prefix2);
      if (!isValid) {
        setError("Sorry, we don't currently cover this area.");
        return;
      }

      console.log("✅ Q1 validated, moving forward...");
      setError(""); // ✅ Clear any existing error before advancing
      setCurrentQuestion(2);
      return;
    }

    let nextQuestion = question.options ? question.options[answer] : question.next;
    console.log("➡️ Next Question (before function check):", nextQuestion);

    if (typeof nextQuestion === "function") {
      nextQuestion = nextQuestion(answer);
    }

    console.log("✅ Next Question (final):", nextQuestion);

    if (nextQuestion === null) {
      console.warn("⚠️ No next question available.");
      return;
    }
    if (nextQuestion === undefined) {
      console.warn("⚠️ Next question is undefined, completing form.");
      
      const result = calculateQuote(answers);
      console.log("📦 Final result:", result);
      
      onComplete({ answers, result });
      return;
    }

    console.log("✅ Updating question to:", nextQuestion);
    setQuestionHistory((prevHistory) => [...prevHistory, currentQuestion]);
    setCurrentQuestion(nextQuestion);
    localStorage.setItem("quoteProgress", JSON.stringify({ answers, currentQuestion: nextQuestion, questionHistory }));
  };

  const handleBack = useCallback(() => {
    console.log("⬅️ Back button handler fired!");
    console.log("⬅️ Going back from question:", currentQuestion);
    console.log("📜 History:", questionHistory);

    if (questionHistory.length > 0) {
      const previousHistory = [...questionHistory];
      const lastQuestion = previousHistory.pop();

      const updatedAnswers = { ...answers };
      delete updatedAnswers[currentQuestion]; // remove answer for current question

      setGoingBack(true);
      setQuestionHistory(previousHistory);
      setCurrentQuestion(lastQuestion);
      setError(""); // Clear error after going back

      localStorage.setItem("quoteProgress", JSON.stringify({
        answers: updatedAnswers,
        currentQuestion: lastQuestion,
        questionHistory: previousHistory
      }));
    }
  }, [currentQuestion, answers, questionHistory]);

  const question = questions[currentQuestion];
  if (!question && currentQuestion < Object.keys(questions).length) {
    return <div className="p-6 max-w-md mx-auto quote">Question not found.</div>;
  }
  
  if (currentQuestion === "complete") {
    const { boilers = [], total = 0 } = calculateQuote(answers);

    return (
      <div className="p-6 max-w-2xl mx-auto quote">
        <h2 className="question-text">Recommended Packages</h2>
        <p className="sub-text">Based on your selection, here’s a list of compatible boiler options:</p>

        {boilers.length > 0 ? (
          <div className="quote-breakdown">
            {boilers.map((boiler, index) => (
              <div key={index} className="quote-line">
                <span className="quote-label">{boiler.name}</span>
                <span className="quote-value">£{(boiler.price / 100).toFixed(2)}</span>
              </div>
            ))}
            <div className="quote-total">
              <strong>Estimated From:</strong> <span>£{(total / 100).toFixed(2)}</span>
            </div>
          </div>
        ) : (
          <p>Sorry, we couldn't find any compatible boilers for your selection.</p>
        )}

        <div className="button-group">
          <button
            className="button restart-button"
            onClick={() => {
              localStorage.removeItem("quoteProgress");
              window.location.reload();
            }}
          >
            Start Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="wrap-quote">
      <div className="p-6 max-w-md mx-auto quote">
        <h2 className="question-text">{question.text}</h2>
        <p className="sub-text">{question.subtext}</p>

        <div className="quote-question">
          {currentQuestion === Object.keys(questions).length ? (
            <div className="quote-contact-form">
              <h3 className="title-text">Contact Details</h3>
              <div className="quote-contact-fields">
                <label className="quote-contact-label">
                  Name
                  <input type="text" className="quote-contact-input" />
                </label>
                <label className="quote-contact-label">
                  Email Address
                  <input type="email" className="quote-contact-input" />
                </label>
                <label className="quote-contact-label">
                  Phone Number
                  <input type="tel" className="quote-contact-input" />
                </label>
              </div>

              <div className="button-group">
                <button
                  className="button quote-skip-button"
                  onClick={() => {
                    setModalMessage("Skipping contact details means you won't be able to retrieve your quote later.");
                  }}
                >
                  Skip
                </button>
                <button
                onClick={async () => {
                  const name = document.querySelector('input[type="text"]')?.value || "";
                  const email = document.querySelector('input[type="email"]')?.value || "";
                  const phone = document.querySelector('input[type="tel"]')?.value || "";

                  const result = calculateQuote(answers);

                  try {
                    const res = await fetch("/api/saveQuote", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        name,
                        email,
                        phone,
                        answers: JSON.stringify(answers),
                        price: result.total
                      })
                    });

                    if (!res.ok) {
                      const errorData = await res.json().catch(() => ({}));
                      console.error("❌ Failed to save quote:", res.status, res.statusText, errorData);
                      throw new Error("Failed to save quote");
                    }

                    setCurrentQuestion("complete");
                  } catch (err) {
                    console.error("❌ Submit error:", err);
                  }
                }}
                className="button quote-submit-button"
              >
                Submit
              </button>
              </div>

            </div>
          ) : (
            question.type === "text" ? (
              <div className="input-container">
                <input
                  type="text"
                  value={answers[currentQuestion] || ""}
                  onChange={(event) => {
                    const { value } = event.target;
                    setAnswers((prev) => ({
                      ...prev,
                      [currentQuestion]: value,
                    }));
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleNext();
                    }
                  }}
                  className="quote-input-box"
                />
                <button
                  onClick={() => {
                    console.log("✅ Search clicked, validating postcode...");
                    handleNext(); // This will now manually advance only Q1
                  }}
                  className="button"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                  {currentQuestion < Object.keys(questions).length ? "Search" : "Submit"}
                </button>
              </div>
            ) : (
              Object.keys(question.options).map((option) => (
                <label key={option} className="quote-label-text">
                  <input
                    type="radio"
                    name={`question-${currentQuestion}`} 
                    value={option}
                    checked={answers[currentQuestion] === option}
                    onChange={(event) => {
                      handleAnswer(event);
                    }}
                    className="quote-radio"
                  />
                  <span className={`button ${option.toLowerCase().includes("not sure") ? "button-uncertain" : ""}`}>{option}</span>
                </label>
              ))
            )
          )}
        </div>
        
        {error && (
          <div className="quote-modal">
            <div className="quote-modal-overlay"></div>
            <div className="quote-modal-content">

              <div className="info-box error">
                <div className="header">
                  <i className="fa-regular fa-face-frown"></i><strong>{error}</strong>
                </div>
                <button className="quote-modal-close" onClick={() => setError("")}>
                &times;
              </button>
              </div>
            </div>
          </div>
        )}

        <QuoteModal message={modalMessage} onClose={() => setModalMessage("")} />

        <div className="info-box"><i className="fa-solid fa-circle-info"></i>{question.hint}</div>
      </div>
      {currentQuestion !== 1 && currentQuestion !== 2 && (
          <div className="quote-controls">
            <p class="quick-quote">powered by Quick Quote UK</p>
            <span className="left">
              {currentQuestion !== 1 && (
                <button onClick={handleBack} className="button back-button">
                  <i className="fa-solid fa-arrow-left"></i> Back
                </button>
              )}
              {currentQuestion !== 1 && (
                <button
                  onClick={() => {
                    localStorage.removeItem("quoteProgress");
                    window.location.reload();
                  }}
                  className="button restart-button"
                >
                  <i className="fa-solid fa-arrows-rotate"></i> Restart
                </button>
              )}
        </span>
         </div>
      )}
    </div>

  );
};

export default Quote;