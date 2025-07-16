'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function VeteranServicesRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the correct veterans page
    router.replace('/care/veterans');
  }, [router]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'sans-serif' 
    }}>
      <p>Redirecting to Veterans Healthcare...</p>
    </div>
  );
}