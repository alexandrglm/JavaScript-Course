// Console methods data
const consoleMethods = [

    {
        name: 'console.log()',
        type: 'log',
        description: 'Basic logging - displays general information',
        example: 'console.log("Hello World!");',
        category: 'Basic'
    },
    {
        name: 'console.info()',
        type: 'info',
        description: 'Informational messages with info icon',
        example: 'console.info("This is informational");',
        category: 'Basic'
    },
    {
        name: 'console.warn()',
        type: 'warning',
        description: 'Warning messages - usually yellow',
        example: 'console.warn("This is a warning!");',
        category: 'Basic'
    },
    {
        name: 'console.error()',
        type: 'error',
        description: 'Error messages - usually red with stack trace',
        example: 'console.error("Something went wrong!");',
        category: 'Basic'
    },
    {
        name: 'console.debug()',
        type: 'debug',
        description: 'Debug messages - may be hidden by default',
        example: 'console.debug("Debug information");',
        category: 'Basic'
    },
    {
        name: 'console.table()',
        type: 'info',
        description: 'Display data in a table format',
        example: 'console.table([{name:"John", age:30}, {name:"Jane", age:25}]);',
        category: 'Formatting'
    },
    {
        name: 'console.group()',
        type: 'info',
        description: 'Create a collapsible group of log messages',
        example: 'console.group("My Group");\nconsole.log("Item 1");\nconsole.log("Item 2");\nconsole.groupEnd();',
        category: 'Grouping'
    },
    {
        name: 'console.count()',
        type: 'info',
        description: 'Count how many times a label has been called',
        example: 'console.count("clicks");\nconsole.count("clicks");\nconsole.count("clicks");',
        category: 'Counting'
    },
    {
        name: 'console.time()',
        type: 'info',
        description: 'Start a timer for performance measurement',
        example: 'console.time("operation");\n// some code here\nconsole.timeEnd("operation");',
        category: 'Timing'
    },
    {
        name: 'console.clear()',
        type: 'info',
        description: 'Clear the console (browser dependent)',
        example: 'console.clear();',
        category: 'Utility'
    }
];

      // Advanced examples
const advancedExamples = [

    {
        title: "Object & Array Logging",
        description: "Different ways to log objects and arrays",
        code: `const user = { name: "John", age: 30, skills: ["JS", "CSS"] };
        const numbers = [1, 2, 3, 4, 5];

        console.log("User object:", user);
        console.log("Numbers array:", numbers);
        console.table(user);
        console.table(numbers);`
    },
    {
        title: "Styled Console Messages",
        description: "Add colors and styles to your console messages",
        code: `console.log("%cHello World!", "color: blue; font-size: 20px; font-weight: bold;");
        console.log("%cError: %cSomething went wrong", "color: red; font-weight: bold;", "color: orange;");
        console.log("%cSuccess! %cOperation completed", "color: green; font-weight: bold;", "color: lightgreen;");`
    },
    {
        title: "Performance Timing",
        description: "Measure code execution time",
        code: `console.time("Array Processing");

        const numbers = Array.from({length: 1000000}, (_, i) => i);
        const doubled = numbers.map(n => n * 2);

        console.timeEnd("Array Processing");
        console.log("Processed", numbers.length, "numbers");`
    },
    {
        title: "Advanced Grouping",
        description: "Organize logs with nested groups",
        code: `console.group("🚀 Application Startup");
        console.log("Loading configuration...");
        console.log("Connecting to database...");

        console.group("📊 Data Processing");
        console.log("Processing user data...");
        console.log("Processing orders...");
        console.groupEnd();

        console.log("Application ready!");
        console.groupEnd();`
    },
    {
        title: "Counter Examples",
        description: "Track function calls and events",
        code: `function processOrder() {
            console.count("orders");
            console.log("Processing order...");
        }

        function processPayment() {
            console.count("payments");
            console.log("Processing payment...");
        }

        processOrder();
        processOrder();
        processPayment();
        processOrder();
        console.countReset("orders");
        processOrder();`
    },
    {
        title: "Assertion Testing",
        description: "Use console.assert for simple testing",
        code: `const age = 15;
        const name = "John";

        console.assert(age >= 18, "User must be 18 or older");
        console.assert(name.length > 0, "Name cannot be empty");
        console.assert(typeof age === "number", "Age must be a number");

        console.log("All assertions completed");`
    },
    {
        title: "Directory & Trace",
        description: "Explore objects and trace function calls",
        code: `const complexObject = {
            users: [
                { id: 1, name: "John", address: { city: "NY", country: "USA" } },
                { id: 2, name: "Jane", address: { city: "LA", country: "USA" } }
            ],
            settings: { theme: "dark", language: "en" }
        };

        console.dir(complexObject);

        function first() { second(); }
        function second() { third(); }
        function third() { console.trace("Function call trace"); }

        first();`
    },
    {
        title: "Mixed Methods Demo",
        description: "Combine multiple console methods effectively",
        code: `console.clear();
        console.log("%c🎯 Demo Starting", "font-size: 16px; color: green;");

        console.time("Demo Duration");

        console.group("📋 User Registration Process");
        const userData = { name: "Alice", email: "alice@example.com", age: 28 };
        console.log("User data received:", userData);
        console.table(userData);

        console.count("registrations");
        console.info("✅ User registered successfully");
        console.groupEnd();

        console.group("⚠️ Error Handling");
        console.warn("Database connection slow");
        console.error("Failed to send welcome email");
        console.groupEnd();

        console.timeEnd("Demo Duration");
        console.log("%c🏁 Demo Complete", "font-size: 16px; color: blue;");`
    }
];

let editor;
let customConsole = [];

// Initialize Ace Editor
function initEditor() {
    editor = ace.edit("code-editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");
    editor.setValue(`// Try some console methods!
    console.log("Hello, World! 👋");
    console.info("This is an info message");
    console.warn("This is a warning");
    console.error("This is an error");

    const user = { name: "John", age: 30 };
    console.table(user);

    console.count("demo");
    console.count("demo");`, -1);

    editor.setOptions({
        fontSize: "14px",
        showLineNumbers: true,
        showGutter: true,
        wrap: true
    });
}

// Populate methods list
function populateMethodsList() {

    const methodsList = document.getElementById('methods-list');
    
    consoleMethods.forEach( (method, index) =>{


    })

    consoleMethods.forEach( (method, index) => {
        
        const methodItem = document.createElement('div');
        methodItem.className = 'method-item';
        methodItem.innerHTML = `
        <div class="method-header">
        <span class="method-name">${method.name}</span>
        <span class="method-type ${method.type}">${method.category}</span>
        </div>
        <div class="method-description">${method.description}</div>
        `;

        methodItem.addEventListener('click', () => {
            document.querySelectorAll('.method-item').forEach(item => item.classList.remove('active'));
            methodItem.classList.add('active');
            editor.setValue(method.example, -1);
        });

        methodsList.appendChild(methodItem);
    });
}

// Custom console implementation
function addToConsole(type, ...kwargs) {

    const timestamp = new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).slice(0, 5);

    const consoleDiv = document.getElementById('custom-console');
    const entry = document.createElement('div');
  
    entry.className = 'console-entry';

    let content = args.map(arg => {
  
        if (typeof arg === 'object' && arg !== null) {
  
            if (Array.isArray(arg)) {
  
                return `<span class="console-array">[${arg.join(', ')}]</span>`;
  
  
            } else {
  
                return `<span class="console-object">${JSON.stringify(arg, null, 2)}</span>`;
  
            }
        }
  
        return String(arg);
  
    }).join(' ');

    entry.innerHTML = `
    <span class="console-timestamp">${timestamp}</span>
    <span class="console-content console-${type}">${content}</span>
    `;

    consoleDiv.appendChild(entry);
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

// Override console methods

function setupConsoleOverride() {
    
    const originalConsole = { ...console };

    
    console.log = (...kwargs) => {
    
        originalConsole.log(...kwargs);
        addToConsole('log', ...kwargs);
    
    };

    console.info = (...kwargs) => {
        originalConsole.info(...kwargs);
        addToConsole('info', ...kwargs);
    };

    console.warn = (...kwargs) => {
        originalConsole.warn(...kwargs);
        addToConsole('warn', ...kwargs);
    };

    console.error = (...kwargs) => {
        originalConsole.error(...kwargs);
        addToConsole('error', ...kwargs);
    };

    console.debug = (...kwargs) => {
        originalConsole.debug(...kwargs);
        addToConsole('debug', ...kwargs);
    };

    console.table = (data) => {
        originalConsole.table(data);
        if (Array.isArray(data)) {
            addToConsole('table', `Table: [${data.length} items]`, data);
        } else if (typeof data === 'object') {
            addToConsole('table', 'Table:', data);
        }
    };

    console.group = (label) => {
        originalConsole.group(label);
        addToConsole('group', `▼ ${label || 'Group'}`);
    };

    console.groupEnd = () => {
        originalConsole.groupEnd();
        addToConsole('group', '▲ Group End');
    };

    let counters = {};
    console.count = (label = 'default') => {
        counters[label] = (counters[label] || 0) + 1;
        originalConsole.count(label);
        addToConsole('count', `${label}: ${counters[label]}`);
    };

    console.countReset = (label = 'default') => {
        counters[label] = 0;
        originalConsole.countReset(label);
        addToConsole('count', `${label}: reset`);
    };

    let timers = {};
    console.time = (label = 'default') => {
        timers[label] = Date.now();
        originalConsole.time(label);
        addToConsole('info', `⏱️ Timer '${label}' started`);
    };

    console.timeEnd = (label = 'default') => {
        if (timers[label]) {
            const duration = Date.now() - timers[label];
            delete timers[label];
            originalConsole.timeEnd(label);
            addToConsole('info', `⏱️ Timer '${label}': ${duration}ms`);
        }
    };

    console.clear = () => {
        originalConsole.clear();
        clearConsole();
    };

    console.assert = (condition, ...kwargs) => {
        originalConsole.assert(condition, ...kwargs);
        if (!condition) {
            addToConsole('error', 'Assertion failed:', ...kwargs);
        }
    };

    console.dir = (obj) => {
        originalConsole.dir(obj);
        addToConsole('info', 'Directory:', obj);
    };

    console.trace = (...kwargs) => {
        originalConsole.trace(...kwargs);
        addToConsole('info', 'Trace:', ...kwargs);
    };
}

// Run code function
function runCode() {
    const code = editor.getValue();
    try {
        // Use Function constructor to avoid 'use strict' issues
        const func = new Function(code);
        func();
    } catch (error) {
        console.error('Error executing code:', error.message);
    }
}

// Clear console
function clearConsole() {
    document.getElementById('custom-console').innerHTML = `
    <div class="console-entry">
    <span class="console-timestamp">${new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
    }).slice(0, 5)}</span>
    <span class="console-content console-info">Console cleared</span>
    </div>
    `;
}

// Show examples modal
function showExamples() {
    const examplesGrid = document.getElementById('examples-grid');
    examplesGrid.innerHTML = '';

    advancedExamples.forEach(example => {
        const card = document.createElement('div');
        card.className = 'example-card';
        card.innerHTML = `
        <div class="example-title">${example.title}</div>
        <div class="example-desc">${example.description}</div>
        <div class="example-code">${example.code.substring(0, 100)}...</div>
        `;

        card.addEventListener('click', () => {
            editor.setValue(example.code, -1);
            hideExamples();
        });

        examplesGrid.appendChild(card);
    });

    document.getElementById('examples-modal').style.display = 'flex';
}

// Hide examples modal
function hideExamples() {
    document.getElementById('examples-modal').style.display = 'none';
}

// Load random example
function loadRandomExample() {
    const randomExample = advancedExamples[Math.floor(Math.random() * advancedExamples.length)];
    editor.setValue(randomExample.code, -1);
    console.info(`🎲 Loaded random example: ${randomExample.title}`);
}

// Keyboard shortcuts
// document.addEventListener('keydown', (e) => {
    
//     if (e.ctrlKey && e.key === 'Enter') {
//         e.preventDefault();
//         runCode();
//     }
    
//     if (e.ctrlKey && e.key === 'l') {
//         e.preventDefault();
//         clearConsole();
//     }
// });

// Initialize everything
window.addEventListener('DOMContentLoaded', () => {
    
    initEditor();
    populateMethodsList();
    setupConsoleOverride();

    // Welcome message
    setTimeout(() => {
        console.log("%c🎉 Welcome to the Interactive Console Demo!", "color: #64b5f6; font-size: 16px; font-weight: bold;");
        console.info("💡 Tip: Use Ctrl+Enter to run code, Ctrl+L to clear console");
        console.warn("⚠️ This is how warnings look");
        console.error("❌ And this is how errors appear");
    }, 1000);
});

// Close modal when clicking outside
document.getElementById('examples-modal').addEventListener('click', (e) => {
    if (e.target.id === 'examples-modal') {
        hideExamples();
    }
});
