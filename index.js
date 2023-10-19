let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos < currentScrollPos) {
        // User is scrolling down, fold up the navigation bar
        document.querySelector('.d').style.transform = 'translateY(-100%)';
    } else {
        // User is scrolling up, unfold the navigation bar
        document.querySelector('.d').style.transform = 'translateY(0)';
    }
    prevScrollPos = currentScrollPos;
};



let path = document.getElementById("path");
let pathLength = path.getTotalLength();
path.style.strokeDasharray = pathLength + ' ' + pathLength;

path.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', ()=>{
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    var drawLength = pathLength * scrollPercentage;

    path.style.strokeDashoffset = pathLength - drawLength;

})