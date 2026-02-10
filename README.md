# 🎉 Mozilla Firefox Club - Event Registration Portal

A stunning, modern, and fully responsive event registration portal built with vanilla HTML, CSS, and JavaScript. Features a Firefox-inspired premium UI/UX with glassmorphism effects, cinematic gradients, and an interactive countdown timer.

![Mozilla Firefox Club Portal](https://img.shields.io/badge/Status-Live-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🎨 **Premium Design**
- **Glassmorphism UI** - Modern glass-effect cards with backdrop blur
- **Gradient Animations** - Dynamic gradient orbs and smooth color transitions
- **Micro-interactions** - Hover effects, button animations, and smooth transitions
- **Dark Theme** - Eye-friendly dark color scheme with vibrant accents
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices

### 🚀 **Core Functionality**
- **Multi-step Registration Form** - 3-step form with progress indicator
- **Real-time Validation** - Instant feedback on form inputs
- **Countdown Timer** - Live countdown to event date
- **Animated Statistics** - Auto-counting numbers for engagement metrics
- **Success Modal** - Beautiful confirmation popup with checkmark animation
- **Smooth Scrolling** - Seamless navigation between sections

### 📱 **User Experience**
- **Mobile-First Approach** - Optimized for all screen sizes
- **Accessibility** - WCAG compliant with proper ARIA labels
- **Performance** - Optimized animations and lazy loading
- **SEO Friendly** - Semantic HTML with proper meta tags

## 📋 Project Structure (MCP Architecture)

### **M - Modules**

1. **UI Layout Module**
   - Header Module
   - Navigation Bar Module
   - Footer Module

2. **Event Information Module**
   - Event Details Display
   - Event Schedule & Venue
   - Event Countdown Timer (Dynamic UX Feature)

3. **Registration Module**
   - Registration Form
   - Real-time Input Validation
   - Form Progress Indicator
   - Success / Confirmation Feedback

4. **User Interaction & Feedback Module**
   - Validation Messages
   - Success Popup / Message
   - Error Handling Feedback

5. **Contact & Support Module**
   - Contact Information Section
   - Social Media / Email Links

### **C - Components**

#### Layout Components
- Header (Club logo + title)
- Navigation Menu (Event | Register | Contact)
- Footer (Copyright + links)

#### Event Components
- Event Card (Name, date, description)
- Countdown Timer Component
- Event Banner / Highlight Section

#### Form Components
- Text Input Fields (Name, Email, Roll No.)
- Dropdowns (Department / Year)
- Submit Button
- Progress Bar / Step Indicator

#### Feedback Components
- Inline Validation Messages
- Success Alert / Modal Popup
- Error Alert Messages

#### Contact Components
- Contact Card
- Email & Phone Display
- Social Media Icons

### **P - Pages / Sections**

1. **Home / Landing Section**
   - Club branding
   - Event highlights
   - Call-to-Action: "Register Now"

2. **Event Details Section**
   - Event description
   - Date, time, venue
   - Countdown timer

3. **Registration Section**
   - Interactive registration form
   - Real-time validation
   - Progress indicator
   - Submit confirmation message

4. **Contact Section**
   - Club contact details
   - Support information

5. **Footer Section**
   - Copyright
   - Quick links

## 🛠️ Technologies Used

- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript (ES6+)** - Vanilla JS for all interactive functionality
- **Google Fonts** - Inter & Outfit font families

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended)

### Installation

1. **Clone or download the project**
   ```bash
   cd "c:/Clubs AND Chapters/MFC"
   ```

2. **Open the project**
   - Simply open `index.html` in your browser, or
   - Use a local server for better performance:

   **Using Python:**
   ```bash
   python -m http.server 8000
   ```
   Then visit: `http://localhost:8000`

   **Using Node.js (http-server):**
   ```bash
   npx http-server -p 8000
   ```

   **Using VS Code Live Server:**
   - Install the "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

## 📁 File Structure

```
MFC/
│
├── index.html          # Main HTML file
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

## 🎯 Key Features Implementation

### 1. **Countdown Timer**
```javascript
// Automatically counts down to event date
// Updates every second
// Displays: Days, Hours, Minutes, Seconds
```

### 2. **Multi-Step Form**
```javascript
// Step 1: Personal Information (Name, Email, Phone)
// Step 2: Academic Details (Roll No, Department, Year)
// Step 3: Review & Confirmation
```

### 3. **Real-Time Validation**
- Email format validation
- Phone number validation
- Name validation (letters only)
- Required field checks
- Visual feedback (success/error states)

### 4. **Responsive Design**
- Desktop: Full layout with all features
- Tablet: Optimized grid layouts
- Mobile: Hamburger menu, stacked layouts

## 🎨 Design System

### Color Palette
```css
Primary: #FF7139 → #FF9400 (Firefox Orange)
Secondary: #5F2E83 → #20123A (Firefox Purple)
Accent: #0060DF → #00BFFF (Firefox Blue)
Success: #0BB34A → #26D07C (Green)
Error: #D70022
Background: #0C0C0D (Cosmic Black)
```

### Typography
- **Display Font**: Outfit (Headings)
- **Body Font**: Inter (Content)

### Spacing Scale
- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 3rem (48px)
- 2xl: 4rem (64px)
- 3xl: 6rem (96px)

## 🔧 Customization

### Change Event Date
Edit the event date in `script.js`:
```javascript
eventDate: new Date('2026-03-15T10:00:00')
```

### Update Club Information
Modify the header section in `index.html`:
```html
<h1>Mozilla Firefox Club</h1>
<p class="tagline">Mozilla Community Hub</p>
```

### Customize Colors
Update CSS variables in `styles.css`:
```css
:root {
    --primary-color: #FF7139;
    --secondary-color: #5F2E83;
    /* ... */
}
```

### Add/Remove Form Fields
Edit the form structure in `index.html` and update validation rules in `script.js`:
```javascript
const validationRules = {
    fieldName: {
        required: true,
        pattern: /regex/,
        message: 'Error message'
    }
}
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- **Optimized animations** using CSS transforms and opacity
- **Intersection Observer** for lazy loading and scroll animations
- **Debounced scroll handlers** for smooth performance
- **Minimal dependencies** - Pure vanilla JavaScript
- **Efficient DOM manipulation** - Cached selectors

## 🔒 Security & Validation

- Client-side validation for all form fields
- XSS protection through proper input sanitization
- HTTPS recommended for production deployment
- No sensitive data stored in localStorage

## 🎓 Form Validation Rules

| Field | Rules |
|-------|-------|
| Full Name | Required, Min 3 chars, Letters only |
| Email | Required, Valid email format |
| Phone | Required, Min 10 digits |
| Roll Number | Required, Min 3 chars |
| Department | Required, Must select |
| Year | Required, Must select |
| Terms | Required, Must accept |

## 🌟 Future Enhancements

- [ ] Backend integration (Node.js/Express)
- [ ] Database storage (MongoDB/PostgreSQL)
- [ ] Email confirmation system
- [ ] Payment gateway integration
- [ ] QR code generation for tickets
- [ ] Admin dashboard for registrations
- [ ] Export registrations to CSV/Excel
- [ ] Multi-language support

## 🤝 Contributing

This is a college club project. For suggestions or improvements:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is created for educational purposes as part of the Firefox Student Ambassadors activities.

## 👥 Credits

**Developed by:** Mozilla Firefox Club Team  
**Design Inspiration:** Mozilla Firefox Brand Identity, Glassmorphism  
**Fonts:** Google Fonts (Inter, Outfit)  
**Icons:** Custom SVG icons

## 📞 Support

For questions or support:
- **Email:** contact@mfc.club
- **Phone:** +91 98765 43210
- **Location:** Main Campus, Building A, Room 301

## 🎉 Acknowledgments

Special thanks to:
- All MFC team members
- Event organizers
- Participants and supporters

---

<div align="center">

**Made with ❤️ for the Open Web**

[Report Bug](mailto:contact@firefox.club) · [Request Feature](mailto:contact@firefox.club)

</div>
