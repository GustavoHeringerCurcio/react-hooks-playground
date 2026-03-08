
Practice ideas (useState)

Toggle Button — switch ON / OFF

Show / Hide Text — toggle paragraph visibility

Character Counter — count input characters

Like Button — increase likes counter

Color Changer — change background color

Temperature Converter — Celsius ↔ Fahrenheit

Simple Todo List — add tasks

Todo List with Delete — add and remove tasks

Image Gallery — next / previous image

Mini Calculator — +1, -1, reset

Counter with LocalStorage — persist value after refresh

3. Character Counter

Goal: type in an input and count characters

State to think about:

a string like text

What changes it:

input onChange

What you practice:

controlled inputs

deriving values from state

Challenge idea:

show remaining characters from a max limit like 100

make text red if it passes the limit

4. Like Button

Goal: increase likes

State to think about:

a number like likes

What changes it:

button click adds 1

What you practice:

numeric state

updating based on previous value

Challenge idea:

add a “dislike” button

prevent likes from going below 0

5. Mini Calculator

Goal: +1, -1, reset

State to think about:

a number like count

What changes it:

three different buttons

What you practice:

multiple event handlers

simple state transitions

Challenge idea:

add +5 and -5

disable -1 when count is 0

6. Color Changer

Goal: change background color

State to think about:

a string like color

What changes it:

button click or select dropdown

What you practice:

state driving styles

dynamic inline styles or conditional classes

Challenge idea:

let the user type a color

add random color generation

7. Temperature Converter

Goal: convert Celsius ↔ Fahrenheit

State to think about:
You can do this in two ways:

Option A: easier

one input state

one unit state

Option B: better practice

celsius

fahrenheit

What changes it:

typing in one field updates the other

What you practice:

syncing related values

handling numbers from inputs

Challenge idea:

show "Water freezes" or "Water boils" depending on temp

8. Simple Todo List

Goal: add tasks

State to think about:

input text

array of tasks

What changes it:

typing in input

clicking add button

What you practice:

arrays in state

rendering lists with map

clearing input after submit

Challenge idea:

prevent empty tasks

press Enter to add task

9. Todo List with Delete

Goal: add and remove tasks

State to think about:

same as above, but now each task should probably have:

id

text

What changes it:

add task

delete task by id

What you practice:

array filtering

unique IDs

updating lists safely

Challenge idea:

add “completed” toggle

show total tasks left

10. Image Gallery

Goal: next / previous image

State to think about:

current image index

What changes it:

clicking next or previous

What you practice:

indexing arrays

boundaries

conditionally disabling buttons

Challenge idea:

wrap around from last to first

add image titles

11. Counter with LocalStorage

Goal: save value after refresh

State to think about:

count

What changes it:

button clicks

loading initial value from localStorage

What you practice:

combining useState with useEffect

persistence

side effects

Challenge idea:

save theme color too

add reset that clears localStorage