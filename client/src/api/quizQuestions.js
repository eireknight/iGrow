const quizQuestions = [
  {
    question: "I am task oriented in order to achieve my goals.",
    answers: [
      {
        type: "J,Brown,D",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "J,Brown,D,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I get bored easily when discussing abstract concepts.",
    answers: [
      {
        type: "N,Green,C",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "N,Green,C,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I like to try things out myself.",
    answers: [
      {
        type: "S,Red,A",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "S,Red,A,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I like to know where I'm going before I leave the house.",
    answers: [
      {
        type: "J,Brown,D",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "J,Brown,D,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I believe there is a logical explanation for everything.",
    answers: [
      {
        type: "T,Brown,C",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "T,Brown,C,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I tend to keep my social circle small.",
    answers: [
      {
        type: "I,Green,C",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "I,Green,C,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I like to share my ideas with others.",
    answers: [
      {
        type: "E,Blue,B",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "E,Blue,B,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I enjoy using social media.",
    answers: [
      {
        type: "E,Blue,B",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "E,Blue,B,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I always express concern for others when making decisions.",
    answers: [
      {
        type: "F,Blue,B",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "F,Blue,B,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I like to try new things.",
    answers: [
      {
        type: "P,Red,A",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "P,Red,A,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I can easily adjust to change.",
    answers: [
      {
        type: "P,Red,A",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "P,Red,A,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question:
      "I solve problems by working through facts until I understand the problem.",
    answers: [
      {
        type: "S,Brown,C",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "S,Brown,C,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I rely on logic rather than instinct when making a decision.",
    answers: [
      {
        type: "T,Green,C",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "T,Green,C,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I make decisions with my heart.",
    answers: [
      {
        type: "F,Blue,B",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "F,Blue,B,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I learn best by seeing step by step instructions.",
    answers: [
      {
        type: "S,Brown,D",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "S,Brown,D,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question:
      "I sometimes move onto another task before completing the current one.",
    answers: [
      {
        type: "P,Red,A",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "P,Red,A,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I prefer a flexible and spontaneous way of life.",
    answers: [
      {
        type: "P,Red,A",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "P,Red,A,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I like to keep my options open when making decisions.",
    answers: [
      {
        type: "P,Green,D",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "P,Green,D,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I feel comfortable in crowds.",
    answers: [
      {
        type: "E,Blue,B",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "E,Blue,B,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I like to share my feelings with others.",
    answers: [
      {
        type: "E,Blue,B",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "E,Blue,B,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question:
      "I prefer to start things right away rather than spend time making a plan.",
    answers: [
      {
        type: "S,Brown,A",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "S,Brown,A,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I know my priorities.",
    answers: [
      {
        type: "S,Brown,A",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "S,Brown,A,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I tend to work alone.",
    answers: [
      {
        type: "I,Green,D",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "I,Green,D,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I don't like going to parties.",
    answers: [
      {
        type: "I,Green,C",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "I,Green,C,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question:
      "I am in tune with my own emotions and let them guide me in life.",
    answers: [
      {
        type: "F,Blue,B",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "F,Blue,B,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I rely on my intuition and experience more than facts.",
    answers: [
      {
        type: "N,Red,A",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "N,Red,A,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I like to think things through.",
    answers: [
      {
        type: "T,Green,D",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "T,Green,D,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I am a visual learner.",
    answers: [
      {
        type: "S,Red,A",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "S,Red,A,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I think carefully before I make decisions.",
    answers: [
      {
        type: "J,Brown,D",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "J,Brown,D,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question:
      "I feel uneasy if my actions disrupt the harmony among my friends.",
    answers: [
      {
        type: "F,Blue,B",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "F,Blue,B,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question:
      "I put my personal opinions aside in pursuit of fairness and justice.",
    answers: [
      {
        type: "T,Brown,C",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "T,Brown,C,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I tend to sit at the back of the room.",
    answers: [
      {
        type: "I,Green,C",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "I,Green,C,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I like being the center of attention.",
    answers: [
      {
        type: "E,Red,B",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "E,Red,B,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question:
      "I solve problems by leaping between different ideas and possibilities.",
    answers: [
      {
        type: "N,Green,C",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "N,Green,C,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I like to finish my work before playing.",
    answers: [
      {
        type: "J,Red,D",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "J,Red,D,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I don't let other people influence my thoughts or actions.",
    answers: [
      {
        type: "T,Red,A",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "T,Red,A,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I often remember things based on certain smells.",
    answers: [
      {
        type: "N,Blue,D",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "N,Blue,D,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I make decisions based on my emotions.",
    answers: [
      {
        type: "F,Blue,B",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "F,Blue,B,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I need time alone to recharge.",
    answers: [
      {
        type: "I,Green,C",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "I,Green,C,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
  {
    question: "I like to keep my room organized and clean.",
    answers: [
      {
        type: "J,Brown,D",
        content: "YES, THAT'S TRUE",
      },
      {
        type: " ",
        content: "SOMETIMES",
      },
      {
        type: "J,Brown,D,No",
        content: "NO, NOT REALLY",
      },
    ],
  },
];

export default quizQuestions;
