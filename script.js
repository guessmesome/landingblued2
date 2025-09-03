let currentSlide = 1;
const totalSlides = 3;

// Check if user has visited before
function checkReturnVisitor() {
    const hasVisited = localStorage.getItem('bluedVisited');
    
    if (hasVisited) {
        // User has visited before, redirect immediately
        window.location.href = 'https://ef-to-wz.com/tds/ae?tds_campaign=s7788kru&tdsId=s7788kru_r&s1=int&utm_source=int&utm_term=2&p7=%7Bp7%7D&clickid=%7Bclickid%7D&subid=%7Bsubid%7D&subid2=%7Bsubid2%7D&affid=cf9f103c';
        return true;
    }
    
    return false;
}

// Mark user as visited
function markAsVisited() {
    localStorage.setItem('bluedVisited', 'true'); // This is a string value
    localStorage.setItem('bluedVisitTime', new Date().getTime());
}

// Clear visitor data (for testing - can be called from browser console)
function clearVisitorData() {
    localStorage.removeItem('bluedVisited');
    localStorage.removeItem('bluedVisitTime');
    console.log('Visitor data cleared');
}

function nextSlide() {
    if (currentSlide < totalSlides) {
        // Hide current slide
        document.getElementById(`slide${currentSlide}`).classList.remove('active');
        
        // Show next slide
        currentSlide++;
        document.getElementById(`slide${currentSlide}`).classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Check for return visitor first
    if (checkReturnVisitor()) {
        return; // Will redirect, no need to continue
    }
    
});

function redirectToSite() {
    markAsVisited();
    window.location.href = 'https://ef-to-wz.com/tds/ae?tds_campaign=s7788kru&tdsId=s7788kru_r&s1=int&utm_source=int&utm_term=2&p7=%7Bp7%7D&clickid=%7Bclickid%7D&subid=%7Bsubid%7D&subid2=%7Bsubid2%7D&affid=cf9f103c';
}

// Touch/swipe functionality for mobile
let startX = 0;
let startY = 0;

document.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

document.addEventListener('touchend', function(e) {
    if (!startX || !startY) {
        return;
    }

    let endX = e.changedTouches[0].clientX;
    let endY = e.changedTouches[0].clientY;

    let diffX = startX - endX;
    let diffY = startY - endY;

    // Only trigger swipe if horizontal movement is greater than vertical
    if (Math.abs(diffX) > Math.abs(diffY)) {
        // Swipe left (next slide)
        if (diffX > 50 && currentSlide < totalSlides) {
            nextSlide();
        }
    }

    startX = 0;
    startY = 0;
});

// Prevent scroll on mobile
document.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, { passive: false });

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        if (currentSlide < totalSlides) {
            nextSlide();
        } else if (currentSlide === totalSlides) {
            redirectToSite();
        }
    }
});
