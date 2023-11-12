import { Quote as QuoteModel } from "../App";

export interface QuoteProps {
  quote: QuoteModel;
}

export const QuoteJSX = ({ quote }: QuoteProps) => {
  return (
    <div className="quote__container">
      <p className="quote__text">"{quote.text}"</p>
      <p className="quote__author">- {quote.author}</p>
    </div>
  );
};
