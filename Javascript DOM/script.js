const button = document.getElementById('clickButton');
const uname = document.getElementById('input-username');

button.addEventListener('click', () => {
    const value = uname.value;
    console.log(value)
    localStorage.setItem("name", value);
});