```javascript
// Current year
document.getElementById("year").textContent =
    new Date().getFullYear();


// Smooth scroll to download section
function scrollToDownload() {

    const section =
        document.getElementById("download");

    section.scrollIntoView({
        behavior: "smooth"
    });
}


// Android download
function downloadAndroid(event) {

    event.preventDefault();

    alert(
        "Tong for Android will be available soon!"
    );
}


// Windows download
function downloadWindows(event) {

    event.preventDefault();

    alert(
        "Tong for Windows will be available soon!"
    );
}


// Add a small reveal animation
const cards =
    document.querySelectorAll(
        ".feature-card"
    );

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(25px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});
```
