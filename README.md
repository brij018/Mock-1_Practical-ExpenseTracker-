# 💰 Expense Tracker

A simple and user-friendly **Expense Tracker** web application designed to help users record, manage, search, filter, and monitor their daily expenses.

The project was developed as part of a practical assignment and demonstrates the use of **HTML, CSS, and JavaScript** to build an interactive expense management application.

---
# Video Explaination:

   https://drive.google.com/file/d/1-0BCWhzqE8jEJVDPWNc7VQoRjVsXrcU0/view?usp=sharing
   
---

## 📌 Project Overview

The **Expense Tracker** allows users to maintain a list of their expenses in an organized way. Users can add expenses with relevant details such as title, amount, type, and category, and can then search and filter the expense records.

The project focuses on implementing fundamental frontend development concepts such as:

- DOM manipulation
- JavaScript event handling
- Form handling
- Array methods
- Dynamic UI updates
- Searching and filtering
- Data management using JavaScript

---

## ✨ Features

### 🧾 Expense Management
- Add new expenses
- Store expense details
- Display expenses dynamically
- Delete/manage expense records

### 🔍 Search
- Search expenses by title
- Search results update according to the entered query

### 🏷️ Filtering
Expenses can be filtered based on:

- Expense Type
- Expense Category
- All expenses

### 📊 Expense Information
Each expense can contain information such as:

- Title
- Amount
- Type
- Category

### 🎨 User Interface
- Clean and simple interface
- Responsive layout
- Easy-to-use expense management controls
- Dynamic rendering of expense records

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Application structure |
| CSS3 | Styling and layout |
| JavaScript | Application logic and interactivity |

---

## 📂 Project Structure

```text
Mock-1_Practical-ExpenseTracker-
│
├── index.html
├── style.css
├── script.js
└── README.md
```

> The exact file structure may vary depending on the current version of the project.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/brij018/Mock-1_Practical-ExpenseTracker-.git
```

### 2. Navigate to the Project Directory

```bash
cd Mock-1_Practical-ExpenseTracker-
```

### 3. Run the Project

Open `index.html` directly in your browser.

You can also use **Live Server** in Visual Studio Code for easier development.

---

## 💻 How It Works

### 1. Add an Expense

The user enters the required expense information through the provided form.

Example:

```text
Title: Grocery Shopping
Amount: ₹1500
Type: Expense
Category: Food
```

After submitting the form, the expense is dynamically added to the expense list.

### 2. View Expenses

All added expenses are displayed in the application interface, allowing the user to keep track of their records.

### 3. Search Expenses

The search functionality allows users to find expenses based on their title.

For example:

```text
Search: grocery
```

The application displays matching expense records.

### 4. Filter Expenses

Expenses can be filtered using available filter options such as:

```text
Type
Category
```

Users can also select `All` to display the complete expense list.

---

## 🧠 JavaScript Concepts Demonstrated

This project demonstrates several important JavaScript concepts:

### DOM Manipulation

JavaScript is used to dynamically create and update elements on the webpage.

### Event Handling

User actions such as:

- Form submission
- Button clicks
- Search input
- Filter changes

are handled using JavaScript event listeners.

### Array Methods

The project uses JavaScript array methods to process expense data.

Examples include:

```javascript
.filter()
.map()
.forEach()
```

These methods are used to search, filter, and render expense records.

### Conditional Filtering

Multiple filters can be applied to the expense list based on the user's selected options.

For example:

```javascript
expenseQuery.type === "all"
  ? true
  : expense.type === expenseQuery.type;
```

---

## 🔎 Example Filtering Logic

The application can combine multiple conditions to filter expenses.

```javascript
const filteredExpenses = expenseList
  .filter((expense) =>
    expense.title.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .filter((expense) =>
    expenseQuery.type === "all"
      ? true
      : expense.type === expenseQuery.type
  )
  .filter((expense) =>
    expenseQuery.category === "all"
      ? true
      : expense.category === expenseQuery.category
  );
```

This allows the user to combine:

- Search
- Type filtering
- Category filtering

to find specific expenses.

---

## 📸 Screenshots

<img width="1917" height="917" alt="image" src="https://github.com/user-attachments/assets/71be7e8b-818d-4908-add1-2e56b5121ea1" />

## 🎯 Learning Objectives

This project was created to practice and demonstrate:

- Frontend web development
- JavaScript fundamentals
- DOM manipulation
- Form handling
- Event listeners
- Array manipulation
- Search functionality
- Filtering functionality
- Dynamic HTML rendering
- Basic UI/UX implementation

---

## 🔮 Future Improvements

The project can be extended with additional functionality such as:

- 💾 LocalStorage/database persistence
- 📊 Expense charts and analytics
- 💰 Total income and expense calculation
- 📅 Date-based expense filtering
- 📈 Monthly and yearly reports
- ✏️ Edit existing expenses
- 🗑️ Improved delete functionality
- 🌙 Dark mode
- 📱 Improved mobile responsiveness
- 🔐 User authentication
- ☁️ Backend and database integration

---

## 📚 Project Purpose

This project was developed as a practical exercise to strengthen JavaScript and frontend development skills by creating a real-world application for managing personal expenses.

---

## 👨‍💻 Author

Developed as a frontend JavaScript practical project.

---

## 📄 License

This project is created for educational and learning purposes.
