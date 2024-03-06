const getAllButtons = document.querySelectorAll(".ripple-effect");

getAllButtons.forEach(btn => {
    btn.addEventListener("click", (event) => {
        let rippleElement = document.createElement('span');
        rippleElement.classList.add('ripple');
        
        const rect = btn.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        rippleElement.style.left = `${x}px`;
        rippleElement.style.top = `${y}px`;
        
        btn.appendChild(rippleElement);
        
        window.setTimeout(() => {
            rippleElement.remove();
        }, 1000);
    });
});
