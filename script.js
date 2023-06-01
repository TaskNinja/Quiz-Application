// script.js
const quizData = [

    {
      question: 'What is the largest organ in the human body?',
      options: ['Liver', 'Brain', 'heart', 'Skin'],
      answer: 'Skin'
    },
    {
      question: 'Who was the first President of the United States?',
      options: ['George Washington', 'Abraham Lincoln', 'Thomas Jefferson', 'John F. Kennedy'],
      answer: 'George Washington'
    },
    {
      question: 'What is the smallest unit of matter?',
      options: ['Atom', 'Molecule', 'Cell', 'Electron'],
      answer: 'Atom'
    },
    {
        question: 'What is the smallest unit of matter?',
        options: ['Atom', 'Molecule', 'Cell', 'Electron'],
        answer: 'Atom'
      }

  ];
  
  const quizContainer = document.getElementById('quiz-container');
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const submitButton = document.getElementById('submit-btn');
  
  let currentQuestionIndex = 0;
  let score = 0;
  //what am I doing wrong here?
    // let currentQuestionIndex = 0;
    // let score = 0;

  function loadQuestion() {


    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach((option) => {
      const li = document.createElement('li');
      li.textContent = option;
      optionsElement.appendChild(li);
    });
  }


  function checkAnswer() {
    const selectedOption = document.querySelector('li.selected');
    if (!selectedOption) return;

    const answer = selectedOption.textContent;
    if (answer === quizData[currentQuestionIndex].answer) {
      score++;
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex === quizData.length) {
      // Quiz finished
      quizContainer.innerHTML = `<h2>Your score: ${score}/${quizData.length}</h2>`;
      return;
    }
  
    loadQuestion();
  }
  
  optionsElement.addEventListener('click', (event) => {
    const selectedOption = event.target;
    if (selectedOption.tagName === 'LI') {
      const selectedOptionText = selectedOption.textContent;
      if (selectedOption.classList.contains('selected')) {
        selectedOption.classList.remove('selected');
      } else {
        const options = Array.from(optionsElement.children);
        options.forEach((option) => option.classList.remove('selected'));
        selectedOption.classList.add('selected');
      }
    }
  });
  
  submitButton.addEventListener('click', checkAnswer);
  
  loadQuestion();
  