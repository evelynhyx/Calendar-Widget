function updateCalendar() {
    const now = new Date();
    const day = now.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthNames[now.getMonth()];
    
    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;
}

updateCalendar();

function themeSelector(value) {
    if (value === 'blue') {
        document.documentElement.style.setProperty('--primary-color', '#62b7eb');
        document.documentElement.style.setProperty('--secondary-color', '#2c93d2');
        document.documentElement.style.setProperty('--accent-color', '#bae5ff');
        document.documentElement.style.setProperty('--background', 'url("assets/bluebg.jpg")');
    } else if (value === 'pink') {
        document.documentElement.style.setProperty('--primary-color', '#f5acd5');
        document.documentElement.style.setProperty('--secondary-color', '#e377a9');
        document.documentElement.style.setProperty('--accent-color', '#fecbe4');
        document.documentElement.style.setProperty('--background', 'url("assets/pinkbg.jpg")');
    } else if (value === 'beige') {
        document.documentElement.style.setProperty('--primary-color', '#e5d8c1');
        document.documentElement.style.setProperty('--secondary-color', '#d6be98');
        document.documentElement.style.setProperty('--accent-color', '#f4e3d0');
        document.documentElement.style.setProperty('--background', 'url("assets/beigebg.jpg")');
    }
}