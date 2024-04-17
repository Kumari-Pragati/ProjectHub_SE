document.addEventListener('DOMContentLoaded', function() {
    const testDetailsSection = document.getElementById('testDetails');

    // Retrieve test ID from query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const testId = urlParams.get('testId');

    // Retrieve test details from local storage
    const tests = JSON.parse(localStorage.getItem('tests')) || [];
    const test = tests.find(test => test.id === testId);

    // Display test details
    if (test) {
        const testDetailsHTML = `
            <h2>${test.name}</h2>
            <p>Course: ${test.course}</p>
            <p>Type: ${test.type}</p>
            <p>Questions:</p>
            <ul>
                ${test.questions.map((question, index) => `<li>${index + 1}. ${question}</li>`).join('')}
            </ul>
        `;
        testDetailsSection.innerHTML = testDetailsHTML;
    } else {
        testDetailsSection.innerHTML = '<p>Test not found.</p>';
    }
});
