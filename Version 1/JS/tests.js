document.addEventListener('DOMContentLoaded', function() {
    const testContainer = document.getElementById('testContainer');

    // Retrieve tests from local storage
    const tests = JSON.parse(localStorage.getItem('tests')) || [];

    // Display tests subject-wise
    const courses = {};

    tests.forEach(test => {
        if (!courses[test.course]) {
            courses[test.course] = [];
        }
        courses[test.course].push(test);
    });

    // Display tests for each course
    for (const course in courses) {
        const testsForCourse = courses[course];
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course');
        courseDiv.innerHTML = `
            <h2>${course}</h2>
            <ul>
                ${testsForCourse.map(test => `
                    <li>
                        <a href="view_test.html?testId=${test.id}">${test.name}</a>
                    </li>
                `).join('')}
            </ul>
        `;
        testContainer.appendChild(courseDiv);
    }
});
