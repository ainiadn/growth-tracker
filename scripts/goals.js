document.getElementById('goal-form').addEventListener('submit', function(event){
    event.preventDefault(); // Prevent form submission

    const goal = document.getElementById('goal').value;
    const deadline = document.getElementById('deadline').value;

    const goalData = {
        goal: goal,
        deadline: deadline
    };

    // Save the goal in local storage
    let goals = JSON.parse(localStorage.getItem('goals')) || [];
    goals.push(goalData);
    localStorage.setItem('goals', JSON.stringify(goals));

    // Check for upcoming reminders 
    const reminderDate = new Date(deadline);
    reminderDate.setDate(reminderDate.getDate() - 1); // 1 day before deadline

    const today = new Date();
    if (today.toDateString() === reminderDate.toDateString()) {
        alert('Reminder: Your goal deadline is tomorrow!');
    }

    // Redirect to home page
    alert('Goal Set Successfully!');
    window.location.href = 'index.html';
});