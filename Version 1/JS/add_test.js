document.addEventListener('DOMContentLoaded', function() {
    const addQuestionBtn = document.getElementById('addQuestionBtn');
    const questionContainer = document.getElementById('questionContainer');
    const addTestForm = document.getElementById('addTestForm');

    // Add event listener to the "Add Question" button
    addQuestionBtn.addEventListener('click', function() {
        const questionType = document.getElementById('questionType').value;

        // Create a new question element based on the selected question type
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        if (questionType === 'shortAnswer') {
            questionDiv.innerHTML = `
                <label for="shortAnswerQuestion">Short Answer Question:</label>
                <input type="text" name="shortAnswerQuestion" required>
            `;
        } else if (questionType === 'multipleChoice') {
            questionDiv.innerHTML = `
                <label for="multipleChoiceQuestion">Multiple Choice Question:</label>
                <input type="text" name="multipleChoiceQuestion" required>
                <label for="choices">Choices (separated by commas):</label>
                <input type="text" name="choices" required>
            `;
        }

        // Append the new question element to the question container
        questionContainer.appendChild(questionDiv);
    });

    // Prevent the form submission and handle test creation
    addTestForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get test name from the form
        const testName = document.getElementById('testName').value.trim();

        // Initialize an array to store questions
        const questions = [];

        // Iterate over all question elements in the question container
        const questionElements = questionContainer.querySelectorAll('.question');
        questionElements.forEach(questionElement => {
            const questionType = document.getElementById('questionType').value;
            const question = {};

            // Based on the question type, extract question details
            if (questionType === 'shortAnswer') {
                question.text = questionElement.querySelector('input[name="shortAnswerQuestion"]').value.trim();
                question.type = 'Short Answer';
            } else if (questionType === 'multipleChoice') {
                question.text = questionElement.querySelector('input[name="multipleChoiceQuestion"]').value.trim();
                question.choices = questionElement.querySelector('input[name="choices"]').value.split(',').map(choice => choice.trim());
                question.type = 'Multiple Choice';
            }

            // Add the question to the questions array
            questions.push(question);
        });

        // Log the test details (for demonstration)
        console.log('Test Name:', testName);
        console.log('Questions:', questions);

        // Additional logic: save the test to local storage or send it to the server

        // Redirect to teacher courses page
        window.location.href = 'teacher_courses.html';
    });
});
