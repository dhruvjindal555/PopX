import React from 'react';

const AccountSettings = () => {
  return (
    <div className="flex justify-center items-start h-screen bg-[#F7F8F9] py-8">
      <div className="w-full h-full max-w-[320px] bg-gray-100">
        <h1 className="text-[20px] leading-[28px] p-4 bg-white font-semibold text-[#1A1A1A] border-b border-gray-400">
          Account Settings
        </h1>

        <div className="mt-6 flex items-center px-4">
          <div className="relative">
            <img
              src="profile.png"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#6d25fe] rounded-full flex items-center justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="8" y="14" width="32" height="20" rx="4" fill="#FFFFFF" />
                <rect x="16" y="10" width="16" height="8" rx="2" fill="#FFFFFF" />
                <circle cx="24" cy="24" r="6" fill="#6d25fe" />
              </svg>
            </div>
          </div>
          <div className="ml-4 ">
            <p className="text-[16px] leading-[24px] font-semibold text-[#1A1A1A]">
              Marry Doe
            </p>
            <p className="text-[14px] leading-[20px] text-[#7F7F7F]">
              Marry@Gmail.Com
            </p>
          </div>
        </div>

        <p className="mt-4 px-4 text-[14px] leading-[20px] text-[#1A1A1A]">
          Lorem Ipsum Dolor Sit Amet, Consectetur Sadipiscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>

        <div className="mt-4 border-t border-dashed border-[#C4C4C4]" />
      </div>
    </div>
  );
};

export default AccountSettings;
