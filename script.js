
const music = document.getElementById("backgroundMusic");
const video = document.getElementById("birthdayVideo");
const popup = document.getElementById("letterPopup");

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Open the surprise and start the music
document.getElementById("openBtn").addEventListener("click", () => {
    music.play().catch(error => {
        console.log("Music could not start:", error);
    });

    popup.classList.add("show");
});

// Close the birthday letter
document.getElementById("closeBtn").addEventListener("click", () => {
    popup.classList.remove("show");
});

// Go to the video page
document.getElementById("continueBtn").addEventListener("click", () => {
    popup.classList.remove("show");
    showPage("page2");

    music.pause();
    video.currentTime = 0;

    video.play().catch(() => {
        // Tap the video play control if needed.
    });
});

// Return to the birthday letter
document.getElementById("backBtn").addEventListener("click", () => {
    video.pause();
    showPage("page1");
    popup.classList.add("show");
});

// Go to the final greeting
document.getElementById("finalBtn").addEventListener("click", () => {
    video.pause();
    showPage("page3");

    music.play().catch(() => {
        // Music can be started again with a user tap.
    });
});

// Replay the whole website
document.getElementById("replayBtn").addEventListener("click", () => {
    video.pause();
    video.currentTime = 0;

    popup.classList.remove("show");
    showPage("page1");

    music.currentTime = 0;
    music.play().catch(() => {});
});

// If the video ends, the visitor can continue to the last page.
video.addEventListener("ended", () => {
    // The visitor can tap "One Last Surprise".
});
