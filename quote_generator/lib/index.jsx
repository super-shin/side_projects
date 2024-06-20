const Quote = ({quote}) => {
  if (quote === null) {
    return(
      <div className="quote">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="quote">
      <p className="quoteText">"{quote.text}"</p>
      <span className="quote-author">- {quote.author}</span>
    </div>
  );
}

const App = () => {
  const [quotes, setQuotes] = React.useState([]);
  const [currentQuote, setCurrentQuote] = React.useState(null);
  console.log("Quotes:", quotes);

  const getRandomQuote = (quotes) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  const getNewQuote = (quotes) => {
    const newQuote = getRandomQuote(quotes);
    setCurrentQuote(newQuote)
    console.log(newQuote);
  }

  console.log("currentQuote: ", currentQuote);
  React.useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then((data) => {
        setQuotes(data);
        getNewQuote(data);
      })
  }, [])

  return (
    <div className="container">
      <Quote quote={currentQuote} />
      <button className="box" onClick={() => getNewQuote(quotes)}>More inspiration</button>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
