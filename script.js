window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");
});

window.addEventListener("scroll", function(){

    const navbar = document.getElementById("navbar");
    if (window.scrollY < 700) {
        navbar.classList.add("hide2");
    }if (window.scrollY > 700) {
        navbar.classList.add("hide1");
        navbar.classList.remove("hide2");
    }if(window.scrollY > 1000) {
        navbar.classList.remove("hide1");
        navbar.classList.add("show");
    }else{
        navbar.classList.remove("show");
    }
});

const createOdometer = (el, value) => {
    const odometer = new Odometer({
      el: el,
      value: 0,
    });
  
    let hasRun = false;
  
    const options = {
      threshold: 1,
    };
  
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!hasRun) {
            odometer.update(value);
            hasRun = true;
          }
        }
      })
    };
  
    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
};

const clientcounter = document.querySelector(".client-counter");
createOdometer(clientcounter, 9);

const projectcounter = document.querySelector(".project-counter");
createOdometer(projectcounter, 115);

const coffeecounter = document.querySelector(".coffee-counter");
createOdometer(coffeecounter, 1350);

const hourcounter = document.querySelector(".hour-counter");
createOdometer(hourcounter, 2700);

const elementshowanimationlater = document.querySelectorAll(".element-show-animation-later")
const elementshowanimation = document.querySelectorAll(".element-show-animation")

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting)
            if (entry.isIntersecting) observer.unobserve(entry.target)
        })
    },
    {
        threshold: 0.5,
    }
);

elementshowanimationlater.forEach(showtest => {
    observer.observe(showtest)
});

elementshowanimation.forEach(showteste => {
    observer.observe(showteste)
});