'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EventsRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/events/current');
  }, [router]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #2a5298 0%, #1d3f72 100%)',
      color: '#ffffff',
      fontFamily: 'Arial, sans-serif'
    }}>
      <p>Redirecting to upcoming events...</p>
    </div>
  );
}