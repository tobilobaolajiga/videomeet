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
import Participants from './Pages/Participants/Participants';
import AdminLogin from './components/AdminLogin';
import ForgotAdminPass from './components/ForgotPassAdmin';
import Meetings from './Pages/Meetings/Meetings';
import Reports from './Pages/Reports/Reports';
import Agency from './ProductModals/Agency';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const [mobileModal, setMobileModal] = useState(false);
  const [mobileSchedule, setMobileSchedule] = useState(false);
  const [resScheduler, setResScheduler] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [displayName, setDisplayName] = useState('');
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
  };

  const closeLogin = () => {
    setLogin(!login);
    setUserEmail('');
    setUserPassword('');
    closeOptions();
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
    console.log(userData?.email);
    console.log(token);
    setLinkLoading(true);
    const hostAgentString = uuidv4();
    localStorage.setItem('hostAgent', hostAgentString);
    console.log('pppp', hostAgentString);
    try {
      const response = await axios.post(
        import.meta.env.VITE_BASE_URL + 'meeting/createinstant',
        {},

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response?.data?.data);
      toast.success(response.data.message);
      const link = response?.data?.data;
      const nowCode = link.substring(28, 50);
      localStorage.setItem(
        'NowLink',
        `${window.location.origin}/video/${nowCode}`
      );
      setjoinInfo(true);
      setLinkLoading(false);

      console.log(response?.data?.data?.meetingLink);
      console.log(response?.data?.referenceId);
    } catch (error) {
      setLinkLoading(false);
      toast.error(error.response.data.message);

      console.log(error.response.data.message);
    }
  };
  const [joinInfo, setjoinInfo] = useState(false);

  const showJoinInfo = () => {
    meetingLink();

    setOptions(options);
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
                displayName={displayName}
                setDisplayName={setDisplayName}
                isAudioOn={isAudioOn}
                isVideoOn={isVideoOn}
                setIsAudioOn={setIsAudioOn}
                setIsVideoOn={setIsVideoOn}
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
                displayName={displayName}
                setDisplayName={setDisplayName}
                isAudioOn={isAudioOn}
                isVideoOn={isVideoOn}
                setIsAudioOn={setIsAudioOn}
                setIsVideoOn={setIsVideoOn}
                profileDrop={profileDrop}
                setProfileDrop={setProfileDrop}
                showProfDrop={showProfDrop}
                meetingLink={meetingLink}
                // meetingName={meetingName}
              />
            }
          />

          <Route
            path="/video/:meetingId"
            element={<VideoLiveStream displayName={displayName} />}
          />
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
          <Route path="/agency" element={<Agency />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
