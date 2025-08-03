'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TelehealthRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/care/telehealth');
  }, [router]);
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <p>Redirecting to telehealth services...</p>
    </div>
  );
}