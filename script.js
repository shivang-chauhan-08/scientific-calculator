// Theme Toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
})


document.querySelector(".scientific").addEventListener("click", () => {
    document.getElementById("standardGrid").classList.add("d-none");
    document.getElementById("scientificGrid").classList.remove("d-none");
    document.getElementById("scientificGrid1").classList.remove("d-none");
    document.getElementById("calcTitle").innerText = "Scientific";
});

document.querySelector(".standard").addEventListener("click", () => {
    document.getElementById("scientificGrid").classList.add("d-none");
    document.getElementById("scientificGrid1").classList.add("d-none");
    document.getElementById("standardGrid").classList.remove("d-none");
    document.getElementById("calcTitle").innerText = "Standard";
});


// calculation Logic
let input = document.getElementById("input");
let output = document.getElementById("output");

let buttons = document.querySelectorAll(".calc-btn");

let expression = "";

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let value = btn.innerText;

        if (value === "C") {
            expression = "";
            input.innerText = "";
            output.innerText = "";
            return;
        }

        if (value === "CE") {
            output.innerText = "";
            return;
        }

        if (btn.querySelector("i")?.classList.contains("bi-backspace")) {
            expression = expression.slice(0, -1);
            input.innerText = expression;
            return;
        }

        if (value === "=") {
            try {
                let finalExp = expression
                    .replaceAll("x", "*")
                    .replaceAll("÷", "/");

                input.innerText = output.innerText;
                output.innerText = eval(finalExp);
            } catch {
                output.innerText = "Error";
            }
            return;
        }

        let value2 = btn.dataset.value;

        //  Square Root
        if (value2 === "sqrt") {
            try {
                let num = eval(expression);
                expression = Math.sqrt(num).toString();
                input.innerText = num;
                output.innerText = expression;
            } catch {
                output.innerText = "Error";
            }
            return;
        }

        // Square
        if (value2 === "square") {
            try {
                let num = eval(expression);
                input.innerText = num;
                num = num * num;
                output.innerText = num;
            } catch {
                output.innerText = "Error";
            }
            return;
        }

        // 1 / x
        if (value2 === "1byx") {
            try {
                let num = eval(expression);
                input.innerText = num;
                num = 1 / num;
                output.innerText = num;
            } catch {
                output.innerText = "Error";
            }
            return;
        }

        // sin x
        if (value2 === "sin") {
            try {
                let num = eval(expression);
                let rad = num * (Math.PI / 180);
                let result = Math.sin(rad);
                input.innerText = "sin(" + num + ")";
                output.innerText = result;
            } catch {
                output.innerText = "Error";
            }
            return;
        }

        // cos x
        if (value2 === "cos") {
            try {
                let num = eval(expression);
                let rad = num * (Math.PI / 180);
                let result = Math.cos(rad);
                input.innerText = "cos(" + num + ")";
                output.innerText = result;
            } catch {
                output.innerText = "Error";
            }
            return;
        }

        // tan x
        if (value2 === "tan") {
            try {
                let num = eval(expression);
                let rad = num * (Math.PI / 180);
                let result = Math.tan(rad);
                input.innerText = "tan(" + num + ")";
                output.innerText = result;
            } catch {
                output.innerText = "Error";
            }
            return;
        }

        // cosec x
        if (value2 === "csc") {
            try {
                let num = eval(expression);
                let rad = num * (Math.PI / 180);
                let result = 1 / Math.sin(rad);

                input.innerText = "csc(" + num + ")";
                output.innerText = result;
            } catch {
                output.innerText = "Error";
            }
            return;
        }

        // sec x
        if (value2 === "sec") {
            try {
                let num = eval(expression);
                let rad = num * (Math.PI / 180);
                let result = 1 / Math.cos(rad);

                input.innerText = "csec(" + num + ")";
                output.innerText = result;
            } catch {
                output.innerText = "Error";
            }
            return;
        }

        // cot x
        if (value2 === "cot") {
            try {
                let num = eval(expression);
                let rad = num * (Math.PI / 180);
                let result = 1 / Math.tan(rad);

                input.innerText = "tan(" + num + ")";
                output.innerText = result;
            } catch {
                output.innerText = "Error";
            }
            return;
        }

        expression += value;
        output.innerText = expression;

        if (value === "π") {
            input.innerText = "π";
            output.innerText = "3.14159265";
        }

        if (value === "e") {
            input.innerText = "e";
            output.innerText = "2.7182818284";
        }

    });
});
