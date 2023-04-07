/*
Copyright (c) 2023 tjsyte

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, 
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS 
BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

const problems = [
	{
		question: "What is the output of the following Java program?\n\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello, world!\");\n  }\n}",
		options: [
			"Hello, world!",
		    "Hello, world! followed by a new line",
		    "An error will be thrown",
	     	"Nothing will be output",
		],
		
		answer: "Hello, world!",
		language: "java",
	},

	{
		question: "What is the output of the following C++ program?\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n  int x = 5;\n  cout << x << endl;\n  return 0;\n}",
		options: ["5", "0", "An error will be thrown", "Nothing will be output"],
		answer: "5",
		language: "cpp",
	},

	{
	    question: "What is the output of the following Python program?\n\nx = 3\nprint(x * 2)",
		options: ["3", "6", "An error will be thrown", "Nothing will be output"],
	    answer: "6",
	    language: "python",
	},

	{
	    question: "What is the result of the following Java expression?\n\n3 + 4 * 2",
	    options: ["14", "11", "10", "7"],
	    answer: "11",
	    language: "java",
	},

	{   
		question: "What is the result of the following C++ expression?\n\n(5 > 3) && (2 < 4)",
		options: ["true", "false", "An error will be thrown", "Nothing will be output"],
		answer: "true",
	    language: "cpp",
	},

	{
		question: "What is the result of the following Python expression?\n\n(3 + 4) * 2",
		options: ["14", "11", "10", "7"],
		answer: "14",
		language: "python",
	},

	{
		question:"What keyword is used in Python to define a function?\n",
		options: ["func", "define", "def", "function"],
		answer: "def",
		language: "python",
	},

	{
		question: "What is the output of the following JavaScript code?\n\nconsole.log(typeof(undefined))",
		options: ["string", "number", "boolean", "undefined"],
		answer: "undefined",
		language: "javascript",
	},

	{
		question: "What is the output of the following Ruby code?\n\nx = 5\nputs x + 3",
		options: ["8", "5+3", "An error will be thrown", "Nothing will be output"],
		answer: "8",
		language: "ruby",
	},

	{
		question: "What is the result of the following C# expression?\n\n(4 >= 4) || (3 < 2)",
		options: ["true", "false", "An error will be thrown", "Nothing will be output"],
		answer: "true",
		language: "csharp",
	},

	{
		question: "What keyword is used in Java to define a class?",
		options: ["class", "def", "function", "struct"],
		answer: "class",
		language: "java",
	},

	{
		question: "What is the output of the following PHP code?\n\n$x = 5;\n$y = 2;\necho $x % $y;",
		options: ["1", "2", "2.5", "An error will be thrown"],
		answer: "1",
		language: "php",
	},

	{
		question: "What is the result of the following Kotlin expression?\n\nvar x: Int = 5\nx++\nprint(x)",
		options: ["5", "6", "An error will be thrown", "Nothing will be output"],
		answer: "6",
		language: "kotlin",
	},

	{
		question: "What is the output of the following TypeScript code?\n\nlet x: number | undefined = undefined;\nconsole.log(x ?? 5);",
		options: ["undefined", "null", "5", "An error will be thrown"],
		answer: "5",
		language: "typescript",
	},

	{
		question: "What is the result of the following Swift expression?\n\nlet x = 3\nlet y = 4\nprint(x == y)",
		options: ["true", "false", "An error will be thrown", "Nothing will be output"],
		answer: "false",
		language: "swift",
	},

	{
		question: "What keyword is used in Python to exit a loop?",
		options: ["continue", "break", "exit", "return"],
		answer: "break",
		language: "python",
	},

	{
		question: "What is the output of the following Java program?\n\npublic class Main {\n public static void main(String[] args) {\n int x = 5;\n x += 3;\n System.out.println(x);\n }\n}",
		options: ["5", "8", "3", "An error will be thrown"],
		answer: "8",
		language: "java",
	},

	{
		question: "What is the output of the following C++ program?\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n int x = 5;\n int y = x++;\n cout << y << endl;\n return 0;\n}",
		options: ["5", "6", "An error will be thrown", "Nothing will be output"],
		answer: "5",
		language: "cpp",
	},

	{
		question: "What is the output of the following Python program?\n\nfor i in range(5):\n if i == 3:\n break\n print(i)\n",
		options: ["0 1 2", "0 1 2 3", "0 1 2 3 4", "An error will be thrown"],
		answer: "0 1 2",
		language: "python",
	},

	{
		question: "What keyword is used in C++ to create a pointer to a variable?",
		options: ["&", "", "ptr", "reference"],
		answer: "",
		language: "cpp",
	},

	{
		question: "What is the purpose of a constructor function in Java?",
		options: ["To create an instance of a class", "To define a method in a class", "To modify the behavior of an existing method", "To declare a variable in a class"],
		answer: "To create an instance of a class",
		language: "java",
	},

	{
		question: "What is the purpose of the 'self' keyword in Python?",
		options: ["To refer to the current object or instance of a class", "To define a new class in Python", "To declare a variable in a function", "To break out of a loop"],
		answer: "To refer to the current object or instance of a class",
		language: "python",
	},

	{
		question: "Which symbol is used to indicate the beginning of a single-line comment in JavaScript?",
		options: ["//", "/", "/", "<!--"],
		answer: "//",
		language: "javascript",
	},

	{
		question: "In Python, which of the following is a correct way to declare and initialize a variable?",
		options: ["x = 5", "5 = x", "x == 5", "x = '5'"],
		answer: "x = 5",
		language: "python",
	},

	{
		question: "Which of the following is not a data type in Java?",
		options: ["Boolean", "String", "Integer", "Real"],
		answer: "Real",
		language: "java",
	},

	{
		question: "What does the acronym 'SQL' stand for?",
		options: ["Structured Query Language", "Structured Question Language", "Structured Quiz Language", "System Query Language"],
		answer: "Structured Query Language",
		language: "sql",
	},

	{
		question: "Which of the following is not a valid keyword in C++?",
		options: ["private", "public", "void", "function"],
		answer: "function",
		language: "c++",
	},

	{
		question: "What is the output of the following PHP code?\n\n$fruit = 'apple';\nswitch ($fruit) {\n case 'apple':\n echo 'Yummy.';\n break;\n case 'orange':\n echo 'Juicy.';\n break;\n default:\n echo 'Not a fruit I like.';\n}",
		options: ["Yummy.", "Juicy.", "Not a fruit I like.", "An error will be thrown."],
		answer: "Yummy.",
		language: "php",
	},

	{
		question: "What is the value of x after the following Python code is executed?\n\nx = 5\nx += 3\nx *= 2\nprint(x)",
		options: ["8", "16", "18", "24"],
		answer: "16",
		language: "python",
	},

	{
		question: "What is the output of the following Ruby code?\n\narr = [1, 2, 3, 4, 5]\narr.each { |x| puts x * 2 }",
		options: ["1 2 3 4 5", "2 4 6 8 10", "1 4 9 16 25", "Error"],	
		answer: "2 4 6 8 10",
		language: "ruby",
	},

	{
		question: "What is the value of x after this code executes in Python?\n\nx = 10\nx += '10'",
		options: ["1010", "20", "An error will be thrown", "None of the above"],
		answer: "An error will be thrown",
		language: "python",
	},

	{
		question: "What is the result of the following expression in JavaScript?\n\n(10 % 3) ** 2",
		options: ["1", "3", "9", "10"],
		answer: "1",
		language: "javascript",
	},

	{
		question: "What is the output of the following C++ program?\n\n#include <iostream>\n\nint main() {\n int i = 0;\n while (i < 5) {\n std::cout << i << ' ';\n i++;\n }\n return 0;\n}",
		options: ["0 1 2 3 4", "1 2 3 4 5", "0 1 2 3 4 5", "An error will be thrown"],
		answer: "0 1 2 3 4",
        language: "cpp",
	},

	{
		question: "What is the output of the following Python program?\n\nx = [1, 2, 3, 4]\ny = x\nx[0] = 0\nprint(y)",
		options: ["[1, 2, 3, 4]", "[0, 2, 3, 4]", "[0, 1, 2, 3, 4]", "An error will be thrown"],
		answer: "[0, 2, 3, 4]",
		language: "python",
	},

	{
		question: "What is the value of x after the following code executes in Python?\n\nx = 'Hello'\ny = x\nx += ' world'\nprint(y)",
		options: ["Hello", "Hello world", "world", "An error will be thrown"],
		answer: "Hello",
        language: "python", 
	},

	{
		question: "What is the value of x after the following code executes in Python?\n\nx = 10\ny = x\nx += 5\nprint(y)",
		options: ["10", "15", "5", "An error will be thrown"],
		answer: "10",
		language: "python",
	},

	{
		question: "What is the result of the following JavaScript expression?\n\n5 + '7'",
		options: [	"12", "57", "Error", "undefined"],
		answer: "57",
		language: "javascript"
	},

	{
		question: "What is the output of the following C++ program?\n\n#include <iostream>\n\nint main() {\n int arr[5] = {1, 2, 3, 4, 5};\n std::cout << *(arr + 2);\n return 0;\n}",
		options: ["1", "2", "3", "4"],
		answer: "3",
		language: "cpp",
	},

	{
		question: "What is the value of x after the following code executes in Python?\n\nx = [1, 2, 3, 4]\ny = x[::-1]\nprint(y)",
		options: ["[1, 2, 3, 4]", "[4, 3, 2, 1]", "[4, 1]", "An error will be thrown"],
		answer: "[4, 3, 2, 1]",
		language: "python",
	},

	{
		question: "What is the value of x after the following code executes in JavaScript?\n\nlet x = '5';\nx = x * 2;\nconsole.log(x);",
		options: ["5", "10", "52", "An error will be thrown"],
		answer: "10",
		language: "javascript",
	},

	{
		question: "What is the output of the following code in JavaScript?\n\nconsole.log(2 + '2')",
		options: ["4", "22", "NaN", "TypeError"],
		answer: "22",
		language: "javascript",
	},

	{
		question: "What is the value of x after the following code executes in JavaScript?\n\nlet x = 10;\nif (true) {\n let x = 20;\n}\nconsole.log(x)",
		options: ["10", "20", "undefined", "ReferenceError"],
		answer: "10",
		language: "javascript",
	},

	{
		question: "What is the output of the following code in Python?\n\nx = 5\nprint(x > 3 and x < 10)",
		options: ["True", "False", "None", "Error"],
		answer: "True",
		language: "python",
	},

	{
		question: "What is the output of the following code in Python?\n\nx = 'hello'\nprint(x[::-1])",
		options: ["olleh", "hello", "o", "None"],
		answer: "olleh",
		language: "python",
	},

	{
		question: "What is the output of the following code in Python?\n\nx = [1, 2, 3]\nx[0], x[1] = x[1], x[0]\nprint(x)",
		options: ["[1, 2, 3]", "[2, 1, 3]", "[3, 2, 1]", "Error"],
		answer: "[2, 1, 3]",
		language: "python",
	},

	{
		question: "What is the output of the following code in Python?\n\nx = 'hello'\nprint(x.upper())",
		options: ["hello", "HELLO", "None", "Error"],
		answer: "HELLO",
		language: "python",
	},

	{
		question: "What is the output of the following code in Python?\n\nx = 'hello'\nprint(x.replace('l', 'x'))",
		options: ["hexxo", "hello", "x", "None"],
		answer: "hexxo",
		language: "python",
	},

	{
		question: "Which SQL keyword is used to add data to a database table?",
		options: ["INSERT", "ADD", "APPEND", "CREATE"],
		answer: "INSERT",
		language: "sql",
	},

	{
		question: "Which SQL keyword is used to join two or more tables?",
		options: ["JOIN", "MERGE", "CONNECT", "COMBINE"],
		answer: "JOIN",
		language: "sql",
	},

	{
		question: "Which SQL keyword is used to update data in a database table?",
		options: ["UPDATE", "SET", "WHERE", "MODIFY"],
		answer: "UPDATE",
		language: "sql",
	},
		
	];

	problems.sort(() => Math.random() - 0.6);
	
	const aiResponseProb = 0.03;
	let currentProblemIndex = 0;
    let playerScore = 0;
    let aiScore = 0;
    let timeRemaining = 120;

    const questionElem = document.getElementById("question");
    const optionsElem = document.getElementById("options");
    const resultElem = document.getElementById("result");
    const playerScoreElem = document.getElementById("player-score");
    const aiScoreElem = document.getElementById("ai-score");
    const timerElem = document.getElementById("timer");
    const submitBtn = document.getElementById("submit-btn");
	
	function startTimer() {
		const countdown = setInterval(() => {
			timeRemaining--;
			if (timeRemaining <= 0) {
				clearInterval(countdown);
				submitBtn.disabled = true;
				document.querySelectorAll('input[type="radio"]').forEach((radioBtn) => {
					radioBtn.disabled = true;
				});
				timeRemaining = "Time's up!";
				timerElem.innerHTML = `<span style="color: red;">${timeRemaining}</span>`;
				showFinalResult();
			} else if (timeRemaining <= 10) {
				timerElem.innerHTML = `<span style="color: orange;">Time: ${timeRemaining} seconds</span>`;
			} else {
				timerElem.innerHTML = `Time: ${timeRemaining} seconds`;
			}
		}, 1000);
	}
	
	function showProblem(problem) {
		questionElem.innerText = problem.question;
        optionsElem.innerHTML = "";
		
		for (const option of problem.options) {
			const radioBtn = document.createElement("input");
			radioBtn.type = "radio";
            radioBtn.name = "option";
            radioBtn.value = option;
            optionsElem.appendChild(radioBtn);

            const label = document.createElement("label");
            label.innerText = option;
            optionsElem.appendChild(label);
			optionsElem.appendChild(document.createElement("br"));
		}
	}
	
	function showResult(message, isPlayerCorrect) {
		resultElem.innerText = message;
	
		if (isPlayerCorrect) {
			playerScore++;
			playerScoreElem.innerText = playerScore;
			resultElem.innerText += " The player chose the correct answer.";
		} else {
			aiScore++;
			aiScoreElem.innerText = aiScore;
			resultElem.innerText += " The player chose the wrong answer.";
		}
	
		if (currentProblemIndex === problems.length - 1) {
			submitBtn.disabled = true;
			showFinalResult();
		} else {
			currentProblemIndex++;
			showProblem(problems[currentProblemIndex]);
		}
	}
	
	function showFinalResult() {
		let message = "";
		if ((playerScore >= 1 && aiScore >= 1) && (playerScore === aiScore)) {
			message = "It's a tie with a score of " + playerScore + ".";
		} else if (playerScore > 1 || aiScore > 1) {
			message = "The game has ended. " + "The winner is " + (playerScore > aiScore ? "you" : "the AI") + " with a score of " + (playerScore > aiScore ? playerScore : aiScore) + ".";
		}
		
		submitBtn.disabled = true;
        resultElem.innerText = message;
        resultElem.style.fontSize = "18px";
        resultElem.style.fontWeight = "bold";
        resultElem.style.textAlign = "center";
    }

	
	
	function handleSubmit() {
		const selectedOption = document.querySelector(
			'input[name="option"]:checked'
		);
		
		if (!selectedOption) {
			alert("Please select an option.");
			return;
		}
		
		const isPlayerCorrect = selectedOption.value === problems[currentProblemIndex].answer;
		
		const aiIsCorrect = Math.random() > aiResponseProb || selectedOption.value !== problems[currentProblemIndex].answer;
		
		showResult("", isPlayerCorrect && aiIsCorrect);
	} 	  
	
	showProblem(problems[currentProblemIndex]);
	startTimer();
submitBtn.addEventListener("click", handleSubmit);