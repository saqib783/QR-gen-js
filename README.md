# QR-gen-js

# QR Code Generator

A simple and clean **QR Code Generator** built using **HTML, CSS, and JavaScript**. This project allows users to enter any text or URL and instantly generate a QR code using an online QR API.

---

## 🚀 Features

* Generate QR codes for **any text or URL**
* Clean & modern dark UI
* Instant QR generation on button click
* Input validation (prevents empty input)
* Lightweight and beginner‑friendly project

---

## 🛠️ Technologies Used

* **HTML5** – Structure
* **CSS3** – Styling & layout
* **JavaScript (DOM)** – Logic & interactivity
* **QR API** – `api.qrserver.com`

---

## 📂 Project Structure

```
QR-Code-Generator/
│
├── index.html      # Main HTML file
├── style.css       # Styling file
├── script.js       # JavaScript logic
└── README.md       # Project documentation
```

---

## ⚙️ How It Works

1. User enters text or a URL in the input field.
2. Clicks the **Generate QR** button.
3. JavaScript checks if input is empty.
4. If valid, a QR image URL is created using the QR API.
5. The QR image is displayed inside the QR box.

---

## 🧠 JavaScript Logic (Summary)

* `getElementById()` → to access input & button
* `addEventListener()` → to detect button click
* `createElement('img')` → to generate QR image dynamically
* `appendChild()` → to display the QR code

---

## 📸 Preview

> The QR code appears in the dark container once generated.

---

## 🔒 API Used

```
https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=YOUR_TEXT
```

---

## 🧪 How to Run Locally

1. Download or clone the repository
2. Open `index.html` in your browser
3. Enter text and generate QR

*No server or installation required.*

---

## 🎯 Learning Outcomes

* DOM manipulation
* Handling user input
* Working with external APIs
* Dynamic image creation
* UI/UX basics

---

## 📌 Future Improvements

* Download QR button
* Size & color customization
* Auto-generate on Enter key
* History of generated QRs

---

## 👨‍💻 Author

Created by **Saqib Rashid**
Beginner‑friendly JavaScript project for practice.

---

⭐ If you like this project, give it a star and keep coding!
