const button = document.getElementById('clickButton');
const uname = document.getElementById('input-username');

button.addEventListener('click', () => {
    const value = uname.value;
    console.log(uname.value)
    localStorage.setItem = ("name", value);
});