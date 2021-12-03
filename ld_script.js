const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

// function changeTheme() {
//     document.querySelector('body').style.background = "#292c35";
// }