## How JavaScript Works Under the Hood

Before anything else, burn these three truths into memory. Everything in this phase builds on them.

### JavaScript is single-threaded

JS has **one** call stack and **one** thread of execution. It can do exactly **one thing at a time**. There is no "run two functions in parallel" inside the language itself.

### JavaScript is synchronous (by default)

Code runs **top to bottom, line by line**. A line does not start until the previous one finishes.

### JavaScript is interpreted _and_ JIT-compiled

Old explanation: "JS is an interpreted language." Modern reality: engines use **JIT (Just-In-Time) compilation** — they interpret your code to start fast, then compile the frequently-used ("hot") parts into optimized machine code for speed. So it's a hybrid.

> **Common myth to kill:** "JS is multi-threaded because async works." ❌
> JS itself is single-threaded. Async behaviour (timers, network calls) is handled by the **environment** (browser or Node), _not_ by the JS engine. We'll prove this in the next phase with the Event Loop.

## 2. JavaScript Engines

JS code can't run on its own — it needs an **engine**. An engine is a program (mostly written in C++) that reads your JavaScript and turns it into something the machine understands.

| Engine             | Used in                        |
| ------------------ | ------------------------------ |
| **V8**             | Chrome, Node.js, Edge (Google) |
| **SpiderMonkey**   | Firefox (Mozilla)              |
| **JavaScriptCore** | Safari (Apple)                 |

**Simple mental model:** the engine is a translator that converts your English-like code into machine code.

### What happens inside the engine (the pipeline)

When you run a JS file, the engine roughly does this:

1. **Tokenizing / Lexing** — breaks code into small pieces called _tokens_. `let x = 10;` → `let`, `x`, `=`, `10`, `;`
2. **Parsing → AST** — tokens are turned into a tree structure called the **Abstract Syntax Tree (AST)**.
3. **Compilation (JIT)** — in V8, the **Ignition** interpreter converts the AST into _bytecode_ and runs it immediately. The **TurboFan** optimizer then recompiles hot code into fast machine code.
4. **Execution** — the code runs on the **Call Stack** (next sections).

> 💡 **Try it live in class:** open astexplorer.net and paste a small snippet to _see_ the AST. Students find this genuinely eye-opening.

## 3. Execution Context

### What is an Execution Context (EC)?

An **Execution Context** is the "environment" in which a piece of JavaScript code is evaluated and executed. Think of it as a sealed container that holds everything the code needs to run: its variables, functions, and the value of `this`.

Whenever JS runs code, it always runs _inside_ an execution context.

### Global Execution Context (GEC)

- Created **first**, automatically, the moment your program starts.
- There is only **one** GEC.
- In the browser, it creates the global `window` object, and `this` points to `window`.

### Function Execution Context (FEC)

- A **new** FEC is created **every time a function is called**.
- Each function call gets its own private context with its own variables.
- When the function finishes, its FEC is destroyed (usually — closures are the exception, covered later 😉).

### The Two Phases of Every Execution Context

This is one of the most important concepts in the whole phase. Every EC is built in **two phases**:

**Phase 1 — Creation Phase (Memory allocation)**
Before any line runs, JS scans the code and sets up memory:

- All `var` variables get memory and are set to `undefined`.
- All **function declarations** are stored fully in memory.
- The value of `this` is decided.

## 4. The Call Stack

### How JavaScript tracks function calls

The **Call Stack** is a data structure that tracks _which function is currently running_. It works on **LIFO** — **Last In, First Out**. The last function pushed in is the first one to pop out.

- When a function is **called** → it's **pushed** onto the stack.
- When a function **returns / finishes** → it's **popped** off.
- The bottom of the stack is always the Global Execution Context.

## 5. Hoisting

Hoisting is JS's behaviour of _appearing_ to move declarations to the top of their scope. **Important:** nothing physically moves — this is just the **Creation Phase** allocating memory before the code runs.

## . Scope

**Scope** = the region of code where a variable is accessible.

## . The Scope Chain — how JS looks up variables

When you use a variable, JS looks for it in this order:

1. The **current** scope.
2. If not found, the **parent (outer)** scope.
3. Then the parent's parent... and so on, all the way up to the **global** scope.
4. If it's nowhere → `ReferenceError`.

## . Closures 🧠 (the star of this phase)

### What is a closure? (the real definition)

A **closure** is a function bundled together with its surrounding **lexical environment**. In plain words: a function **remembers the variables from the scope where it was created**, even after that outer scope has finished executing.

**Analogy:** a closure is like a backpack. When a function is created, it packs a backpack of all the variables around it. Wherever that function travels later, it carries the backpack — so it can still use those variables.
