//import React from "react";
//import logo from "./logo.svg";
import { useState } from "react";
import "./App.scss";

interface Quote {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  {
    text: "If you would convince a man that he does wrong, do right. But do not care to convince him. Men will believe what they see. Let them see.",
    author: "Henry David Thoreau",
  },
  {
    text: "I would rather be an artist than a leader. Ironically, a leader has to follow the rules.",
    author: "Criss Jami",
  },
  {
    text: "It is not until you change your identity to match your life blueprint that you will understand why everything in the past never worked.",
    author: "Shannon L. Alder",
  },
  {
    text: "To bring up a child in the way he should go, travel that way yourself once in a while.",
    author: "Josh Billings",
  },
  {
    text: "I may do some good before I am dead--be a sort of success as a frightful example of what not to do; and so illustrate a moral story.",
    author: "Thomas Hardy",
  },
  {
    text: "Kindness is universal. Sometimes being kind allows others to see the goodness in humanity through you. Always be kinder than necessary.",
    author: "Germany Kent",
  },
  // Dodaj pozostałe cytaty w podobny sposób
];

const handleGenerateQuoteClick: number = Math.round(
  Math.random() * quotes.length
);

function App() {
  const [currentQuote, setCurrentQuote] = useState<Quote>(quotes[0]);

  const handleGenerateQuoteClick = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  const handleShareQuoteClick = () => {
    console.log("Drawn quote is:", handleGenerateQuoteClick);
  };

  return <main className="main">// tu jest miejsce na nowy kod JSX</main>;
}

export default App;
