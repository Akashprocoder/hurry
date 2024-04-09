let login = document.getElementById('dropbtn');
console.log(login)

login.addEventListener("click", function () {
    const drop = document.getElementById('dropdown-content');
    currentDisplay = drop.style.display;
    drop.style.display = (currentDisplay === 'block') ? 'none' : 'block';
});


