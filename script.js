let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");
let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        const value = e.target.innerHTML;

        if (value === "=") {
            try {
                string = eval(string).toString(); // Evaluate and convert to string
                input.value = string;
            } catch (err) {// this is used to catch errors like 2++2
                input.value = "Error";
                string = "";
            }
        }
        else if (value === "AC") {
            string = "";
            input.value = string;
        }
        else if (value === "DEL") {
            string = string.slice(0, -1); // Safely remove last character
            input.value = string;
        }
        else {
            string += value;
            input.value = string;
        }
    });
});
