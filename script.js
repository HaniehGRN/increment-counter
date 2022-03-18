const counters = document.querySelectorAll(".num");

counters.forEach(counter => {

    counter.innerText = '0';
    const target = +counter.getAttribute("data-target");
    const increment = target / 200;
    const UpdateCounter = () => {

        const counterValue = +counter.innerText;
        if(counterValue < target) {
            counter.innerText = `${Math.ceil(increment + counterValue)}`;
            setTimeout(UpdateCounter, 1);
        }
        else {
            counter.innerText = target;
        }

    } 
    UpdateCounter();

})

