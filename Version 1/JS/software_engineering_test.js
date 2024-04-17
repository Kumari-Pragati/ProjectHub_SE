document.addEventListener('DOMContentLoaded', function() {
    const softwareEngineeringTestForm = document.getElementById('softwareEngineeringTestForm');
    const resultDisplay = document.getElementById('result');
    let marks = 0; // Initialize marks

    // Retrieve answers
    const answers = {
        q1: 'A',
        q2: 'A',
        q3: 'C',
        q4: 'A',
        q5: 'A'
    };

    // Add event listener to each radio button
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(button => {
        button.addEventListener('click', function() {
            const question = this.name;
            const selectedOption = document.querySelector(`input[name="${question}"]:checked`);

            if (selectedOption && selectedOption.value === answers[question]) {
                marks++;
            } else {
                marks--;
            }
            // Update marks display
            resultDisplay.textContent = `Your score: ${marks}/5`;
        });
    });

    softwareEngineeringTestForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Redirect if all answers are correct
        if (marks === 5) {
            window.location.href = 'teacher_courses.html';
        }
    });
});
