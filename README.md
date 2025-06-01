Responsive Interactive Navigation Menu

A responsive, fixed-position navigation bar built with HTML, CSS, and JavaScript that adapts to mobile and desktop views. It includes scroll-based color changes, smooth section scrolling, a mobile hamburger menu, and a dark/light mode toggle.

Features

-	Fixed Navigation Bar (visible on all pages)
-	Responsive Design (hamburger menu for small screens)
-	Scroll-Based Background Color Change
-	Hover Effects on Menu Items
-	Smooth Scrolling to Sections
-	Dark/Light Mode Toggle
-	Mobile-first with animation on menu open


File Structure

responsive-navbar/
index.html	# Main HTML file
style.css		# All styling: light/dark mode, responsiveness, animations script.js	# JS for interactivity (scroll, toggle, mobile menu)



Preview
![image](https://github.com/user-attachments/assets/efde1d0e-f981-4ede-b6ef-40954b1a081a)
![image](https://github.com/user-attachments/assets/d1d453b7-9050-4fdc-93bf-fb14a0a36422)
![image](https://github.com/user-attachments/assets/43af6a2b-248d-442c-999b-90c4f254a867)


How to Use

Clone or download this repository:


git clone https://github.com/SimranGur9335/PRODIGY_WD_01.git



Open index.html in your browser.

Scroll the page or click menu items to see interactivity in action.


Dark/Light Mode

-	Click the toggle button to switch between dark and light themes.


-	Theme switch is applied via CSS variables (:root and .dark-mode class).


 
Customization

-	Add more sections: Add <div class="content" id="your-id">...</div> in index.html

-	Change color scheme: Modify :root and .dark-mode values in style.css

-	Enhance UX: Store dark mode preference in localStorage via JavaScript



Future Improvements (Optional)

-	Save dark/light mode preference using localStorage
-	Add ScrollSpy (highlight menu item for current section)
-	Add accessibility improvements (ARIA roles, keyboard navigation)
-	Integrate with frameworks like React or Vue


License

This project is open-source and available under the MIT License.
