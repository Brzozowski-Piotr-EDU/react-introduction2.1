import { Quote as QuoteModel } from "../App";

export interface QuoteProps {
  quote: QuoteModel;
}

export const QuoteComponent = ({ quote }: QuoteProps) => {
  return (
    <div>
      <p className="quote__text">"{quote.text}"</p>
      <p className="quote__author">- {quote.author}</p>
    </div>
  );
};
