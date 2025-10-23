/*
===========================================
🔥 JAVASCRIPT EVENT PHASES NOTES
===========================================
*/

/*
1️⃣ DEFINITION
-------------------------------------------
- Every event in JavaScript (like `click`, `keydown`, etc.) goes through a **three-phase lifecycle**.
- These are part of the **Event Propagation Model**, which determines the **order in which event handlers are executed**.
- The three main phases are:
  1. Capturing Phase
  2. Target Phase
  3. Bubbling Phase
*/

/*
===========================================
2️⃣ EVENT FLOW OVERVIEW
-------------------------------------------
Event flow happens in this sequence:
📤 document → html → body → parent → child (Target)
      ↓ Capturing Phase
      🎯 Target Phase
      ↑ Bubbling Phase
===========================================
*/

/*
3️⃣ CAPTURING PHASE (Phase 1)
-------------------------------------------
- The event starts at the top of the DOM tree (`window` or `document`)
  and travels **downward** toward the target element.
- You can handle this phase by passing `true` as the third argument
  in `addEventListener(event, handler, true)`.

🔹 Example:
*/

document.getElementById("outer").addEventListener(
  "click",
  () => {
    console.log("Outer DIV - Capturing Phase");
  },
  true
);

/*
===========================================
4️⃣ TARGET PHASE (Phase 2)
-------------------------------------------
- The event reaches the element that was actually interacted with.
- Event handlers attached to this target element execute.
- Both capturing and bubbling handlers on the target will trigger,
  depending on how they were registered.
*/

document.getElementById("inner").addEventListener("click", () => {
  console.log("Inner DIV - Target Phase");
});

/*
===========================================
5️⃣ BUBBLING PHASE (Phase 3)
-------------------------------------------
- After the target phase, the event **bubbles upward** from the target 
  element to its ancestors (parent → body → html → document).
- By default, events are handled during this phase.
- You can stop bubbling using `event.stopPropagation()`.
*/

document.getElementById("outer").addEventListener("click", () => {
  console.log("Outer DIV - Bubbling Phase");
}); // Default = bubbling (false)

/*
===========================================
6️⃣ STOPPING PROPAGATION
-------------------------------------------
- Sometimes you don’t want an event to propagate further up or down.
- Use `event.stopPropagation()` to stop the event completely.

🔹 Example:
*/

document.getElementById("inner").addEventListener("click", (event) => {
  console.log("Clicked Inner DIV - Bubbling Stopped");
  event.stopPropagation();
});

/*
===========================================
7️⃣ EVENT.PHASE PROPERTY
-------------------------------------------
- The `event.eventPhase` property returns which phase the event is currently in:
  1 → Capturing phase
  2 → Target phase
  3 → Bubbling phase

🔹 Example:
*/

document.getElementById("inner").addEventListener("click", (event) => {
  console.log("Current Event Phase:", event.eventPhase);
});

/*
===========================================
8️⃣ FULL HTML STRUCTURE (FOR TESTING)
-------------------------------------------
Use this HTML to test the above code:
-------------------------------------------
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Phases</title>
</head>
<body>
  <div id="outer" style="padding:30px; background-color:lightblue;">
    Outer Div
    <div id="inner" style="padding:30px; background-color:lightcoral;">
      Inner Div
    </div>
  </div>
  <script src="eventPhases.js"></script>
</body>
</html>
-------------------------------------------
*/

/*
===========================================
9️⃣ KEY POINTS
-------------------------------------------
1. Event propagation has three phases: Capturing → Target → Bubbling.
2. By default, `addEventListener()` listens in the **bubbling phase**.
3. To listen in capturing phase, pass `true` as the 3rd argument.
4. Use `event.stopPropagation()` to prevent further propagation.
5. Use `event.eventPhase` to identify which phase is running.
6. Understanding propagation helps avoid unintended handler execution.
===========================================
*/
