// VerifyOTP.tsx
'use client'
import { useState } from 'react';
import { handleVerifyOTP } from '@/appwrite/conf';

const VerifyOTP = () => {
  const [otp, setOTP] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  return (
    <div>
      <h1>Verify OTP</h1>
      <div>
        <label>
          OTP:
          <input className='text-black' type="text" value={otp} onChange={(e) => setOTP(e.target.value)} />
        </label>
      </div>
      <div>
        <button onClick={() => handleVerifyOTP(otp)} disabled={loading}>
          {loading ? 'Verifying OTP...' : 'Verify OTP'}
        </button>
      </div>
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default VerifyOTP;
