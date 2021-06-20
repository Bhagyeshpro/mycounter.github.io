// initial count
let count = 0;

// select buttons and value
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

function doUndo (numberIs) {
    numberIs = count;
    return numberIs;
}

// console.log(btns);
btns.forEach(function (btn) {
    btn.addEventListener("click", function(e) {
    const styles = e.currentTarget.classList;
    // let previous = count;
    // console.log(pervious);
    if (styles.contains('decrease')) {
        count--;
        // console.log(count);
    }
    else if (styles.contains('increase')) {
        count++;
        // console.log(count);
    }
    else if (styles.contains('reset')) {
        count = 0;
    }
    else if (styles.contains('ten')) {
        count += 10;
    }
    else if (styles.contains('hundred')) {
        count += 100;
    }
    else if (styles.contains('minten')) {
        count -= 10;
    }
    else if (styles.contains('undo')) {
        // count = numberIs();
        console.log(numberIs());


        // Working ...
    }
        
    if (count > 0) {
        value.style.color = 'green';
    } 
    if (count < 0) {
        value.style.color = 'red';
    }
    if (count == 0) {
        value.style.color = '#222';
    }
    value.textContent = count;
})
});


