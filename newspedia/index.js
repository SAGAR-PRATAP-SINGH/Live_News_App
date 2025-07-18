// // Function to check if an element is in the middle of the screen
// function isElementInMiddle(element) {
//     const rect = element.getBoundingClientRect();
//     const windowHeight = window.innerHeight || document.documentElement.clientHeight;
//     const elementMiddle = rect.top + 5.8*rect.height ;
//     return elementMiddle >= 0 && elementMiddle <= windowHeight;
// }

// // Function to handle visibility change
// function handleVisibility() {
//     const weatherDiv = document.getElementById("weather");
//     const h1Element = weatherDiv.querySelector("h1");
    
//     if (isElementInMiddle(h1Element)) {
//             h1Element.style.visibility = "visible";
//     } else {
//         h1Element.style.visibility = "hidden";
//     }
// }

// // Add event listeners
// window.addEventListener("scroll", handleVisibility);
// window.addEventListener("resize", handleVisibility);

// // Initial call to set visibility based on initial position
// handleVisibility();
