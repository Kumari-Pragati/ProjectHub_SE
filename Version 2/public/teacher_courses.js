document.addEventListener('DOMContentLoaded', function() {
    const addCourseBtn = document.getElementById('addCourseBtn');
    const addCourseModal = document.getElementById('addCourseModal');
    const addCourseForm = document.getElementById('addCourseForm');
    
    addCourseBtn.addEventListener('click', function() {
        addCourseModal.style.display = 'block';
    });
});
