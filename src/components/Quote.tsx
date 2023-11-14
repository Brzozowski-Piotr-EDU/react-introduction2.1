import { Quote as QuoteModel } from "../App";

export interface QuoteProps {
  quote: QuoteModel;
}

export const QuoteComponent = ({ quote }: QuoteProps) => {
  return (
    <div>
      <div className="img">
        <a href={`https://pl.wikipedia.org/wiki/${quote.author}`}>
          <img
            src={require(`../assets/images/authors/${quote.author}.jpg`)}
            alt="Quote author"
          ></img>
        </a>
      </div>
      <p className="quote__text">"{quote.text}"</p>
      <p className="quote__author">- {quote.author}</p>
    </div>
  );
};
