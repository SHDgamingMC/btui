# 🏫 Event Hub Command Center

This project serves as an all-in-one web platform designed to manage and display all school events, announcements, and key happenings in an organized and engaging manner.

-----

## 🎯 Project Purpose and Objectives

The **Event Hub Command Center** is the central digital destination for the school community. Its primary goal is to provide a seamless user experience for accessing vital information about school life.

  * **Centralized Information**: Provide a single source for all official **Announcements**, **Events**, and the **Calendar**.
  * **Interactive Event Management**: Implement dynamic features like a live **countdown timer** for major events and an integrated **Sign-Up Form**.
  * **Data Organization**: Deliver powerful client-side tools, including **Search**, **Filter**, and **Sort** functionality for announcements and calendar views, to facilitate easy information retrieval.
  * **Engaging Design**: Utilize a modern, high-contrast, **dark/neon-themed aesthetic** to provide a visually striking and engaging user interface.
  * **Performance Tracking**: Display key performance **metrics** with animated counters, which may track scheduling analytics or event statistics.

-----

## ✨ Core Features

The platform provides a suite of tools for event interaction and discovery:

| Feature | Description | File(s) |
| :--- | :--- | :--- |
| **Event Countdown** | A large, live countdown timer tracks the time remaining until a significant upcoming event. | `script.js` |
| **Dynamic Event Details** | Event cards link to a dedicated details page (`event-details.html`), which dynamically loads event-specific information based on a URL query parameter (ID). | `events.html`, `event-details.html` |
| **Registration System** | Users can sign up for events using a dedicated form (`signup.html`) that fetches and displays the event's name from the URL, and confirms registration via a client-side alert. | `signup.html` |
| **Search & Filtering** | Users can search announcements by keyword or filter them by category and sort them by date. The calendar also supports filtering events by category (e.g., Academic, Sports, Admin). | `announcement.html`, `calender.html` |
| **Interactive Calendar** | A full-page calendar displays monthly events, which trigger a **modal pop-up** when clicked to show full details. | `calender.html` |
| **Glitch & Flare Effects** | The main landing page features a **"Glitch"** text effect for the title, and background **"Flare"** animations are generated via JavaScript to enhance the cyber/neon theme. | `index.html`, `script.js` |

-----

## 🛠️ Technologies and Frameworks

This project is built using standard web technologies with a focus on client-side functionality and modern design principles.

| Category | Technology | Technical Detail |
| :--- | :--- | :--- |
| **Structure** | **HTML5** | Defines the nine-page structure including the main hub, five content pages, and two interactive pages (`event-details.html` and `signup.html`). |
| **Styling** | **CSS3** | Implements a **Neon/Cyberpunk-inspired theme** using CSS variables (`--primary-accent: #64ffda;`, `--neon-blue`). Includes extensive media queries for a responsive design across all devices. |
| **Interactivity** | **JavaScript (Vanilla JS)** | Powers all major dynamic elements, including the `Hamburger Menu Toggle`, countdown logic, card filtering/sorting, and data display. |
| **Libraries** | **jQuery** | Used specifically for the smooth scrolling animation on the main page navigation. |


-----

## 📂 Project Structure

The project is organized into a main directory and a dedicated subdirectory for secondary pages:

```
/
├── index.html                  # Main Landing Page (Event Hub)
├── script.js                   # Primary JavaScript logic (Countdown, Counters, Flares)
├── style.css                   # Global styling and Neon Theme
└── /pages/
    ├── announcement.html       # Official school announcements page (Search/Filter/Sort)
    ├── calender.html           # Full-page interactive monthly calendar
    ├── events.html             # List of upcoming events (Includes GenAI SDK)
    ├── event-details.html      # Dynamic page to display specific event information
    └── signup.html             # Event registration form
```

-----

## 🚀 Step-by-Step Instructions to Run or Access the Project

Since this is a client-side web application, no special server environment or build tools are required.

1.  **Clone or Download:**
      * Clone the repository to your local machine or download and unzip the source files.
2.  **Open the Main File:**
      * Navigate to the project directory and locate `index.html`.
3.  **Launch in Browser:**
      * **Double-click** on `index.html`. Your default web browser will open the main page.
4.  **Navigation:**
      * Use the main navigation links (or the responsive hamburger menu) to explore the **Events**, **Announcements**, and **Calendar** pages.
      * Clicking **"View Details"** on any event card will navigate to the dynamic `event-details.html` page.

      