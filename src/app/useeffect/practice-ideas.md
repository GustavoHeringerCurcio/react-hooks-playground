# React `useEffect` Practice List

Practice exercises to understand how `useEffect` works in real situations.

---
three options to use useeffect.
1. always that something renders, not recomended.
2. use an empty array [] -> just render 1 time, on mount.
3. [dependecies] always that the dependecies renders the effect is used.

## 1. Console Logger

Create a counter.

Every time the counter changes, log a message in the console.

Example:

```
Count changed: 3
```

---

## 2. Update Document Title

Create a counter.

Whenever the counter changes, update the browser tab title.

Example:

```
You clicked 5 times
```

---

## 3. Run Effect Only Once

Run an effect only when the component loads.

Example:

```
Page loaded
```

Hint:
Use an empty dependency array.

---

## 4. Window Resize Tracker

Display the current window width.

Update the value whenever the user resizes the browser.

Example:

```
Width: 1280px
```

---

## 5. Timer Counter

Create a counter that increases automatically every second.

Example:

```
Seconds: 0
Seconds: 1
Seconds: 2
```

Hint:
Use `setInterval`.

---

## 6. Fetch Users From API

Fetch users from this API when the component loads:

```
https://jsonplaceholder.typicode.com/users
```

Display the user names in a list.

---

## 7. Search With API

Create an input field.

Whenever the search value changes, fetch data from an API.

Example UI:

```
Search: John
```

The request should run every time the search changes.

---

## 8. Dark Mode Persistence

Create a dark mode toggle.

Save the user's preference in `localStorage`.

When the page refreshes, the theme should stay the same.

---

## 9. Online / Offline Status

Detect if the user is online or offline.

Display:

```
You are online
```

or

```
You are offline
```

---

## 10. Auto Save Input

Create a textarea.

Whenever the user types, automatically save the content in `localStorage`.

After refreshing the page, the text should still be there.

---

## Bonus Exercise

Random Image Gallery.

Fetch images from:

```
https://picsum.photos/v2/list
```

Display the images in a grid.
