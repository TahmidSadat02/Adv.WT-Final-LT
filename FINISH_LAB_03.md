# AI Agent Instructions: Complete React Lab 03

## Context
[cite_start]You are an expert React developer assisting with a Student Dashboard application[cite: 7]. 
[cite_start]Lab 01 (UI shell) [cite: 8, 9] [cite_start]and Lab 02 (Local state, search, sort) [cite: 32, 33, 49, 56] are complete. [cite_start]Task 1 of Lab 03 (ThemeContext for Dark Mode) is also complete[cite: 58, 69, 71].

[cite_start]Your goal is to complete Tasks 2, 3, 4, and 5 of Lab 03[cite: 74, 76, 79, 81]. 
**CRITICAL RULE:** Do not execute all tasks at once. Complete ONE task, explain what you changed, and WAIT for the user to approve before starting the next task.

---

## TASK 2: StudentContext & Refactoring
[cite_start]**Goal:** Move all student-related state from `App.jsx` into a global Context API[cite: 74, 75].

1. [cite_start]**Create Context:** Create `src/context/StudentContext.jsx`[cite: 74].
2. **Setup State:** Move the following states from `App.jsx` into `StudentProvider`:
   - [cite_start]`students` (initialize with `MOCK_DB` for now) [cite: 74]
   - [cite_start]`searchQuery` [cite: 74]
   - [cite_start]`sortOrder` [cite: 74]
   - [cite_start]`favoriteCount` [cite: 74]
3. [cite_start]**Provide Context:** Wrap the `<App />` component inside `main.jsx` with `<StudentProvider>` (place it inside the existing `<ThemeProvider>`)[cite: 74].
4. [cite_start]**Refactor Components:** Update `SearchBar.jsx`, `SortControls.jsx`, and `StudentCard.jsx` to use `useContext(StudentContext)` instead of receiving props from `App.jsx`[cite: 75]. 
5. **Cleanup:** Remove all the prop-drilling from `App.jsx`.

*Stop and wait for user approval.*

---

## TASK 3: AddStudent Form with Validation
[cite_start]**Goal:** Create a new component to add students, with strict form validation[cite: 76, 77].

1. [cite_start]**Create Component:** Create `src/components/AddStudentForm.jsx`[cite: 76].
2. [cite_start]**Form Fields:** Add controlled inputs for Full Name, Student ID, Major, GPA, and Courses (comma-separated text input)[cite: 76].
3. [cite_start]**Validation Logic (On Submit):** - Full Name: Must not be empty[cite: 77].
   - [cite_start]Student ID: Must be unique (check against context) and numeric[cite: 77].
   - [cite_start]GPA: Must be between 0 and 4.0[cite: 77].
   - [cite_start]Major: Required[cite: 77].
4. [cite_start]**Error UI:** Display inline error messages below any invalid field when the user attempts to submit[cite: 78].

*Stop and wait for user approval.*

---

## TASK 4: Form Submission & Success Notification
[cite_start]**Goal:** Handle the valid form submission and show a temporary success toast[cite: 79, 80].

1. [cite_start]**Submit Logic:** If the form from Task 3 is valid, create a new student object and add it to the `students` array inside `StudentContext`[cite: 79]. [cite_start]No page reloads allowed[cite: 79].
2. [cite_start]**Reset:** Clear the form fields upon successful addition[cite: 80].
3. **Notification:** Add a new state variable in `StudentContext` (e.g., `notification`). [cite_start]When a student is added, set a success message[cite: 80]. [cite_start]Use `useEffect` with a `setTimeout` to automatically clear this message after 3 seconds[cite: 80].
4. **Render UI:** Display this notification visually somewhere in `App.jsx` or the `DashboardHeader`.

*Stop and wait for user approval.*

---

## TASK 5: Remove Student & localStorage Persistence
[cite_start]**Goal:** Add delete functionality and save data to the browser's local storage[cite: 81, 82].

1. **Delete Button:** Add a "Remove Student" button (or trash can icon) inside `StudentCard.jsx`.
2. [cite_start]**Delete Logic:** Create a `removeStudent(id)` function in `StudentContext` and attach it to the new button[cite: 81].
3. [cite_start]**Persistence (localStorage):** - Inside `StudentContext`, add a `useEffect` that listens to changes in the `students` array and saves it to `localStorage.setItem('students', JSON.stringify(students))`[cite: 82].
   - [cite_start]Update the initial state of `students` in the context to check `localStorage.getItem('students')` first[cite: 82]. [cite_start]If it's empty, fall back to the `MOCK_DB`[cite: 82].

*End of Lab 03. Celebrate!*