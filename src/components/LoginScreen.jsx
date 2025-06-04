import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const LoginScreen = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isFormValid = email.trim() !== '' && password.trim() !== '';

    return (
        <div className="h-screen w-full bg-[#F7F8F9] flex justify-center items-start">
            <div className="w-full max-w-[320px] px-4 pt-10">
                <h1 className="text-[24px] leading-[32px] font-bold text-[#1A1A1A]">
                    Signin to your PopX account
                </h1>

                <p className="mt-2 mb-6 text-[14px] leading-[20px] text-[#7F7F7F]">
                    Lorem ipsum dolor sit amet,
                    <br />
                    consectetur adipiscing elit.
                </p>

                <div className="relative mb-6">
                    <label
                        htmlFor="email"
                        className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-[14px] leading-[20px] font-semibold text-[#6d25fe]">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email address"
                        className="
              w-full h-10
              px-3 pt-3 pb-2
              border border-[#E5E5E5] rounded-lg
              text-[14px] leading-[20px]
              placeholder:text-[#C4C4C4]
              focus:outline-none focus:border-[#6d25fe]
            "
                    />
                </div>

                <div className="relative">
                    <label
                        htmlFor="password"
                        className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-[14px] leading-[20px] font-semibold text-[#6d25fe]">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        className="
              w-full h-10
              px-3 pt-3 pb-2
              border border-[#E5E5E5] rounded-lg
              text-[14px] leading-[20px]
              placeholder:text-[#C4C4C4]
              focus:outline-none focus:border-[#6d25fe]
            "
                    />
                </div>

                <button
                    onClick={() => { navigate('/account') }}
                    disabled={!isFormValid}
                    className={`
            w-full h-12 mt-6 rounded-lg text-[16px] leading-[20px] font-semibold text-white 
            ${isFormValid ? 'bg-[#6d25fe]' : 'bg-[#C4C4C4]'}
            focus:outline-none
          `}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default LoginScreen;
