document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.getElementById('progressBar');

    // Retrieve courses from local storage
    let teacherCourses = JSON.parse(localStorage.getItem('teacherCourses')) || [];

    // Display progress badges for each course
    function displayProgressBadges() {
        progressBar.innerHTML = '';
        teacherCourses.forEach(course => {
            const progressBadge = document.createElement('div');
            progressBadge.classList.add('progressBadge');
            progressBadge.innerHTML = `
                <h3>${course.name}</h3>
                <p>${course.description}</p>
            `;
            // Add click event listener to redirect to course resource page
            progressBadge.addEventListener('click', function() {
                window.location.href = `course_resources.html?course=${encodeURIComponent(course.name)}`;
            });
            progressBar.appendChild(progressBadge);
        });
    }

    displayProgressBadges();
});
