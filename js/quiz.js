var url = "data2.json";
var quizContainer = document.querySelector(".questions_child");


function RequestApi() {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    
    .then((data) => {
      let quizData;
      quizData = data;
      function buildQuiz() {
        const output = [];
        console.log(output)

        quizData.forEach((currentQuestion, questionNumber) => {
          const answers = [];
          //console.log(answers)
          for (letter in currentQuestion.options) {
            // console.log(letter);

            answers.push(
              `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
          
            ${currentQuestion.options[letter]}
          </label>`
            );


          }


          output.push(
            `  <div class="question">Q${questionNumber + 1}. ${currentQuestion.question
            } </div>
                <div class="answers"> ${answers.join("")} </div>`
          );


        });
        quizContainer.innerHTML = output.join("");
      }



      function showResults() {
        var answerContainers = quizContainer.querySelectorAll(".answers");
        var resultsContainer = document.querySelector(".marks_gain");
        console.log(resultsContainer);
        let score = 0;

        quizData.forEach((currentQuestion, questionNumber) => {
          var answerContainer = answerContainers[questionNumber];
         // console.log(answerContainer);

          var selector = `input [name=question${questionNumber}] :checked`;
         // console.log(selector)

          var userAnswer = (answerContainer.querySelector(selector) || {})
            .value;

          // console.log(userAnswer)
          // console.log(currentQuestion.answer -1)
          if (userAnswer == currentQuestion.answer - 1) {
            score++;
            // console.log(score)
          }
        });
        resultsContainer.innerHTML = `${score}`;
      }

      buildQuiz();

      var submitButton = document.querySelector(".button");

      submitButton.addEventListener("click", showResults);

      //   console.log(quizData);
    });
}

RequestApi();