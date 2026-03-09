# useEffect Practice Exercises

These exercises are designed to help you practice **real-world `useEffect` patterns**.
Try to **implement them yourself first** before looking up solutions.

---

# 4. Window Resize Tracker

## Goal

Track the **window width and height** and update the UI whenever the browser window is resized.

## Concepts Practiced

* `useEffect`
* `addEventListener`
* cleanup functions
* React state updates

## Steps

1. Create a state to store the window size.

```javascript
const [size, setSize] = useState({
  width: window.innerWidth,
  height: window.innerHeight
});
```

2. Create a function that updates the state using:

```
window.innerWidth
window.innerHeight
```

3. Inside `useEffect`:

* add a `"resize"` event listener
* call your update function when the event happens

4. Cleanup the event listener when the component unmounts.

Example lifecycle concept:

```
Component mounts → addEventListener
Component unmounts → removeEventListener
```

## Example UI

```
Window Width: 1280
Window Height: 720
```

## Bonus Challenge

Show a message depending on screen size:

```
Mobile Screen
Tablet Screen
Desktop Screen
```

---

# 5. Timer Counter

## Goal

Create a counter that **increments automatically every second**.

## Concepts Practiced

* `setInterval`
* `useEffect`
* cleanup with `clearInterval`

## Steps

1. Create a state:

```javascript
const [seconds, setSeconds] = useState(0);
```

2. Inside `useEffect`:

* start an interval
* increment the counter every **1000 milliseconds**

3. Cleanup the interval when the component unmounts.

```javascript
clearInterval(intervalId);
```

## Example UI

```
Timer: 0 seconds
Timer: 1 seconds
Timer: 2 seconds
Timer: 3 seconds
```

## Bonus Challenges

Add buttons:

```
Start
Pause
Reset
```

Extra challenge: create a **countdown timer**.

---

# 9. Online / Offline Status

## Goal

Detect whether the user **has internet connection**.

## Concepts Practiced

* browser events
* `navigator.onLine`
* multiple event listeners
* cleanup functions

## Events to Use

```
online
offline
```

## Steps

1. Create a state:

```javascript
const [isOnline, setIsOnline] = useState(navigator.onLine);
```

2. Inside `useEffect`, add event listeners:

```javascript
window.addEventListener("online", handleOnline);
window.addEventListener("offline", handleOffline);
```

3. Update the state when each event occurs.

4. Cleanup both listeners.

## Example UI

```
🟢 You are online
```

or

```
🔴 You are offline
```

## Bonus Challenge

Show a temporary banner when the connection changes:

```
Connection lost
Connection restored
```

---

# 10. Auto Save Input

## Goal

Automatically save user input to **localStorage** while the user types.

## Concepts Practiced

* controlled inputs
* `useEffect` dependencies
* localStorage persistence

## Steps

1. Create a state:

```javascript
const [text, setText] = useState("");
```

2. Create an input field:

```jsx
<input
  value={text}
  onChange={(e) => setText(e.target.value)}
/>
```

3. Inside `useEffect`, save the text whenever it changes:

```javascript
localStorage.setItem("draft", text);
```

4. When the component loads, retrieve the saved value:

```javascript
localStorage.getItem("draft");
```

## Example UI

```
Write something...

(saved automatically)
```

## Bonus Challenges

Show a save indicator:

```
Saving...
Saved ✔
```

Advanced improvement:

Add **debouncing** so it saves only **after the user stops typing for 1 second**.

---

# Summary

These exercises cover the **most common real-world patterns of `useEffect`**.

| Pattern        | Example        |
| -------------- | -------------- |
| Side Effects   | localStorage   |
| Timers         | setInterval    |
| Browser Events | online/offline |
| Subscriptions  | window resize  |

If you master these patterns, you will understand **most practical uses of `useEffect` in React applications**.
