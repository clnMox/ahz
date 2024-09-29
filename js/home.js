document.getElementById('toggle').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');

    // Change the toggle button content
    if (sidebar.classList.contains('hidden')) {
        document.getElementById('toggle').innerHTML = '☰'; 
    } else {
        document.getElementById('toggle').innerHTML = 'X'; 
    }
});
