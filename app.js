let count = 0;

const value = document.getElementById('value');
const btns = document.querySelectorAll(".btn");


btns.forEach( function(btn) {
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        console.log(count);
        console.log(styles.contains)
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")){
            count++;
        } else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = "green";
        }
         if (count === 0) {
            value.style.color = "#222";
        }
         if (count < 0) {
            value.style.color = "red";
        }

        value.textContent = count;
     });
});

