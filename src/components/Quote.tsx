import React from "react";
import { Quote } from "../App";

export interface QuoteProps {
  quote: Quote;
}

export const QuoteJSX = ({ quote }: QuoteProps) => {
  return (
    <div className="quote__container">
      <p className="quote__text">{quote.text}</p>
      <p className="quote__author">- {quote.author}</p>
    </div>
  );
};
