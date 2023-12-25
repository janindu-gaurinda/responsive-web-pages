document.addEventListener('DOMContentLoaded', function() {
    // Show the notification when the page loads
    showNotification();
});

function showNotification() {
    var notification = document.getElementById('welcome-notification');
    notification.style.display = 'block';
}

function closeNotification() {
    var notification = document.getElementById('welcome-notification');
    notification.style.display = 'none';
}
