import React from 'react';
import { Link } from 'react-router';

const WelcomeScreen = () => {
    return (
        <div className="flex items-end justify-center h-screen bg-[#F7F8F9] pb-10">
            <div className="w-full max-w-[320px] px-4">
                <h1
                    className="text-[24px] leading-[32px] font-bold text-[#1A1A1A] m-0">
                    Welcome to PopX
                </h1>
                <p className="mt-2 mb-6 text-[14px] leading-[20px] text-[#7F7F7F]">
                    Lorem ipsum dolor sit amet,
                    <br />
                    consectetur adipiscing elit.
                </p>

                <Link
                    to="signup"
                    className="w-full h-12 bg-[#6d25fe] rounded-lg flex items-center justify-center text-[16px] leading-[20px] font-semibold text-white focus:outline-none "
                >
                    Create Account
                </Link>

                <Link
                    to='login'
                    className="w-full h-12 mt-3 bg-[#cfbbfb] rounded-lg flex items-center justify-center text-[16px] leading-[20px] font-semibold text-[#1A1A1A] focus:outline-none">
                    Already Registered? Login
                </Link>
            </div>
        </div>
    );
};

export default WelcomeScreen;
