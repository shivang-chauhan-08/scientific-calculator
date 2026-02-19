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

                let result = eval(finalExp);

                input.innerText = output.innerText;
                output.innerText = result;

                let history = JSON.parse(localStorage.getItem("calcHistory")) || [];

                history.unshift({
                    input: expression,
                    output: result
                });

                localStorage.setItem("calcHistory", JSON.stringify(history));

                loadHistory();

            } catch {
                output.innerText = "Error";
            }
            return;
        }

        // +/- Functionality
        if (value === "+/-") {
            if (expression.startsWith("-")) {
                expression = expression.slice(1);
            } else {
                expression = "-" + expression;
            }
            output.innerText = expression;
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


        // Scientific Calculator Operations
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

        // mod
        if (value === "mod") {
            expression += "%";
            output.innerText = expression;
            return;
        }

        // |x|
        if (value2 === "modX") {
            try {
                let num = eval(expression);
                let result = Math.abs(num);

                output.innerText = result;
                expression = result.toString();
                input.innerText = expression;
            } catch {
                output.innerText = "Error";
            }
            return;
        }

        // 2pow
        if (value2 === "2pow") {
            try {
                let num = eval(expression);
                let result = Math.pow(2, num);

                input.innerText = "2^(" + num + ")";
                output.innerText = result;
                expression = result.toString();
            } catch {
                output.innerText = "Error";
            }
            return;
        }

        // exp
        if (value2 === "exp") {
            try {
                let num = eval(expression);
                let result = Math.exp(num);

                input.innerText = "exp(" + num + ")";
                output.innerText = result;
                expression = result.toString();
            } catch {
                output.innerText = "Error";
            }
            return;
        }

        // factorial
        if (value2 === "fact") {
            try {
                let num = eval(expression);

                if (num < 0) {
                    output.innerText = "Error";
                    return;
                }

                let fact = 1;
                for (let i = 1; i <= num; i++) {
                    fact *= i;
                }

                input.innerText = num + "!";
                output.innerText = fact;
                expression = fact.toString();
            } catch {
                output.innerText = "Error";
            }
            return;
        }

        // x^y
        if (value2 === "pow") {
            expression += "**";   // JS power operator
            input.innerText = expression;
            return;
        }

        // 10^x
        if (value2 === "10pow") {
            try {
                let num = eval(expression);
                let result = Math.pow(10, num);

                input.innerText = "10^(" + num + ")";
                output.innerText = result;
                expression = result.toString();
            } catch {
                output.innerText = "Error";
            }
            return;
        }

        // log(x)
        if (value2 === "log") {
            try {
                let num = eval(expression);
                let result = Math.log10(num);

                input.innerText = "log(" + num + ")";
                output.innerText = result;
                expression = result.toString();
            } catch {
                output.innerText = "Error";
            }
            return;
        }

        // ln(x)
        if (value2 === "ln") {
            try {
                let num = eval(expression);
                let result = Math.log(num);

                input.innerText = "ln(" + num + ")";
                output.innerText = result;
                expression = result.toString();
            } catch {
                output.innerText = "Error";
            }
            return;
        }

        // floor
        if (value2 === "floor") {
            try {
                let num = eval(expression);
                let result = Math.floor(num);

                input.innerText = "floor(" + num + ")";
                output.innerText = result;
                expression = result.toString();
            } catch {
                output.innerText = "Error";
            }
            return;
        }

        // ceil
        if (value2 === "ceil") {
            try {
                let num = eval(expression);
                let result = Math.ceil(num);

                input.innerText = "ceil(" + num + ")";
                output.innerText = result;
                expression = result.toString();
            } catch {
                output.innerText = "Error";
            }
            return;
        }

        // rand
        if (value2 === "rand") {
            let result = Math.random();

            input.innerText = "rand()";
            output.innerText = result;
            expression = result.toString();
            return;
        }

        // dms
        if (value2 === "dms") {
            try {
                let deg = eval(expression);

                let d = Math.floor(deg);
                let minFloat = (deg - d) * 60;
                let m = Math.floor(minFloat);
                let s = Math.floor((minFloat - m) * 60);

                let result = `${d}° ${m}' ${s}"`;

                input.innerText = deg + "°";
                output.innerText = result;
                expression = deg.toString();
            } catch {
                output.innerText = "Error";
            }
            return;
        }

        //deg
        if (value2 === "deg") {
            try {
                let parts = expression.split(" ");

                let d = parseFloat(parts[0]) || 0;
                let m = parseFloat(parts[1]) || 0;
                let s = parseFloat(parts[2]) || 0;

                let result = d + (m / 60) + (s / 3600);

                input.innerText = `${d}° ${m}' ${s}"`;
                output.innerText = result;
                expression = result.toString();
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



// History
let historyBox = document.getElementById("historyBox");

function loadHistory() {
    let history = JSON.parse(localStorage.getItem("calcHistory")) || [];

    historyBox.innerHTML = "";

    history.forEach(item => {
        let div = document.createElement("div");
        div.className = "border p-2 mb-2 rounded";

        div.innerHTML = `
      <div class="text-muted">${item.input}</div>
      <div class="fw-bold">${item.output}</div>
    `;

        historyBox.appendChild(div);
    });
}

loadHistory();