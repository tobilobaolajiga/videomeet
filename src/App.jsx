import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LoginSuccessful from './components/LoginSuccessful';
import Schedule from '../src/components/Schedule';
import VideoLiveStream from './components/VideoLivestream';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import CheckCamera from './components/CheckCamera';
import AfterLeaveMeeting from './components/AfterLeaveMeeting';

import 'animate.css';
import Dashboard from './Pages/MainDashboard/Dashboard';
import AccountCreated from './components/AccountCreated';

import Reviews from './components/Reviews';
import Participants from './Pages/Participants/Participants';
import AdminLogin from './components/AdminLogin';
import ForgotAdminPass from './components/ForgotPassAdmin';
import Meetings from './Pages/Meetings/Meetings';
import Reports from './Pages/Reports/Reports';

export default function App() {
  const [mobileModal, setMobileModal] = useState(false);
  const [mobileSchedule, setMobileSchedule] = useState(false);
  const [resScheduler, setResScheduler] = useState(true);
  const showMobileModal = () => {
    setMobileModal(!mobileModal);
  };
  const showMobileSchedule = () => {
    setMobileSchedule(!mobileSchedule);
    products ? setProducts(false) : '';
    resScheduler ? setResScheduler(false) : setResScheduler(true);

    console.log('click');
  };
  const [login, setLogin] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [options, setOptions] = useState(false);
  const [otp, setOTP] = useState(false);
  const [newAccount, setNewAccount] = useState(false);
  const [name, setName] = useState('');
  const [lastname, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState(false);

  const showProducts = () => {
    setProducts(!products);
  };
  const showOptions = () => {
    setOptions(!options);
  };
  const closeOptions = () => {
    setOptions('');
  };

  const showLogin = () => {
    setLogin(!login);
    setNewAccount(false);
    setMobileModal(false);
    // const body = document.querySelector('#body');
    // body.style.position = 'fixed';
  };

  const closeLogin = () => {
    setLogin(!login);
    setUserEmail('');
    setUserPassword('');
    closeOptions();

    // const body = document.querySelector('#body');
    // body.style.position = '';
  };

  const [schedule, setSchedule] = useState(false);
  const showSchedule = () => {
    setSchedule(!schedule);
    closeOptions();
  };

  const [profileDrop, setProfileDrop] = useState(false);
  const showProfDrop = () => {
    setProfileDrop(!profileDrop);
  };
  const [error, setError] = useState('');

  const [userId, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const [loading, setLoading] = useState(false);

  const sendOTP = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        import.meta.env.VITE_BASE_URL + 'auth/onboard',
        {
          email: email,
          fullName: name,
          password: pwd,
        }
      );

      const data = response;

      localStorage.setItem('userId', data?.data?.data?.userId);
      console.log(userId);
      console.log(response);
      setLoading(false);

      setOTP(!otp);

      setPassword(false);
    } catch (error) {
      setLoading(false);
      showLogin();
      setPassword(false);
      setError(error.response.data.message);
      toast.error(error.response.data.message);
      console.log(error.response.data.status);
      console.log(error.response.data.message);
      console.log(userId);
    }
  };

  const showOtp = () => {
    console.log(email);
    localStorage.setItem('email', email);
    sendOTP();
    setOTP(!otp);
    setPassword(false);
    setLogin(false);
  };
  const [resendOtp, setResendOtp] = useState(false);

  const resendOTP = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        import.meta.env.VITE_BASE_URL + 'auth/resend-otp',
        {
          email: email || userEmail,
        }
      );
      setIsLoading(false);
      const data = response;
      const id = data?.data?.data?.userId;
      setId(id);
      setResendOtp(!resendOtp);
      // setOTP(!otp);
      setPassword(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data.message);
    }
  };

  const showCreateAccount = () => {
    setNewAccount(!newAccount);
    setLogin(false);
    setMobileModal(false);
    // !passwordModal();
  };
  const closeCreate = () => {
    showCreateAccount();
  };
  const userData = JSON.parse(localStorage.getItem('userData'));
  // const meetingName = JSON.parse(
  //   localStorage.getItem('meetingDeets')
  // ).meetingName;
  const [currentDate, setCurrentDate] = useState(new Date());
  const [nextDate, setNextDate] = useState(
    new Date(currentDate.getTime() + 60 * 1000)
  );
  const token = localStorage.getItem('userToken');
  const [linkLoading, setLinkLoading] = useState(false);
  const meetingLink = async () => {
    setLinkLoading(true);
    const startTime = `${currentDate.getFullYear()}-${(
      currentDate.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')}-${currentDate
      .getDate()
      .toString()
      .padStart(2, '0')}T${currentDate
      .getHours()
      .toString()
      .padStart(2, '0')}:${currentDate
      .getMinutes()
      .toString()
      .padStart(2, '0')}:00Z`;

    const endTime = `${nextDate.getFullYear()}-${(nextDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${nextDate.getDate().toString().padStart(2, '0')}T${(
      nextDate.getHours() + 1
    )
      .toString()
      .padStart(2, '0')}:${nextDate
      .getMinutes()
      .toString()
      .padStart(2, '0')}:00Z`;
    console.log(nextDate);
    console.log(startTime);
    console.log(endTime);

    try {
      const response = await axios.post(
        'https://api-meet.tm-dev.xyz/api/v1/meeting/schedule-meeting',
        {
          emails: [userData.email],
          meetingTime: startTime,
          meetingName: 'Meeting',
          endTime: endTime,
          color: 'blue',
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response?.data?.data);
      toast.success(response.data.message);
      localStorage.setItem(
        'NowLink',
        `${window.location.origin}/check/${response?.data?.data?.meetingId}`
      );
      setjoinInfo(true);
      setLinkLoading(false);
      // localStorage.setItem(
      //   'meetingId',
      //   `${window.location.origin}/check/${response?.data?.referenceId}`
      // );
      // localStorage.setItem('checkId', `/check/${response?.data?.referenceId}`);

      // localStorage.setItem('refId', response?.data?.referenceId);
      console.log(response?.data?.data?.meetingLink);
      console.log(response?.data?.referenceId);
    } catch (error) {
      toast.error(error.message);
      console.log(error.status);
      console.log(error.message);
    }
  };
  const [joinInfo, setjoinInfo] = useState(false);
  // const [bg, setBg] = useState('bg- #ffffff');
  // const [text, setText] = useState('text-#454545');

  const showJoinInfo = () => {
    meetingLink();
    // setBg('bg-#36aad9');
    // setText('text-#ffffff');
    // setjoinInfo(!joinInfo);
    setOptions(options);
    const body = document.querySelector('#body');
    body.style.position = 'fixed';
  };

  const closeJoinInfo = () => {
    setjoinInfo(!joinInfo);
    !showOptions();
    const body = document.querySelector('#body');
    body.style.position = '';
  };
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        <Routes>
          <Route
            className="max-w-[1400px] w-screen h-screen mx-auto font-DMSans overflow-y-hidden flex items-center justify-center" //
            id="body"
            path="/"
            element={
              <Home
                showLogin={showLogin}
                closeLogin={closeLogin}
                showOptions={showOptions}
                closeOptions={closeOptions}
                options={options}
                setOptions={setOptions}
                login={login}
                userEmail={userEmail}
                setUserEmail={setUserEmail}
                userPassword={userPassword}
                setUserPassword={setUserPassword}
                otp={otp}
                setOTP={setOTP}
                showOtp={showOtp}
                sendOTP={sendOTP}
                resendOTP={resendOTP}
                closeCreate={closeCreate}
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
                loading={loading}
                meetingLink={meetingLink}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                products={products}
                showProducts={showProducts}
                mobileModal={mobileModal}
                showMobileModal={showMobileModal}
              />
            }
          />
          <Route
            className="max-w-[1400px] w-screen h-screen mx-auto font-DMSans overflow-y-hidden flex items-center justify-center" //
            id="body"
            path="/login/:refId"
            element={
              <LoginSuccessful
                schedule={schedule}
                showSchedule={showSchedule}
                profileDrop={profileDrop}
                showProfDrop={showProfDrop}
                setProfileDrop={setProfileDrop}
                meetingLink={meetingLink}
                products={products}
                showProducts={showProducts}
                mobileSchedule={mobileSchedule}
                showMobileSchedule={showMobileSchedule}
                sendOTP={sendOTP}
                resendOTP={resendOTP}
                loading={loading}
                showJoinInfo={showJoinInfo}
                closeJoinInfo={closeJoinInfo}
                joinInfo={joinInfo}
                linkLoading={linkLoading}
              />
            }
          />
          <Route
            className="h-screen w-screen"
            path={`/schedule/:${localStorage.getItem('ref')}`}
            element={
              <Schedule
                schedule={schedule}
                showSchedule={showSchedule}
                profileDrop={profileDrop}
                showProfDrop={showProfDrop}
                email={email}
                userId={userId}
                products={products}
                showProducts={showProducts}
                mobileSchedule={mobileSchedule}
                setMobileSchedule={setMobileSchedule}
                showMobileSchedule={showMobileSchedule}
                resScheduler={resScheduler}
              />
            }
          />

          <Route
            className="overflow-y-hidden"
            path="/check/:meetingId"
            // path="/check"
            element={
              <CheckCamera
                profileDrop={profileDrop}
                setProfileDrop={setProfileDrop}
                showProfDrop={showProfDrop}
                meetingLink={meetingLink}
                // meetingName={meetingName}
              />
            }
          />

          <Route path="/video/:meetingId" element={<VideoLiveStream />} />
          <Route
            path="/leave"
            element={
              <AfterLeaveMeeting
                showProducts={showProducts}
                products={products}
              />
            }
          />
          <Route
            path="/admin"
            element={
              <AdminLogin
                adminEmail={adminEmail}
                setAdminEmail={setAdminEmail}
                adminPassword={adminPassword}
                setAdminPassword={setAdminPassword}
              />
            }
          />
          <Route path="/admin/forgot" element={<ForgotAdminPass />} />
          <Route path="/dashboard/:ref" element={<Dashboard />} />
          <Route path="/participants" element={<Participants />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
