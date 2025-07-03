// app/utils/smoothscroll.js

/**
 * Smoothly scrolls to a target element
 * @param {string} targetId - CSS selector for the target element (e.g., "#section-id")
 * @param {number} offset - Optional offset in pixels (default: 100px for fixed header)
 */
export const smoothScrollTo = (targetId, offset = 100) => {
  const element = document.querySelector(targetId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Sets up smooth scrolling for all anchor links on the page
 * Call this in useEffect after component mounts
 */
export const setupSmoothLinks = () => {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    // Remove existing listeners to prevent duplicates
    link.removeEventListener('click', handleSmoothClick);
    link.addEventListener('click', handleSmoothClick);
  });
};

/**
 * Handle smooth scroll click events
 * @param {Event} e - Click event
 */
const handleSmoothClick = (e) => {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute('href');
  
  if (targetId && targetId !== '#') {
    smoothScrollTo(targetId);
  }
};

/**
 * Scroll to top of page smoothly
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * Check if an element is in viewport
 * @param {HTMLElement} element - Element to check
 * @param {number} threshold - Percentage of element that should be visible (0-1)
 * @returns {boolean}
 */
export const isInViewport = (element, threshold = 0.1) => {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  const elementHeight = rect.bottom - rect.top;
  const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
  
  return visibleHeight >= elementHeight * threshold;
};

/**
 * Debounce function for scroll events
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function}
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};