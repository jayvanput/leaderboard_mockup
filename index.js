// Set minute options
let select_hours = document.getElementById("hours");
let select_minutes = document.getElementById("minutes");
let select_seconds = document.getElementById("seconds");

for (let i = 0; i < 100; i++) {
    let option_hours = document.createElement("option");


    if (i < 60) {
        let option_minutes = document.createElement("option");
        let option_seconds = document.createElement("option");

        option_minutes.text = i
        option_seconds.text = i

        select_minutes.add(option_minutes)
        select_seconds.add(option_seconds)
    }

    option_hours.text = i
    select_hours.add(option_hours)
}

// Form pop-up on button click
let input_button = document.getElementById('input-btn')
let form = document.getElementById('input-popup')

input_button.addEventListener('click', () => {
    document.body.classList.toggle('background')
    form.classList.toggle("hide")
})

// Open side-nav
let hamburger_btn = document.getElementById("hamburger-btn")
let nav_drawer = document.getElementById("nav-drawer")

hamburger_btn.addEventListener('click', () => {
    nav_drawer.classList.toggle('reveal')
})