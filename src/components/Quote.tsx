import { Quote as QuoteModel } from "../App";

export interface QuoteProps {
  quote: QuoteModel;
}

export const QuoteComponent = ({ quote }: QuoteProps) => {
  return (
    <div className="quote-container">
      <div className="imgDiv">
        <a href={`https://pl.wikipedia.org/wiki/${quote.author}`}>
          <img
            src={require(`../assets/images/authors/${quote.author}.jpg`)}
            alt="of quote author"
          />
        </a>
        <p>Click image for more informations!</p>
      </div>
      <div className="quote">
        <p className="quote__text">"{quote.text}"</p>
        <p className="quote__author">- {quote.author}</p>
      </div>
    </div>
  );
};
