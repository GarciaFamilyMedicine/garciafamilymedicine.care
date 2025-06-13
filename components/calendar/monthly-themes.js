// monthly-themes.js
// Monthly observances and themes for calendar headers

export const monthlyThemes = {
  0: { // January
    theme: "National Blood Donor Month",
    subtitle: "New Year, New Health Goals",
    color: "#dc2626", // Red for blood donation
    icon: "🩸"
  },
  1: { // February
    theme: "American Heart Month",
    subtitle: "Show Your Heart Some Love",
    color: "#dc2626", // Red for heart health
    icon: "❤️"
  },
  2: { // March
    theme: "National Nutrition Month",
    subtitle: "Fuel Your Body Right",
    color: "#16a34a", // Green for nutrition
    icon: "🥗"
  },
  3: { // April
    theme: "National Stress Awareness Month",
    subtitle: "Find Your Balance",
    color: "#0ea5e9", // Blue for calm/stress relief
    icon: "🧘"
  },
  4: { // May
    theme: "Mental Health Awareness Month",
    subtitle: "Your Mind Matters",
    color: "#16a34a", // Green for mental health awareness
    icon: "🧠"
  },
  5: { // June
    theme: "Pride Month & Men's Health Month",
    subtitle: "Celebrating Health & Equality",
    color: "#a855f7", // Purple for pride
    icon: "🏳️‍🌈"
  },
  6: { // July
    theme: "UV Safety Awareness Month",
    subtitle: "Stay Safe in the Sun",
    color: "#f59e0b", // Orange/yellow for sun safety
    icon: "☀️"
  },
  7: { // August
    theme: "National Immunization Awareness Month",
    subtitle: "Prevention is Protection",
    color: "#0ea5e9", // Blue for medical/vaccines
    icon: "💉"
  },
  8: { // September
    theme: "Healthy Aging Month",
    subtitle: "Age with Grace & Health",
    color: "#7c3aed", // Purple for wisdom/aging
    icon: "🌱"
  },
  9: { // October
    theme: "Breast Cancer Awareness Month",
    subtitle: "Early Detection Saves Lives",
    color: "#ec4899", // Pink for breast cancer awareness
    icon: "🎀"
  },
  10: { // November
    theme: "Diabetes Awareness Month",
    subtitle: "Take Charge of Your Health",
    color: "#2563eb", // Blue for diabetes awareness
    icon: "💙"
  },
  11: { // December
    theme: "National Impaired Driving Prevention Month",
    subtitle: "Safe Holidays for Everyone",
    color: "#16a34a", // Green for safety
    icon: "🎄"
  }
};

// Function to get current month's theme
export const getCurrentMonthTheme = () => {
  const currentMonth = new Date().getMonth();
  return monthlyThemes[currentMonth];
};

// Function to get theme for specific month
export const getMonthTheme = (monthIndex) => {
  return monthlyThemes[monthIndex] || monthlyThemes[0];
};