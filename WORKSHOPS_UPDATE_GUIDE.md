# Workshops Page - Update Guide

## Overview

The workshops page (`workshops.html`) has been created with a modern, card-based UI designed to showcase your future workshop details. The page is fully responsive and integrates seamlessly with your existing website design.

## How to Add/Update Workshop Details

### Workshop Card Structure

Each workshop card contains the following information:

1. **Badge Status** - Shows if workshop is "Coming Soon", "Available", or other status
2. **Workshop Title** - Main heading for the workshop
3. **Workshop Subtitle** - Brief tagline
4. **Description** - Detailed description of what the workshop covers
5. **Details Section**:
   - Date (with calendar icon)
   - Location (with map marker icon)
   - Duration (with clock icon)
6. **Action Button** - "Notify Me", "Register Now", or custom link

### Example: Adding a New Workshop

```html
<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
  <div class="workshop-card">
    <div class="workshop-header">
      <!-- Change badge class: coming-soon (red) or available (green) -->
      <span class="workshop-badge available">Open for Registration</span>

      <!-- Workshop Title -->
      <h3 class="workshop-title">Your Workshop Title Here</h3>

      <!-- Workshop Subtitle -->
      <p class="workshop-subtitle">Catchy subtitle or tagline</p>
    </div>

    <div class="workshop-body">
      <!-- Workshop Description -->
      <p class="workshop-description">
        Detailed description of what participants will learn, who should attend,
        and the value they'll receive.
      </p>

      <!-- Workshop Details -->
      <div class="workshop-details">
        <!-- Date -->
        <div class="detail-item">
          <div class="detail-icon">
            <i class="fa fa-calendar"></i>
          </div>
          <div class="detail-content">
            <span class="detail-label">Date</span>
            <span class="detail-value">March 15-16, 2026</span>
          </div>
        </div>

        <!-- Location -->
        <div class="detail-item">
          <div class="detail-icon">
            <i class="fa fa-map-marker"></i>
          </div>
          <div class="detail-content">
            <span class="detail-label">Location</span>
            <span class="detail-value">New Delhi, India</span>
          </div>
        </div>

        <!-- Duration -->
        <div class="detail-item">
          <div class="detail-icon">
            <i class="fa fa-clock-o"></i>
          </div>
          <div class="detail-content">
            <span class="detail-label">Duration</span>
            <span class="detail-value">2 Days Intensive</span>
          </div>
        </div>
      </div>
    </div>

    <div class="workshop-footer">
      <!-- For active registration - use this button -->
      <a
        href="YOUR_REGISTRATION_LINK_HERE"
        class="workshop-btn workshop-btn-primary"
      >
        <i class="fa fa-check-circle me-2"></i>Register Now
      </a>

      <!-- For coming soon - use this button (disabled) -->
      <!-- <button class="workshop-btn workshop-btn-secondary" disabled>
                <i class="fa fa-bell me-2"></i>Notify Me
            </button> -->
    </div>
  </div>
</div>
```

## Badge Types

### Coming Soon (Red)

```html
<span class="workshop-badge coming-soon">Coming Soon</span>
```

### Available (Green)

```html
<span class="workshop-badge available">Open for Registration</span>
```

### Custom Badge (Blue - default)

```html
<span class="workshop-badge">Limited Seats</span>
```

## Button Types

### Primary Button (for active registration)

```html
<a href="REGISTRATION_LINK" class="workshop-btn workshop-btn-primary">
  <i class="fa fa-check-circle me-2"></i>Register Now
</a>
```

### Secondary Button (for coming soon)

```html
<button class="workshop-btn workshop-btn-secondary" disabled>
  <i class="fa fa-bell me-2"></i>Notify Me
</button>
```

### Custom Link Button

```html
<a href="DETAILS_PAGE_LINK" class="workshop-btn workshop-btn-primary">
  <i class="fa fa-info-circle me-2"></i>Learn More
</a>
```

## Adding More Details

You can add additional detail items by copying this structure:

```html
<div class="detail-item">
  <div class="detail-icon">
    <i class="fa fa-ICON_NAME"></i>
  </div>
  <div class="detail-content">
    <span class="detail-label">Label</span>
    <span class="detail-value">Value</span>
  </div>
</div>
```

### Common Icons

- `fa-calendar` - Date
- `fa-map-marker` - Location
- `fa-clock-o` - Duration
- `fa-users` - Participants
- `fa-money` - Price
- `fa-language` - Language
- `fa-certificate` - Certification

## Tips for Best Results

1. **Keep descriptions concise** - 2-3 sentences work best
2. **Use clear dates** - "March 15-16, 2026" instead of "Next Month"
3. **Specify location clearly** - Include city and whether it's virtual/in-person
4. **Update badges** - Change from "coming-soon" to "available" when registration opens
5. **Add registration links** - Replace disabled buttons with active links when ready
6. **Maintain consistency** - Use similar formatting across all workshop cards

## Navigation

The workshop page is automatically linked in your navigation menu under "WORKSHOP". Users can access it from any page on your site.

## Responsive Design

The page is fully responsive:

- **Desktop**: 3 cards per row
- **Tablet**: 2 cards per row
- **Mobile**: 1 card per row (stacked)

All cards automatically adjust to maintain visual consistency across devices.
