#  Password Generator

A modern and responsive **Password Generator** built with **React** and **Tailwind CSS**. It allows users to generate secure random passwords with customizable options such as password length, numbers, and special characters.

---

##  Features

* Generate strong random passwords
* Adjustable password length (6–30 characters)
* Option to include numbers
* Option to include special characters
* One-click copy to clipboard
* Responsive and clean UI
* Built using React Hooks

---

##  Technologies Used

* React.js
* Tailwind CSS
* JavaScript 
* HTML
* CSS

---

##  React Hooks Used

### `useState`

Used to manage:

* Password
* Password length
* Include numbers option
* Include special characters option

### `useCallback`

Optimizes function creation by memoizing:

* `passwordGenerator`
* `copyPasswordToClipboard`

### `useEffect`

Automatically generates a new password whenever the selected options change.

### `useRef`

References the password input field to:

* Select the generated password
* Copy it to the clipboard

---

## 📂 Project Structure

```text
src/
│── App.jsx
│── App.css
│── main.jsx
```

---

##  Installation

Clone the repository:

```bash
git clone https://github.com/Rikeshhsinha/password-generator.git
```

Go to the project folder:

```bash
cd password-generator
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

##  Preview

* Generate secure passwords instantly.
* Customize password length.
* Enable numbers and special characters.
* Copy passwords with a single click.

---

##  Author

**Rikesh Sinha**

* GitHub: https://github.com/Rikeshhsinha
* LinkedIn: https://www.linkedin.com/in/rikeshhsinha

---

##  Support

If you found this project helpful, consider giving it a **⭐ Star** on GitHub. It helps others discover the project and motivates future improvements.



