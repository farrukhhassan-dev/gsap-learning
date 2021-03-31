//About
var about = gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: '+=100%',
        toggleActions: 'play none none none',
        onEnter: () => $('#about').addClass('appear')
    },
    delay:0.5
  });
  about.from('#about .section-title',{
    duration:0.5,
      ease: 'none',
      x:-100,
      opacity:0
  });
  about.from('#about p', {
      duration:1,
      ease: 'none',
      y:100,
      opacity:0
  });
//SLider Main
  gsap.utils.toArray('.slider').forEach((slider, i) => {
    ScrollTrigger.create({
      trigger:slider,
      start:'top top',
      toggleClass: 'active',
      
      markers:true,
      pin:true,
      pinSpacing:false,
      onSnapComplete: () => console.log(complete)
    });
  });

//One
  var one = gsap.timeline({
        scrollTrigger: {
            trigger: "#one",
            start: "top top",
            end:'+=90%',
            toggleActions: 'play none none none',
            toggleClass:'show'
        },
        delay:4
    });

    one.from('.inner-frame', {
        ease: "power2.out",
        duration:1
    });
//Two
    var two = gsap.timeline({
        scrollTrigger: {
            trigger: "#two",
            start: "top top",
            end:'+=90%',
            toggleActions: 'play none none none',
            toggleClass:'show'
        },
        delay:4
    });

    two.from('.inner-frame', {
        ease: "power2.out",
        duration:1
    });
//Three
    var three = gsap.timeline({
        scrollTrigger: {
            trigger: "#three",
            start: "top top",
            end:'+=90%',
            toggleActions: 'play none none none',
            toggleClass:'show'
        },
        delay:4
    });

    three.from('.inner-frame', {
        ease: "power2.out",
        duration:1
    });

//Four
  var four = gsap.timeline({
        scrollTrigger: {
            trigger: "#four",
            start: "top top",
            end:'+=90%',
            toggleActions: 'play none none none',
            toggleClass:'show'
        },
        delay:4
    });

    four.from('.inner-frame', {
        ease: "power2.out",
        duration:1
    });