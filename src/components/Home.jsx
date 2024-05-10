import NavBar from './NavBar';
import Hero from './Hero';
import { useState } from 'react';
import MobileModal from './MobileModal';
import Reviews from './Reviews';

export default function Home({
  showLogin,
  closeLogin,
  showOptions,
  closeOptions,
  options,
  setOptions,
  login,
  userEmail,
  setUserEmail,
  userPassword,
  setUserPassword,
  otp,
  setOTP,
  showOtp,
  resendOTP,
  closeCreate,

  newAccount,
  setNewAccount,
  showCreateAccount,
  setLogin,
  name,
  setName,
  lastname,
  setLast,
  email,
  setEmail,
  password,
  setPassword,
  pwd,
  setPwd,
  verifyOTP,
  inputOne,
  inputTwo,
  inputThree,
  inputFour,
  setInputOne,
  setInputTwo,
  setInputThree,
  setInputFour,
  loading,
  meetingLink,
  isLoading,
  setIsLoading,
  products,
  showProducts,
  sendOTP,
  mobileModal,
  showMobileModal,
}) {
  return (
    <div className="w-screen h-screen flex-col items-center justify-center md:flex-row md:w-full">
      <NavBar
        showLogin={showLogin}
        closeLogin={closeLogin}
        login={login}
        closeOptions={closeOptions}
        userEmail={userEmail}
        setUserEmail={setUserEmail}
        userPassword={userPassword}
        setUserPassword={setUserPassword}
        otp={otp}
        setOTP={setOTP}
        showOtp={showOtp}
        resendOTP={resendOTP}
        closeCreate={closeCreate}
        sendOTP={sendOTP}
        newAccount={newAccount}
        setNewAccount={setNewAccount}
        showCreateAccount={showCreateAccount}
        setLogin={setLogin}
        name={name}
        setName={setName}
        lastname={lastname}
        setLast={setLast}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        pwd={pwd}
        setPwd={setPwd}
        verifyOTP={verifyOTP}
        inputOne={inputOne}
        inputTwo={inputTwo}
        inputThree={inputThree}
        inputFour={inputFour}
        setInputOne={setInputOne}
        setInputTwo={setInputTwo}
        setInputThree={setInputThree}
        setInputFour={setInputFour}
        loading={loading}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        products={products}
        showProducts={showProducts}
        mobileModal={mobileModal}
        showMobileModal={showMobileModal}
      />
      <Hero
        showLogin={showLogin}
        closeLogin={closeLogin}
        showOptions={showOptions}
        closeOptions={closeOptions}
        options={options}
        setOptions={setOptions}
        login={login}
        showCreateAccount={showCreateAccount}
        userEmail={userEmail}
        setUserEmail={setUserEmail}
        userPassword={userPassword}
        setUserPassword={setUserPassword}
        otp={otp}
        setOTP={setOTP}
        showOtp={showOtp}
        resendOTP={resendOTP}
        setNewAccount={setNewAccount}
        closeCreate={closeCreate}
        setLogin={setLogin}
        verifyOTP={verifyOTP}
        meetingLink={meetingLink}
      />
      <Reviews />
    </div>
  );
}
