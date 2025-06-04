import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const SignupScreen = () => {
  const navigate = useNavigate()

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isAgency, setIsAgency] = useState('yes');

  const isFormValid =
    fullName.trim() !== '' &&
    phoneNumber.trim() !== '' &&
    emailAddress.trim() !== '' &&
    password.trim() !== '';

  return (
    <div className="h-screen w-full bg-[#F7F8F9] flex justify-center items-center py-5">
      <div className="flex flex-col justify-between w-full h-full max-w-[320px] px-4 py-4 bg-gray-100 ">
        <div className=''>
          <h1 className="text-[24px] leading-[32px] font-bold text-[#1A1A1A]">
            Create your PopX account
          </h1>

          <div className="relative mt-6">
            <label
              htmlFor="fullName"
              className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-[14px] leading-[20px] font-semibold text-[#6d25fe]"
            >
              Full Name*
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Marry Doe"
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

          <div className="relative mt-6">
            <label
              htmlFor="phoneNumber"
              className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-[14px] leading-[20px] font-semibold text-[#6d25fe]"
            >
              Phone number*
            </label>
            <input
              id="phoneNumber"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Marry Doe"
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

          <div className="relative mt-6">
            <label
              htmlFor="emailAddress"
              className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-[14px] leading-[20px] font-semibold text-[#6d25fe]"
            >
              Email address*
            </label>
            <input
              id="emailAddress"
              type="email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              placeholder="Marry Doe"
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

          <div className="relative mt-6">
            <label
              htmlFor="password"
              className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-[14px] leading-[20px] font-semibold text-[#6d25fe]"
            >
              Password*
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Marry Doe"
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

          <div className="relative mt-6">
            <label
              htmlFor="companyName"
              className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-[14px] leading-[20px] font-semibold text-[#6d25fe]"
            >
              Company name
            </label>
            <input
              id="companyName"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Marry Doe"
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

          <p className="mt-6 text-[14px] leading-[20px] font-semibold text-[#1A1A1A]">
            Are you an Agency?*
          </p>
          <div className="flex space-x-6 mt-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={isAgency === 'yes'}
                onChange={() => setIsAgency('yes')}
                className="
                h-5 w-5 border-2 border-[#C4C4C4] rounded-full
                accent-[#6d25fe] focus:ring-0
              "
              />
              <span className="ml-2 text-[14px] leading-[20px] text-[#1A1A1A]">
                Yes
              </span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="agency"
                value="no"
                checked={isAgency === 'no'}
                onChange={() => setIsAgency('no')}
                className="
                h-5 w-5 border-2 border-[#C4C4C4] rounded-full
                accent-[#6d25fe] focus:ring-0
              "
              />
              <span className="ml-2 text-[14px] leading-[20px] text-[#1A1A1A]">
                No
              </span>
            </label>
          </div>
        </div>
        <button
          onClick={()=>{navigate('/account')}}
          disabled={!isFormValid}
          className={`
            w-full h-12 mt-8 rounded-lg text-[16px] leading-[20px] font-semibold text-white focus:outline-none
            ${isFormValid ? 'bg-[#6d25fe]' : 'bg-[#C4C4C4]'}
          `}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default SignupScreen;
