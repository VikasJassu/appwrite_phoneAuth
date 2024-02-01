// pages/send-otp.tsx
'use client'
// SendOTP.tsx
import { useState } from 'react';
import { handleSendOTP } from '@/appwrite/conf';
import { ID } from 'appwrite';

const SendOTP = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  return (
    <div>
      <h1>Send OTP</h1>
      <div>
        <label>
          Phone Number:
          <input className='text-black' type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>
      </div>
      <div>
        <button onClick={() => handleSendOTP(phoneNumber)} disabled={loading}>
          {loading ? 'Sending OTP...' : 'Send OTP'}
        </button>
      </div>
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default SendOTP;
