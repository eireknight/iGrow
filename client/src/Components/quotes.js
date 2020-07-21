import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import TwitterShare from "./social";
import QuoteBox from "./quoteBox";
import Button from "./quoteButton";

const Wrapper = styled.div`
  body {
    background: linear-gradient(90deg, lightgreen, lightblue);
    font-family: "K2D", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 100px);
    overflow-y: hidden;
  }

  .title {
    text-align: center;
    font-weight: 500;
  }
  #quote-box {
    width: 800px;
    margin: 0 auto;
    padding: 1px 15px;
    font-weight: 550;
    font-size: 22px;
    background: linear-gradient(35deg, #ccffff, #ffcccc);
    text-align: center;
    border-radius: 20px;
    box-shadow: 0px 0px 2px 1px gray;
  }

  #text p {
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
  }

  #author h5 {
    margin-block-start: 1em;
    margin-block-end: 1em;
  }

  #buttons {
    display: flex;
    justify-content: space-between;
  }

  .twitter-icon {
    color: #1da1f2;
  }

  .button {
    font-family: "K2D", sans-serif;
    font-weight: 500;
    font-size: 1rem;
    padding: 5px;
    border-radius: 50em;
    box-shadow: 0px 0px 3px 0.5px rgb(82, 81, 81);
    border: 0;
    margin-bottom: 10px;
  }

  .button:focus {
    outline: none;
    border: none;
  }

  @media only screen and (max-width: 450px) {
    .title {
      font-size: 22px;
    }
    #quote-box {
      width: 270px;
    }
  }
`;

class RandomQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
    };
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote() {
    const url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

    axios.get(url).then(res => {
      const data = res.data.quotes;
      const quoteNum = Math.floor(Math.random() * data.length);
      const randomQuote = data[quoteNum];

      this.setState({
        quote: randomQuote.quote,
        author: randomQuote.author,
      });
    });
  }

  getNewQuote = () => {
    this.getQuote();
  };

  render() {
    const { quote, author } = this.state;
    return (
      <Wrapper className="Wrapper">
        <div id="wrapper">
          <h1 className="title">Inspirational Quotes</h1>

          <div id="quote-box">
            <QuoteBox quote={quote} author={author} />
            <div id="buttons">
              <TwitterShare quote={quote} author={author} />
              <Button
                id="new-quote"
                title="New Quote"
                onClick={this.getNewQuote}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default RandomQuote;
