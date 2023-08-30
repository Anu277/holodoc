window.scroll = ScrollReveal({ duration: 1200, scale: 0.9 });

// scroll.reveal(".left-nav", {
//   origin: "left",
//   duration: 800,
//   distance: "100px",
//   scale: 0.9,
// });
// scroll.reveal(".right-nav", {
//     origin: "right",
//     duration: 800,
//     distance: "100px",
//     scale: 0.9,
//   });
//   scroll.reveal(".right-nav-links", {
//     origin: "top",
//     duration: 800,
//     distance: "50px",
//     scale: 0.9,
//   });
//   scroll.reveal(".left-nav", {
//   origin: "left",
//   duration: 800,
//   distance: "100px",
//   scale: 0.9,
// });
// scroll.reveal(".docs-img", {
//   origin: "left",
//   duration: 800,
//   distance: "100px",
//   scale: 0.9,
// });
// scroll.reveal(".docs p", {
//   origin: "right",
//   duration: 800,
//   distance: "100px",
//   scale: 0.9,
// });
// scroll.reveal(".course p", {
//   origin: "left",
//   duration: 800,
//   distance: "100px",
//   scale: 0.9,
// });
// scroll.reveal(".course-img", {
//   origin: "right",
//   duration: 800,
//   distance: "1000px",
//   scale: 0.9,
// });
// scroll.reveal(".docs a", {
//   origin: "bottom",
//   duration: 800,
//   distance: "100px",
//   scale: 0.9,
// });
// scroll.reveal(".course a", {
//   origin: "left",
//   duration: 800,
//   distance: "100px",
//   scale: 0.9,
// });
// Add a class to elements when they're in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Add a fade-in animation class when the section is in viewport
function animateOnScroll() {
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    if (isInViewport(section)) {
      section.classList.add('fade-in');
    }
  });
}

// Initial animation check
animateOnScroll();

// Re-check animation on scroll
window.addEventListener('scroll', animateOnScroll);

function toggleContent() {
  var contentDiv = document.querySelector('.content');
  var showMoreBtn = document.querySelector('.show-more-btn');
  
  if (contentDiv.style.maxHeight === '' || contentDiv.style.maxHeight === '200px') {
      contentDiv.style.maxHeight = 'none';
      showMoreBtn.textContent = 'Show Less';
  } else {
      contentDiv.style.maxHeight = '200px'; // Adjust this value to the initial height
      showMoreBtn.textContent = 'Show More';
  }
}
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const hamburger=document.getElementById("hamburger");
const righthnavLinks = document.querySelector(".right-nav-links");
const rightNav=document.querySelector(".right-nav")
hamburger.addEventListener("click",()=>{
  console.log("hello");
  if (righthnavLinks.style.display==="flex") {
    console.log("hello-100");
    righthnavLinks.style.display="none";
  } else {
    righthnavLinks.style.display="flex";
  }
});