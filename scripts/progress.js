const activities = JSON.parse(localStorage.getItem('activities')) || [];
const goals = JSON.parse(localStorage.getItem('goals')) || []

const activitiesList = document.getElementById('activities-list');
activitiesList.innerHTML = '<h3>Activities:</h3>';
activities.forEach(activity => {
    const div = document.createElement('div');
    div.classList.add ('activity');
    div.innerHTML = `
        <p><strong>Activity:</strong> ${activity.activity}</p>
        <p><strong>Date:</strong> ${activity.date}</p>
        <p><strong>Notes:</strong> ${activity.notes}</p>
    `
    activitiesList.appendChild(div);
});

// Display Goals
const goalsList = document.getElementById('goals-list');
goalsList.innerHTML = '<h3>Goals:</h3>';
goals.forEach(goal => {
    const div = document.createElement('div');
    div.classList.add('goal');
    div.innerHTML = `
        <p?<strong>Goal:</p> ${goal.goal}</p>
        <p?<strong>Deadline:</p> ${goal.deadline}</p>
    `;
    goalsList.appendChild(div);
});

// Progress Chart
const ctx = document.getElementById("progressChart").getContext("2d");

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
            label: 'Activities',
            data: [3, 4, 2, 5, 6],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});