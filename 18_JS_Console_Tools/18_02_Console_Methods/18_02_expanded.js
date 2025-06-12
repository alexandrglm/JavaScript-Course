/**
 * Interactive Console Methods Demo
 * Complete implementation of all JavaScript console methods
 * Based on MDN Web API Console documentation
 */

// =============================================================================
// DATA STRUCTURES
// =============================================================================

/**
 * Console Methods Configuration
 * Complete list of all console methods with their properties
 */
const consoleMethods = [
    // Basic Logging Methods
    {
        name: 'console.log()',
        type: 'log',
        description: 'Basic logging - displays general information to the console',
        example: 'console.log("Hello World!", {name: "John", age: 30});',
        category: 'Basic Logging'
    },
{
    name: 'console.info()',
    type: 'info',
    description: 'Informational messages - same as log but semantically different',
    example: 'console.info("Application started successfully");',
    category: 'Basic Logging'
},
{
    name: 'console.warn()',
    type: 'warning',
    description: 'Warning messages - typically displayed with yellow background',
    example: 'console.warn("This API is deprecated");',
    category: 'Basic Logging'
},
{
    name: 'console.error()',
    type: 'error',
    description: 'Error messages - typically displayed in red with stack trace',
    example: 'console.error("Something went wrong!", new Error("Test error"));',
    category: 'Basic Logging'
},
{
    name: 'console.debug()',
    type: 'debug',
    description: 'Debug messages - may be hidden by default in some browsers',
    example: 'console.debug("Debug information", {debugLevel: 2});',
    category: 'Basic Logging'
},

// Formatting Methods
{
    name: 'console.table()',
    type: 'info',
    description: 'Display data in a tabular format - perfect for arrays and objects',
    example: 'console.table([{name:"John", age:30}, {name:"Jane", age:25}]);',
    category: 'Formatting'
},
{
    name: 'console.dir()',
    type: 'info',
    description: 'Display an interactive list of object properties',
    example: 'console.dir(document.body);',
    category: 'Formatting'
},
{
    name: 'console.dirxml()',
    type: 'info',
    description: 'Display XML/HTML element representation',
    example: 'console.dirxml(document.querySelector("body"));',
    category: 'Formatting'
},

// Grouping Methods
{
    name: 'console.group()',
    type: 'info',
    description: 'Create a new inline group - indents following messages',
    example: 'console.group("User Details");\nconsole.log("Name: John");\nconsole.log("Age: 30");\nconsole.groupEnd();',
    category: 'Grouping'
},
{
    name: 'console.groupCollapsed()',
    type: 'info',
    description: 'Create a new inline group that is initially collapsed',
    example: 'console.groupCollapsed("Advanced Settings");\nconsole.log("Setting 1");\nconsole.log("Setting 2");\nconsole.groupEnd();',
    category: 'Grouping'
},
{
    name: 'console.groupEnd()',
    type: 'info',
    description: 'Exit the current inline group',
    example: 'console.group("Test Group");\nconsole.log("Inside group");\nconsole.groupEnd();',
    category: 'Grouping'
},

// Counting Methods
{
    name: 'console.count()',
    type: 'info',
    description: 'Log the number of times this particular call has been made',
    example: 'console.count("button-clicks");\nconsole.count("button-clicks");\nconsole.count("button-clicks");',
    category: 'Counting'
},
{
    name: 'console.countReset()',
    type: 'info',
    description: 'Reset the counter for the given label',
    example: 'console.count("clicks");\nconsole.count("clicks");\nconsole.countReset("clicks");\nconsole.count("clicks");',
    category: 'Counting'
},

// Timing Methods
{
    name: 'console.time()',
    type: 'info',
    description: 'Start a timer with a given name',
    example: 'console.time("operation");\n// some code here\nconsole.timeEnd("operation");',
    category: 'Timing'
},
{
    name: 'console.timeEnd()',
    type: 'info',
    description: 'Stop the timer with the given name and report the time',
    example: 'console.time("loop");\nfor(let i = 0; i < 1000; i++) {}\nconsole.timeEnd("loop");',
    category: 'Timing'
},
{
    name: 'console.timeLog()',
    type: 'info',
    description: 'Log the current value of a timer without stopping it',
    example: 'console.time("process");\n// some code\nconsole.timeLog("process", "checkpoint 1");\n// more code\nconsole.timeEnd("process");',
    category: 'Timing'
},

// Testing & Debugging
{
    name: 'console.assert()',
    type: 'error',
    description: 'Write an error message if assertion is false',
    example: 'console.assert(1 === 2, "This will show an error");\nconsole.assert(1 === 1, "This will not show");',
    category: 'Testing'
},
{
    name: 'console.trace()',
    type: 'info',
    description: 'Output a stack trace to the console',
    example: 'function first() { second(); }\nfunction second() { console.trace("Call stack"); }\nfirst();',
    category: 'Testing'
},

// Utility Methods
{
    name: 'console.clear()',
    type: 'info',
    description: 'Clear the console (browser dependent)',
    example: 'console.clear();',
    category: 'Utility'
}
];


/**
 * Advanced Examples for the demo
 */
const advancedExamples = [
    {
        title: "Basic Logging Showcase",
        description: "Demonstrate all basic logging methods",
        code: `// Basic logging methods demonstration

        console.log("📝 Regular log message");
        console.info("ℹ️ Informational message");
        console.warn("⚠️ Warning message");
        console.error("❌ Error message");
        console.debug("🐛 Debug message");


        // With multiple arguments

        console.log("User:", {name: "John", age: 30}, "Status:", "active");`
    },
{
    title: "Table Formatting",
    description: "Show data in beautiful table format",
    code: `// Array of objects

    const users = [
        {id: 1, name: "John Doe", email: "john@example.com", age: 30},
        {id: 2, name: "Jane Smith", email: "jane@example.com", age: 25},
        {id: 3, name: "Bob Johnson", email: "bob@example.com", age: 35}
    ];
    console.table(users);


    // Simple array

    const colors = ["red", "green", "blue", "yellow"];
    console.table(colors);


    // Object

    const config = {theme: "dark", language: "en", version: "1.0"};
    console.table(config);`
},
{
    title: "Styled Console Messages",
    description: "Add colors and styles to console messages",
    code: `// Styled messages using %c directive

    console.log("%cSuccess!", "color: green; font-size: 20px; font-weight: bold;");
    console.log("%cError: %cSomething went wrong", "color: red; font-weight: bold;", "color: orange;");
    console.log("%c🎉 Welcome! %cEnjoy the demo", "color: #64b5f6; font-size: 16px;", "color: lightblue;");

    // Multiple styles in one message

    console.log("%cApp %cStarted %cSuccessfully",
                "background: blue; color: white; padding: 2px 4px;",
                "background: green; color: white; padding: 2px 4px;",
                "background: purple; color: white; padding: 2px 4px;");`
},
{
    title: "Performance Timing",
    description: "Measure code execution time accurately",
    code: `// Basic timing

    console.time("Array Processing");

    const numbers = Array.from({length: 100000}, (_, i) => i);
    const doubled = numbers.map(n => n * 2);

    console.timeEnd("Array Processing");



    // Timer with checkpoints

    console.time("Multi-step Process");
    console.log("Step 1: Creating data...");

    const data = Array.from({length: 50000}, () => Math.random());

    console.timeLog("Multi-step Process", "Data created");

    console.log("Step 2: Processing data...");

    const processed = data.filter(n => n > 0.5).map(n => n * 100);

    console.timeLog("Multi-step Process", "Data processed");

    console.log("Step 3: Finalizing...");
    console.timeEnd("Multi-step Process");`
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

    console.groupCollapsed("🔧 Advanced Settings");
    console.log("Cache configuration: enabled");
    console.log("Debug mode: disabled");
    console.log("API timeout: 5000ms");
    console.groupEnd();

    console.log("Data processing complete");
    console.groupEnd();

    console.log("Application ready!");
    console.groupEnd();`
},
{
    title: "Counter & Tracking",
    description: "Track function calls and events",
    code: `// Function call counting

    function processOrder(orderId) {
        console.count("orders-processed");
        console.log(\`Processing order \${orderId}\`);
    }


    function processPayment(amount) {
        console.count("payments-processed");
        console.log(\`Processing payment: $\${amount}\`);
    }



    // Simulate some operations

    processOrder("ORD-001");
    processOrder("ORD-002");
    processPayment(99.99);
    processOrder("ORD-003");
    processPayment(149.50);



    // Reset a counter

    console.countReset("orders-processed");
    processOrder("ORD-004"); // This will start from 1 again`
},
{
    title: "Assertion Testing",
    description: "Use console.assert for simple testing",
    code: `// Testing function

    function validateUser(user) {
        console.assert(user, "User object is required");
        console.assert(user.name, "User name is required");
        console.assert(user.age >= 18, "User must be 18 or older", user);
        console.assert(typeof user.email === "string", "Email must be a string");
        console.assert(user.email.includes("@"), "Email must contain @ symbol");
    }



    // Test cases

    console.group("🧪 User Validation Tests");

    validateUser({name: "John", age: 25, email: "john@example.com"}); // All pass
    validateUser({name: "Jane", age: 16, email: "jane@example.com"}); // Age fails
    validateUser({name: "Bob", age: 30, email: "invalid-email"}); // Email fails

    console.groupEnd();`
},
{
    title: "Object Inspection",
    description: "Explore objects and trace function calls",
    code: `// Complex object inspection

    const complexObject = {
        users: [
            { id: 1, name: "John", profile: { city: "NY", country: "USA", preferences: {theme: "dark"} } },
            { id: 2, name: "Jane", profile: { city: "LA", country: "USA", preferences: {theme: "light"} } }
        ],
        settings: {
            app: { version: "1.0", debug: true },
            api: { timeout: 5000, retries: 3 }
        }
    };


    console.log("Regular log:");
    console.log(complexObject);

    console.log("\\nDirectory view:");
    console.dir(complexObject);



    // Function call tracing

    function calculateTotal(items) {
        console.trace("calculateTotal called");
        return items.reduce((sum, item) => sum + item.price, 0);
    }


    function processOrder(order) {
        console.log("Processing order:", order.id);
        const total = calculateTotal(order.items);
        console.log("Order total:", total);
    }


    processOrder({
        id: "ORD-001",
        items: [{name: "Item 1", price: 10}, {name: "Item 2", price: 20}]
    });`
},
{
    title: "Complete Demo",
    description: "Showcase all console methods together",
    code: `console.clear();

    console.log("%c🎯 Complete Console Methods Demo", "font-size: 18px; color: #64b5f6; font-weight: bold;");

    console.time("Demo Duration");



    // Basic logging

    console.group("📋 Basic Group Logging");
    console.log("I'm a log message!");
    console.info("I'm an info message!");
    console.warn("I'm a warning message!");
    console.error("I'm an error message!");
    console.debug("I'm a debug info message!");
    console.groupEnd();


    // Data display

    console.group("📊 Data Display");

    const sampleData = [
        {name: "Alice", score: 95, grade: "A"},
        {name: "Bob", score: 87, grade: "B"},
        {name: "Charlie", score: 92, grade: "A"}
    ];

    console.table(sampleData);
    console.dir({type: "demo", data: sampleData});
    console.groupEnd();



    // Counting and timing

    console.group("🔢 Counting & Timing");

    for(let i = 0; i < 3; i++) {
        console.count("loop-iteration");
    }

    console.time("quick-operation");

    Math.random() * 1000; // Simulate work


    console.timeEnd("quick-operation");
    console.groupEnd();



    // Testing

    console.group("🧪 Testing");

    console.assert(true, "This assertion passes");
    console.assert(false, "This assertion fails");
    console.trace("Stack trace example");

    console.groupEnd();



    console.timeEnd("Demo Duration");
    console.log(" Demo Complete!", "font-size: 16px; color: green; font-weight: bold;");`
}
];



// =============================================================================
// CLASSES
// =============================================================================

/**
 * Console Methods Manager
 * Handles the organization and display of console methods
 */
class ConsoleMethodsManager {

    constructor() {
        this.methods = consoleMethods;
        this.categories = this.groupMethodsByCategory();
    }


    /**
     * Groups methods by their category
     * @returns {Object} Methods grouped by category
     */

    groupMethodsByCategory() {

        return this.methods.reduce((acc, method) => {

            if (!acc[method.category]) {

                acc[method.category] = [];

            }

            acc[method.category].push(method);
            return acc;

        }, {});
    }


    /**
     * Populates the sidebar with methods organized by category
     */

    populateMethodsList() {

        const methodsList = document.getElementById('methods-list');

        methodsList.innerHTML = '';

        Object.entries(this.categories).forEach(([category, methods]) => {
            // Create category container
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'method-category';

            // Category title
            const categoryTitle = document.createElement('div');
            categoryTitle.className = 'category-title';
            categoryTitle.textContent = category;
            categoryDiv.appendChild(categoryTitle);

            // Add methods for this category
            methods.forEach((method, index) => {
                const methodItem = document.createElement('div');
                methodItem.className = 'method-item';
                methodItem.innerHTML = `
                <div class="method-header">
                <span class="method-name">${method.name}</span>
                <span class="method-type ${method.type}">${method.type.toUpperCase()}</span>
                </div>
                <div class="method-description">${method.description}</div>
                `;

                methodItem.addEventListener('click', () => {
                    document.querySelectorAll('.method-item').forEach(item => item.classList.remove('active'));
                    methodItem.classList.add('active');
                    editorManager.setValue(method.example);
                });

                categoryDiv.appendChild(methodItem);
            });

            methodsList.appendChild(categoryDiv);
        });
    }
}



/**
 * Custom Console Implementation
 * Handles the display of console output in the custom console area
 */
class CustomConsole {

    constructor() {

        this.consoleElement = document.getElementById('custom-console');
        this.counters = {};
        this.timers = {};
        this.groupLevel = 0;

    }

    /**
     * Gets current timestamp in HH:MM format
     * @returns {string} Formatted timestamp
     */
    getTimestamp() {

        return new Date().toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).slice(0, 5);
    }

    /**
     * Formats arguments for display
     * @param {Array} args - Arguments to format
     * @returns {string} Formatted content
     */

    formatArgs(args) {

        return args.map(arg => {


            if (typeof arg === 'object' && arg !== null) {

                if (Array.isArray(arg)) {
                    return `<span class="console-array">[${arg.length} items: ${arg.slice(0, 3).join(', ')}${arg.length > 3 ? '...' : ''}]</span>`;


                } else if (arg instanceof Error) {

                    return `<span class="console-error">${arg.name}: ${arg.message}</span>`;


                } else {

                    return `<span class="console-object">${JSON.stringify(arg, null, 2)}</span>`;

                }
            }

            return String(arg);

        }).join(' ');
    }



    /**
     * Creates a table HTML representation
     * @param {Array|Object} data - Data to display as table
     * @returns {string} HTML table
     */

    createTable(data) {

        if (!data) return '<span class="console-error">No data provided</span>';

        let html = '<table class="console-table-display">';



        if (Array.isArray(data)) {

            if (data.length === 0) {

                return '<span class="console-info">Empty array</span>';

            }


            // Handle array of primitives

            if (typeof data[0] !== 'object') {

                html += '<thead><tr><th>(index)</th><th>value</th></tr></thead><tbody>';

                data.forEach((item, index) => {
                    html += `<tr><td>${index}</td><td>${item}</td></tr>`;
                });


            } else {

                // Handle array of objects
                const keys = Object.keys(data[0]);
                html += '<thead><tr><th>(index)</th>';

                keys.forEach(key => {
                    html += `<th>${key}</th>`;
                });

                html += '</tr></thead><tbody>';



                data.forEach((item, index) => {

                    html += `<tr><td>${index}</td>`;
                    keys.forEach(key => {

                        const value = item[key];
                        html += `<td>${typeof value === 'object' ? JSON.stringify(value) : value}</td>`;

                    });

                    html += '</tr>';
                });
            }


        } else if (typeof data === 'object') {

            // Handle single object

            html += '<thead><tr><th>key</th><th>value</th></tr></thead><tbody>';


            Object.entries(data).forEach(([key, value]) => {

                html += `<tr><td>${key}</td><td>${typeof value === 'object' ? JSON.stringify(value) : value}</td></tr>`;

            });

        }

        html += '</tbody></table>';


        return html;
    }



    /**
     * Adds an entry to the console
     * @param {string} type - Console method type
     * @param {Array} args - Arguments to display
     */

    addEntry(type, ...args) {

        const timestamp = this.getTimestamp();
        const entry = document.createElement('div');
        entry.className = 'console-entry';

        let content;
        let indent = '  '.repeat(this.groupLevel);


        switch (type) {

            case 'table':

                content = this.createTable(args[0]);
                break;

            case 'group':

                content = `${indent}▼ ${args[0] || 'Group'}`;
                this.groupLevel++;
                break;

            case 'groupCollapsed':

                content = `${indent}▶ ${args[0] || 'Group'} (collapsed)`;
                this.groupLevel++;
                break;

            case 'groupEnd':

                this.groupLevel = Math.max(0, this.groupLevel - 1);
                content = `${indent}▲ Group End`;
                break;


            case 'count':

                content = `${indent}${args[0]}`;
                break;


            case 'time':

                content = `${indent}⏱️ Timer '${args[0]}' started`;
                break;


            case 'timeEnd':

                content = `${indent}⏱️ ${args[0]}`;
                break;


            case 'timeLog':

                content = `${indent}⏱️ ${args[0]}`;
                break;


            case 'assert':

                content = `${indent}Assertion failed: ${this.formatArgs(args)}`;
                break;


            case 'trace':

                content = `${indent}Trace: ${this.formatArgs(args)}`;
                break;


            case 'clear':

                this.clear();
                return;


            default:
                content = `${indent}${this.formatArgs(args)}`;
        }


        entry.innerHTML = `
        <span class="console-timestamp">${timestamp}</span>
        <span class="console-content console-${type}">${content}</span>
        `;

        this.consoleElement.appendChild(entry);
        this.consoleElement.scrollTop = this.consoleElement.scrollHeight;
    }


    /**
     * Clears the console
     */

    clear() {

        this.consoleElement.innerHTML = `
        <div class="console-entry">
        <span class="console-timestamp">${this.getTimestamp()}</span>
        <span class="console-content console-info">Console cleared</span>
        </div>
        `;

        this.groupLevel = 0;
    }
}



/**
 * Code Editor Manager
 * Handles the Ace editor functionality
 */
class CodeEditorManager {

    constructor() {

        this.editor = null;
        this.init();

    }

    /**
     * Initialize the Ace editor
     */


    init() {

        this.editor = ace.edit("code-editor");
        this.editor.setTheme("ace/theme/monokai");
        this.editor.session.setMode("ace/mode/javascript");

        this.editor.setOptions({
            fontSize: "14px",
            showLineNumbers: true,
            showGutter: true,
            wrap: true,
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true
        });


        // Set initial code
        this.setValue(`// Try different console methods and see them in action

        console.log("👋 Hello, World!");
        console.info("I'm an info message");
        console.warn("I'm a warning message");
        console.error("I'm an error message");


        // Try a table

        const users = [

            {name: "John", age: 30, city: "New York"},
            {name: "Jane", age: 25, city: "Los Angeles"}
        ];

        console.table(users);



        // Try counting

        console.count("demo");
        console.count("demo");
        console.count("demo");
        `);
    }


    /**
     * Set editor value
     * @param {string} code - Code to set
     */

    setValue(code) {

        this.editor.setValue(code, -1);

    }


    /**
     * Get editor value
     * @returns {string} Current code in editor
     */

    getValue() {

        return this.editor.getValue();

    }
}

/**
 * Console Override Manager
 * Overrides native console methods to display in custom console
 */
class ConsoleOverrideManager {

    constructor(customConsole) {

        this.customConsole = customConsole;
        this.originalConsole = { ...console };
        this.setupOverrides();

    }


    /**
     * Setup all console method overrides
     */
    setupOverrides() {

        // Basic logging methods

        console.log = (...args) => {
            this.originalConsole.log(...args);
            this.customConsole.addEntry('log', ...args);
        };

        console.info = (...args) => {
            this.originalConsole.info(...args);
            this.customConsole.addEntry('info', ...args);
        };

        console.warn = (...args) => {
            this.originalConsole.warn(...args);
            this.customConsole.addEntry('warn', ...args);
        };

        console.error = (...args) => {
            this.originalConsole.error(...args);
            this.customConsole.addEntry('error', ...args);
        };

        console.debug = (...args) => {
            this.originalConsole.debug(...args);
            this.customConsole.addEntry('debug', ...args);
        };


        // Formatting methods

        console.table = (data) => {
            this.originalConsole.table(data);
            this.customConsole.addEntry('table', data);
        };

        console.dir = (obj) => {
            this.originalConsole.dir(obj);
            this.customConsole.addEntry('info', 'Directory:', obj);
        };

        console.dirxml = (obj) => {
            this.originalConsole.dirxml(obj);
            this.customConsole.addEntry('info', 'DIRXML:', obj);
        };


        // Grouping methods

        console.group = (label) => {
            this.originalConsole.group(label);
            this.customConsole.addEntry('group', label || 'Group');
        };

        console.groupCollapsed = (label) => {
            this.originalConsole.groupCollapsed(label);
            this.customConsole.addEntry('groupCollapsed', label || 'Group');
        };

        console.groupEnd = () => {
            this.originalConsole.groupEnd();
            this.customConsole.addEntry('groupEnd');
        };


        // Counting methods

        console.count = (label = 'default') => {
            this.customConsole.counters[label] = (this.customConsole.counters[label] || 0) + 1;
            this.originalConsole.count(label);
            this.customConsole.addEntry('count', `${label}: ${this.customConsole.counters[label]}`);
        };

        console.countReset = (label = 'default') => {
            this.customConsole.counters[label] = 0;
            this.originalConsole.countReset(label);
            this.customConsole.addEntry('count', `${label}: reset to 0`);
        };


        // Timing methods

        console.time = (label = 'default') => {
            this.customConsole.timers[label] = Date.now();
            this.originalConsole.time(label);
            this.customConsole.addEntry('time', label);
        };

        console.timeEnd = (label = 'default') => {
            if (this.customConsole.timers[label]) {
                const duration = Date.now() - this.customConsole.timers[label];
                delete this.customConsole.timers[label];
                this.originalConsole.timeEnd(label);
                this.customConsole.addEntry('timeEnd', `${label}: ${duration}ms`);
            }
        };

        console.timeLog = (label = 'default', ...args) => {
            if (this.customConsole.timers[label]) {
                const duration = Date.now() - this.customConsole.timers[label];
                this.originalConsole.timeLog(label, ...args);
                this.customConsole.addEntry('timeLog', `${label}: ${duration}ms`, ...args);
            }
        };


        // Testing methods

        console.assert = (condition, ...args) => {
            this.originalConsole.assert(condition, ...args);
            if (!condition) {
                this.customConsole.addEntry('assert', ...args);
            }
        };

        console.trace = (...args) => {
            this.originalConsole.trace(...args);
            this.customConsole.addEntry('trace', ...args);
        };

        // Utility methods
        console.clear = () => {
            this.originalConsole.clear();
            this.customConsole.clear();
        };
    }
}

/**
 * Examples Manager
 * Handles the examples modal and functionality
 */

class ExamplesManager {

    constructor() {
        this.examples = advancedExamples;
        this.modal = document.getElementById('examples-modal');
        this.grid = document.getElementById('examples-grid');
    }


    /**
     * Show the examples modal
     */
    show() {
        this.populateGrid();
        this.modal.style.display = 'flex';
    }

    /**
     * Hide the examples modal
     */
    hide() {
        this.modal.style.display = 'none';
    }

    /**
     * Populate the examples grid
     */
    populateGrid() {
        this.grid.innerHTML = '';
        this.examples.forEach(example => {
            const card = document.createElement('div');
            card.className = 'example-card';
            card.innerHTML = `
            <div class="example-title">${example.title}</div>
            <div class="example-desc">${example.description}</div>
            <div class="example-code">${example.code.split('\n')[0]}...</div>
            `;

            card.addEventListener('click', () => {
                editorManager.setValue(example.code);
                this.hide();
            });

            this.grid.appendChild(card);
        });
    }


    /**
     * Load a random example
     */
    loadRandom() {
        const randomExample = this.examples[Math.floor(Math.random() * this.examples.length)];
        editorManager.setValue(randomExample.code);
    }
}

// =============================================================================
// GLOBAL INSTANCES
// =============================================================================

let methodsManager;
let customConsole;
let editorManager;
let consoleOverride;
let examplesManager;

// =============================================================================
// GLOBAL FUNCTIONS
// =============================================================================

/**
 * Initialize the application
 */

function initializeApp() {

    try {

        // Initialize core components
        methodsManager = new ConsoleMethodsManager();
        customConsole = new CustomConsole();
        editorManager = new CodeEditorManager();
        consoleOverride = new ConsoleOverrideManager(customConsole);
        examplesManager = new ExamplesManager();

        // Populate methods list
        methodsManager.populateMethodsList();

        // Add welcome message
        customConsole.addEntry('info', '1.  Console Methods Demo initialized successfully!');
        customConsole.addEntry('info', '   - Click on any method in the sidebar to load an example');
        customConsole.addEntry('info', '   - Press "Run Code" to execute your JavaScript code');

        console.log('Application initialized successfully');

    } catch (error) {

        console.error('Failed to initialize application:', error);

    }
}



/**
 * Run the code in the editor
 */
function runCode() {

    try {

        const code = editorManager.getValue();

        if (!code.trim()) {

            customConsole.addEntry('warn', 'No code to execute');
            return;

        }

        // Add execution indicator
        customConsole.addEntry('info', '-> Executing code...');

        // Create a new function scope to avoid variable conflicts
        const executeCode = new Function(code);
        executeCode();

        customConsole.addEntry('info', '[OK] Code execution completed');

    } catch (error) {

        customConsole.addEntry('error', `[ERROR] Execution Error: ${error.message}`);
        console.error('Code execution error:', error);

    }
}



/**
 * Clear the console button-from-class
 */

function clearConsole() {

    customConsole.clear();

}


/**
 * Show examples modal
 */
function showExamples() {

    examplesManager.show();

}



/**
 * Hide examples modal
 */
function hideExamples() {

    examplesManager.hide();

}



/**
 * Load a random example
 */
function loadRandomExample() {

    examplesManager.loadRandom();
    customConsole.addEntry('info', '🎲 Random example loaded!');

}



/**
 * Handle keyboard shortcuts
 */
function handleKeyboardShortcuts(event) {


    // Ctrl + Enter to run code
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {

        event.preventDefault();
        runCode();

    }


    // Ctrl + L to clear console
    if ((event.ctrlKey || event.metaKey) && event.key === 'l') {

        event.preventDefault();
        clearConsole();

    }


    // Escape to close examples modal
    if (event.key === 'Escape') {

        hideExamples();

    }
}



/**
 * Handle CSS styles for table display
 */
function addTableStyles() {

    const style = document.createElement('style');

    style.textContent = `
    .console-table-display {
        border-collapse: collapse;
        margin: 5px 0;
        font-family: monospace;
        font-size: 12px;
        background: rgba(76,175,80,0.05);
        border-radius: 4px;
        overflow: hidden;
    }

    .console-table-display th,
    .console-table-display td {
        border: 1px solid rgba(76,175,80,0.3);
        padding: 4px 8px;
        text-align: left;
    }

    .console-table-display th {
        background: rgba(76,175,80,0.2);
        font-weight: bold;
        color: #4caf50;
    }

    .console-table-display td {
        color: #ccc;
    }

    .console-table-display tr:nth-child(even) {
        background: rgba(76,175,80,0.02);
    }

    .console-table-display tr:hover {
        background: rgba(76,175,80,0.1);
    }

    .category-title {
        color: #64b5f6;
        font-weight: 600;
        margin: 15px 0 10px 0;
        padding: 8px 0;
        border-bottom: 1px solid rgba(100,181,246,0.3);
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .category-title:first-child {
        margin-top: 0;
    }

    .method-category {
        margin-bottom: 20px;
    }

    .method-category:last-child {
        margin-bottom: 0;
    }
    `;

    document.head.appendChild(style);
}



/**
 * Handle click outside examples modal to close it
 */
function handleModalClick(event) {

    const modal = document.getElementById('examples-modal');
    const modalContent = modal.querySelector('.examples-modal');

    if (event.target === modal && !modalContent.contains(event.target)) {

        hideExamples();

    }
}




// =============================================================================
// EVENT LISTENERS & INITIALIZATION
// =============================================================================

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {

    initializeApp();
    addTableStyles();

    // Add keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);

    // Add modal click handler
    document.getElementById('examples-modal').addEventListener('click', handleModalClick);

    // Add resize handler for responsive behavior
    window.addEventListener('resize', function() {

        if (editorManager && editorManager.editor) {
            editorManager.editor.resize();
        }
    });


    // Add error handling for unhandled errors
    window.addEventListener('error', function(event) {
        customConsole.addEntry('error', `Global Error: ${event.message}`);
        console.error('Global error:', event);
    });


    // Add unhandled promise rejection handler
    window.addEventListener('unhandledrejection', function(event) {

        customConsole.addEntry('error', `Unhandled Promise Rejection: ${event.reason}`);
        console.error('Unhandled promise rejection:', event);

    });

});



// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {

    let timeout;


    return function executedFunction(...args) {

        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}



/**
 * Format code for better display
 * @param {string} code - Code to format
 * @returns {string} Formatted code
 */
function formatCode(code) {

    try {

        // Basic formatting - add proper indentation
        return code
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .join('\n');


    } catch (error) {

        return code;

    }
}




/**
 * Copy text to clipboard - async(debounced)
 * @param {string} text - Text to copy
 */
async function copyToClipboard(text) {

    try {

        await navigator.clipboard.writeText(text);
        customConsole.addEntry('info', '📋 Code copied to clipboard!');


    } catch (error) {
        console.error('Failed to copy to clipboard:', error);
        customConsole.addEntry('error', 'Failed to copy to clipboard');
    }
}




/**
 * Export console output as text
 */
function exportConsoleOutput() {

    const consoleEntries = document.querySelectorAll('.console-entry');
    let output = 'Console Output Export\n';

    output += '='.repeat(50) + '\n\n';


    consoleEntries.forEach(entry => {

        const timestamp = entry.querySelector('.console-timestamp').textContent;
        const content = entry.querySelector('.console-content').textContent;

        output += `[${timestamp}] ${content}\n`;
    });

    const blob = new Blob([output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');

    a.href = url;
    a.download = `console-output-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);


    customConsole.addEntry('info', 'Console output exported successfully!');
}



// =============================================================================
// ADDITIONAL FEATURES
// =============================================================================

/**
 * Theme manager for future enhancements
 */
class ThemeManager {

    constructor() {

        this.currentTheme = 'dark';

        this.themes = {

            dark: {
                primary: '#64b5f6',
                background: '#1a1a2e',
                surface: 'rgba(255,255,255,0.05)'
            },
            light: {
                primary: '#1976d2',
                background: '#f5f5f5',
                surface: 'rgba(0,0,0,0.05)'
            }

        };
    }


    switchTheme(themeName) {

        if (this.themes[themeName]) {

            this.currentTheme = themeName;

            // Theme switching logic would go here
            customConsole.addEntry('info', `🎨 Theme switched to ${themeName}`);

        }
    }
}




/**
 * Performance monitor for advanced debugging
 */
class PerformanceMonitor {


    constructor() {
        this.metrics = {};
    }



    startMonitoring(label) {

        this.metrics[label] = {

            start: performance.now(),
            memory: performance.memory ? performance.memory.usedJSHeapSize : null

        };
    }


    endMonitoring(label) {

        if (this.metrics[label]) {

            const duration = performance.now() - this.metrics[label].start;
            const memoryDiff = performance.memory ?
            performance.memory.usedJSHeapSize - this.metrics[label].memory : null;


            customConsole.addEntry('info',
                                   `⚡ ${label}: ${duration.toFixed(2)}ms${memoryDiff ? ` (${memoryDiff} bytes)` : ''}`);

            delete this.metrics[label];
        }
    }
}



// Initialize additional features

const themeManager = new ThemeManager();
const performanceMonitor = new PerformanceMonitor();

// =============================================================================
// EXPORTS FOR TESTING IN REAL BROWSER CONSOLE
// =============================================================================

// Make functions available globally for debugging
window.consoleMethodsDemo = {
    runCode,
    clearConsole,
    showExamples,
    hideExamples,
    loadRandomExample,
    exportConsoleOutput,
    themeManager,
    performanceMonitor,
    // Access to instances
    get methodsManager() { return methodsManager; },
    get customConsole() { return customConsole; },
    get editorManager() { return editorManager; },
    get examplesManager() { return examplesManager; }
};


console.log(' Console Methods Demo fully loaded and ready!');
console.log('💡 Tip: Use Ctrl+Enter to run code, Ctrl+L to clear console');
console.log('🔧 Access advanced features via window.consoleMethodsDemo');
