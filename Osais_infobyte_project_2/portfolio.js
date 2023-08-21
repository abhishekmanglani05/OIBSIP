function myFunction() {
    let para1 = document.getElementById('myDropdown');
    if (para1.style.display != 'block') {
        para1.style.display = 'block';
    }
    else {
        para1.style.display = 'none';
    }
}

// function topFunction() {
//     document.body.scrollTop = 1500;
//     document.documentElement.scrollTop = 1500;
// }


// this is for scrolling the page to identified height on tapping or clicking the anchor tag.

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behaviour: "smooth"
        })
    })
})
