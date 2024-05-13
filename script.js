const quizData = [
  {
    question:"What does HTML stand for?",
    a: 'Hyperlink Text Markup Language',
    b: 'Hypertext Transfer Protocol',
    c: 'Hyper Transfer Markup Language',
    d: 'Hyper Text Markup Language ',
    correct:'d'
  },
  {
    question:'Which of the following is not a CSS property for styling text?',
    a:'font-family',
    b:'text-align',
    c:'background-color',
    d:'text-decoration ',
    correct:'d'
  },
  {
    question:"Which programming language is commonly used for building dynamic web applications on the client side?",
    a: 'Python',
    b: 'Ruby',
    c: 'JavaScript' ,
    d: 'Java',
    correct:'c'
  },
  {
    question:"what is the purpose of CSS (Cascading Style Sheets) in web development?",
    a: 'To define the structure and layout of a webpage',
    b: 'To manage server-side data',
    c: 'To style and format the content of a webpage',
    d: 'To handle server-side logic',
    correct:'c'
  },
  {
    question:"Which of the following is a popular front-end JavaScript library for building user interfaces?",
    a: 'jQuery',
    b: 'React',
    c: 'Angular',
    d: 'Node.js ',
    correct:'b'
  },
  {
    question:"What does the \"box model\" refer to in CSS?",
    a: 'A model used for creating 3D graphics',
    b: 'The visual representation of a website\'s layout',
    c: 'The positioning of elements on a web page',
    d: 'The layout of elements as rectangular boxes, including content, padding, border, and margin ',
    correct:'d'
  },
  {
    question:"Which HTML tag is used to create an ordered list?",
    a: '<Ol>',
    b: '<ul>',
    c: '<ul>',
    d: '<ol> ',
    correct:'d'
  },
  {
    question:"What is the purpose of the \"viewport\" meta tag in HTML?",
    a: 'It defines the primary color scheme for the website',
    b: 'It sets the background image of the webpage',
    c: 'It controls the behavior of the browser\'s viewport on mobile devices ',
    d: 'It defines the website\'s navigation menu ',
    correct:'c'
  },
  {
    question:"Which of the following is a valid way to include an external CSS file in an HTML document?",
    a: '<style> tag',
    b: '<link> tag ',
    c: '<script> tag',
    d: '<div> tag ',
    correct:'b'
  },
  {
    question:"What is the role of a front-end developer in a web development team?",
    a: 'writing server-side code',
    b: 'Managing databases',
    c: 'Designing user interfaces and client-side code',
    d: 'Setting up web servers',
    correct:'c'
  },
  {
    question:"Which of the following is not a valid HTML5 semantic element?",
    a: '<header>',
    b: '<article>',
    c: '<nav>',
    d: '<div>',
    correct:'d'
  },
  {
    question:"What is the primary purpose of media queries in CSS?",
    a: 'To define the structure of a web page',
    b: 'To handle user input and interactions',
    c: 'To apply styles based on the device\'s characteristics and screen size',
    d: 'To create animations ',
    correct:'c'
  },
  {
    question:"Which CSS property is used to control the spacing between lines of text within an element?",
    a: 'line-height',
    b: 'margin',
    c: 'font-size',
    d: 'padding ',
    correct:'a'
  },
  {
    question:"Which JavaScript keyword is used to declare a variable with block scope?",
    a: 'var',
    b: 'let ',
    c: 'const',
    d: 'function ',
    correct:'b'
  },
  {
    question:"What does the term \"Responsive Web Design\" refer to?",
    a: 'Designing web applications that respond to user input',
    b: 'Creating websites that load quickly',
    c: 'Designing websites that adapt to different screen sizes and devices ',
    d: 'Optimizing web content for search engines ',
    correct:'c'
  },
  {
    question:"Which HTML tag is used to embed a video on a web page?",
    a: '<video>',
    b: '<audio>',
    c: '<media>',
    d: '<embed>',
    correct:'a'
  },
  {
    question:"In CSS, what property is used to control the order of elements when they overlap?",
    a: 'z-index ',
    b: 'opacity',
    c: 'transform',
    d: 'position ',
    correct:'a'
  },
  {
    question:"What is the purpose of the \"alt\" attribute in the HTML <img> tag?",
    a: 'It defines the alignment of the image',
    b: 'It specifies the image\'s dimensions',
    c: 'It provides alternative text for the image, which is displayed if the image cannot be loaded',
    d: 'It sets the image\'s background color ',
    correct:'c'
  },
  {
    question:"Which of the following is a version control system commonly used by front-end developers to track changes in their code?",
    a: 'Photoshop',
    b: 'Git',
    c: 'Node.js',
    d: 'SQL ',
    correct:'b'
  },
  {
    question:"What is the purpose of the \"DOCTYPE\" declaration in an HTML document?",
    a: 'It informs the browser about the type and version of HTML being used ',
    b: 'It specifies the character encoding of the document',
    c: 'It defines the document\'s title',
    d: 'It sets the background color of the page',
    correct:'a'
  },
  

];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById("question");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('btn');

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>`;
      quiz.innerHTML += `<button onclick="location.reload()">Reload</button>`;
    }
  }
});

loadQuiz();
