'use client';

import { useState, useEffect } from 'react';
import styles from './BookingWidget.module.css';
import { trackAppointmentBooking, trackFormInteraction } from '../analytics/GoogleAnalytics';

const BOOKING_TYPES = {
  'nourish-thrive-journey': {
    name: 'Nourish & Thrive Consultation',
    duration: '60 minutes',
    description: 'Initial consultation for weight management program',
    bookingUrl: 'https://outlook.office.com/book/GarciaFamilyMedicine@garciafamilymedicine.care/s/NourishThriveConsultation'
  },
  'corelift': {
    name: 'CoreLift Assessment',
    duration: '45 minutes', 
    description: 'Pelvic health evaluation and CoreLift consultation',
    bookingUrl: 'https://outlook.office.com/book/GarciaFamilyMedicine@garciafamilymedicine.care/s/JXViZb_ifkCITve3oXJP-Q2?ismsaljsauthenabled'
  },
  'valorview-ime': {
    name: 'ValorView IME Scheduling',
    duration: '2-3 hours',
    description: 'Independent Medical Examination appointment',
    bookingUrl: 'tel:816-427-5320' // IMEs typically require phone scheduling
  },
  'general': {
    name: 'General Consultation',
    duration: '30 minutes',
    description: 'Initial consultation and health assessment',
    bookingUrl: 'https://outlook.office.com/book/GarciaFamilyMedicine@garciafamilymedicine.care/s/GeneralConsultation'
  }
};

export default function BookingWidget({ 
  serviceType = 'general', 
  variant = 'full', // 'full', 'compact', 'button-only'
  className = '',
  showAvailability = true,
  showServiceDetails = true 
}) {
  const [selectedService, setSelectedService] = useState(serviceType);
  const [isLoading, setIsLoading] = useState(false);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const currentService = BOOKING_TYPES[selectedService] || BOOKING_TYPES.general;

  // Simulate available time slots (replace with real calendar integration)
  useEffect(() => {
    if (showAvailability) {
      setAvailableSlots(generateAvailableSlots());
    }
  }, [selectedService, showAvailability]);

  const generateAvailableSlots = () => {
    const slots = [];
    const today = new Date();
    
    // Generate next 7 days of available slots
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends for most services
      if (date.getDay() === 0 || date.getDay() === 6) continue;
      
      // Generate time slots for each day
      const daySlots = [
        '9:00 AM', '10:00 AM', '11:00 AM', 
        '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
      ].map(time => ({
        date: date.toISOString().split('T')[0],
        time: time,
        datetime: `${date.toDateString()} at ${time}`,
        available: Math.random() > 0.3 // Simulate availability
      }));
      
      slots.push(...daySlots.filter(slot => slot.available));
    }
    
    return slots.slice(0, 12); // Show first 12 available slots
  };

  const handleBookingClick = () => {
    const service = BOOKING_TYPES[selectedService];
    
    // Track the booking attempt
    trackAppointmentBooking(selectedService, 'booking_initiated');
    trackFormInteraction('booking_widget', 'booking_click', selectedService);
    
    if (service.bookingUrl.startsWith('tel:')) {
      // For phone bookings (like IME)
      window.location.href = service.bookingUrl;
    } else if (service.bookingUrl.startsWith('http')) {
      // For online booking systems
      window.open(service.bookingUrl, '_blank', 'noopener,noreferrer');
    } else {
      // Show internal booking form
      setShowBookingForm(true);
    }
  };

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
    trackFormInteraction('booking_widget', 'slot_selected', slot.datetime);
  };

  const handleServiceChange = (newService) => {
    setSelectedService(newService);
    setSelectedSlot(null);
    trackFormInteraction('booking_widget', 'service_changed', newService);
  };

  if (variant === 'button-only') {
    return (
      <button 
        onClick={handleBookingClick}
        className={`${styles.bookingButton} ${className}`}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : `Book ${currentService.name}`}
      </button>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`${styles.compactBooking} ${className}`}>
        <div className={styles.compactHeader}>
          <h3>{currentService.name}</h3>
          <span className={styles.duration}>{currentService.duration}</span>
        </div>
        <button 
          onClick={handleBookingClick}
          className={styles.compactButton}
          disabled={isLoading}
        >
          Schedule Now
        </button>
      </div>
    );
  }

  return (
    <div className={`${styles.bookingWidget} ${className}`}>
      <div className={styles.bookingHeader}>
        <h2>Schedule Your Appointment</h2>
        <p>Choose your service and preferred time</p>
      </div>

      {/* Service Selection */}
      <div className={styles.serviceSelection}>
        <label htmlFor="serviceSelect">Select Service:</label>
        <select 
          id="serviceSelect"
          value={selectedService}
          onChange={(e) => handleServiceChange(e.target.value)}
          className={styles.serviceSelect}
        >
          {Object.entries(BOOKING_TYPES).map(([key, service]) => (
            <option key={key} value={key}>
              {service.name} ({service.duration})
            </option>
          ))}
        </select>
      </div>

      {/* Service Details */}
      {showServiceDetails && (
        <div className={styles.serviceDetails}>
          <h3>{currentService.name}</h3>
          <div className={styles.serviceInfo}>
            <span className={styles.duration}>Duration: {currentService.duration}</span>
            <p className={styles.description}>{currentService.description}</p>
          </div>
        </div>
      )}

      {/* Available Time Slots */}
      {showAvailability && selectedService !== 'valorview-ime' && (
        <div className={styles.availabilitySection}>
          <h4>Available Times</h4>
          <div className={styles.slotsGrid}>
            {availableSlots.map((slot, index) => (
              <button
                key={index}
                onClick={() => handleSlotSelection(slot)}
                className={`${styles.slotButton} ${
                  selectedSlot?.datetime === slot.datetime ? styles.selected : ''
                }`}
              >
                <div className={styles.slotDate}>
                  {new Date(slot.date).toLocaleDateString('en-US', { 
                    weekday: 'short', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </div>
                <div className={styles.slotTime}>{slot.time}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Special handling for IME */}
      {selectedService === 'valorview-ime' && (
        <div className={styles.imeNotice}>
          <h4>IME Scheduling</h4>
          <p>
            Independent Medical Examinations require special scheduling coordination. 
            Please call us directly to arrange your appointment.
          </p>
          <div className={styles.imeContacts}>
            <a href="tel:816-427-5320" className={styles.phoneLink}>
              📞 (816) 427-5320
            </a>
            <a href="mailto:ime@garciafamilymedicine.care" className={styles.emailLink}>
              ✉️ ime@garciafamilymedicine.care
            </a>
          </div>
        </div>
      )}

      {/* Booking Action */}
      <div className={styles.bookingActions}>
        {selectedService === 'valorview-ime' ? (
          <button 
            onClick={handleBookingClick}
            className={styles.primaryButton}
          >
            Call to Schedule IME
          </button>
        ) : (
          <>
            <button 
              onClick={handleBookingClick}
              className={styles.primaryButton}
              disabled={isLoading || (!selectedSlot && showAvailability)}
            >
              {isLoading ? 'Processing...' : 'Book Appointment'}
            </button>
            <button 
              onClick={() => window.location.href = 'tel:816-427-5320'}
              className={styles.secondaryButton}
            >
              Or Call: (816) 427-5320
            </button>
          </>
        )}
      </div>

      {/* Additional Information */}
      <div className={styles.bookingInfo}>
        <h4>What to Expect</h4>
        <ul>
          <li>Confirmation email within 2 hours</li>
          <li>Reminder calls 24 hours before</li>
          <li>Bring insurance cards and ID</li>
          <li>Arrive 15 minutes early for paperwork</li>
        </ul>
        
        <div className={styles.policies}>
          <p className={styles.cancellation}>
            <strong>Cancellation Policy:</strong> Please provide 24-hour notice for cancellations.
          </p>
          <p className={styles.hipaa}>
            🔒 HIPAA Compliant - Your information is secure and confidential.
          </p>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className={styles.emergencyContact}>
        <p>
          <strong>Need immediate assistance?</strong><br/>
          Call (816) 427-5320 or visit your nearest emergency room.
        </p>
      </div>
    </div>
  );
}