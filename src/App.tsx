//import React from "react";
//import logo from "./logo.svg";
import { useState } from "react";
import "./App.scss";
import { QuoteComponent } from "./components/Quote";
import { Button } from "./components/Button";

export interface Quote {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  {
    text: "If you would convince a man that he does wrong, do right. But do not care to convince him. Men will believe what they see. Let them see.",
    author: "Henry David Thoreau",
  },
  {
    text: "Doing what you love is the cornerstone of having abundance in your life.",
    author: "Wayne W. Dyer",
  },
  {
    text: "Life is like riding a bicycle. To keep your balance you must keep moving.",
    author: "Albert Einstein",
  },
  {
    text: "Consider that not only do negative thoughts and emotions destroy our experience of peace, they also undermine our health.",
    author: "Dalai Lama",
  },
  {
    text: "I may do some good before I am dead--be a sort of success as a frightful example of what not to do; and so illustrate a moral story.",
    author: "Thomas Hardy",
  },
  {
    text: "Most folks are as happy as they make up their minds to be.",
    author: "Abraham Lincoln",
  },
];

function App() {
  const [currentQuote, setCurrentQuote] = useState<Quote>(quotes[0]);

  const handleGenerateQuoteClick = (): void => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  const handleShareQuoteClick = () => {
    console.log("Generated quote:", currentQuote);
  };

  return (
    <main className="main">
      <QuoteComponent quote={currentQuote} />
      <div className="wrapper">
        <Button
          className="button button__generate"
          onClick={handleGenerateQuoteClick}
        >
          Generate quote
        </Button>
        <Button
          className="button button__share"
          onClick={handleShareQuoteClick}
        >
          Share quote
        </Button>
      </div>
    </main>
  );
}

export default App;
