document.getElementById('activity-form').addEventListener('submit', function(event){
    event.preventDefault(); // Prevent form submission

    const activity = document.getElementById('activity').value;
    const date = document.getElementById('date').value;
    const notes = document.getElementById('notes').value;

    const activityData = {
        activity: activity,
        date: date,
        notes: notes,
    };

    // Save data di local storage 
    let activities = JSON.parse(localStorage.getItem('activities')) || [];
    activities.push(activityData);
    localStorage.setItem('activities', JSON.stringify(activities));


    // Kembali ke home page atau tampilkan success message 
    alert('Activity Added Successfully!')
    window.location.href = 'index.html'
});