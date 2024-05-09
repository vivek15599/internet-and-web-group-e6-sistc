let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  loginForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
  navbar.classList.remove('active');
}

window.onscroll = () => {
  navbar.classList.remove('active');
  loginForm.classList.remove('active');
}

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  grabCursor: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

document.getElementById('sendMessageBtn').addEventListener('click', function () {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var message = document.getElementById('message').value;

  // Check if all fields are filled
  if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || message.trim() === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Check if email is in a valid format using a regular expression
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Check if phone number is exactly 10 digits long
  if (phone.length !== 10 || isNaN(phone)) {
    alert('Please enter a valid 10 digit phone number.');
    return;
  }

  // Assuming all fields are filled, email is valid, and phone number is 10 digits long, show alert message
  alert('Your Message sent successfully!');

  // Reset the form after sending the message
  document.getElementById('contactForm').reset();
});


// Function to animate counters
function animateCounter(id, start, end, duration) {
  let startTime = null;
  const element = document.getElementById(id);

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const increment = Math.floor((end - start) * progress / duration);

    element.textContent = start + increment;

    if (progress < duration) {
      window.requestAnimationFrame(step);
    } else {
      element.textContent = end;
    }
  }

  window.requestAnimationFrame(step);
}

// Function to handle intersection changes
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Start counter animation
      animateCounter(entry.target.id, 0, parseInt(entry.target.dataset.value), 3000);
      // Stop observing once animated
      observer.unobserve(entry.target);
    }
  });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

// Observe the counter elements
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  observer.observe(counter);
});



