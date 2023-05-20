import React, { useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import registerImage from '../../Assets/signup.svg';
import logo from '../../Assets/logo.svg';
import Navbar from '../molecules/Navbar';
import Footer from '../molecules/Footer';
import axios from 'axios';
import validator from 'validator';
import Swal from 'sweetalert2';
//import useAuthStore from "../store/AuthStore";
const RegisterPage = (props) => {
  const baseUrl = 'http://52.87.178.223/auth/register';
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    email: '',
    username: '',
    password: '',
    //confirmPassword: '',
  });
  //eslint-disable-next-line
  const [state, setState] = useState(null);
  //eslint-disable-next-line
  const [loading, setLoading] = useState(true);

  //handleRegister
  const [emailError, setEmailError] = useState({ message: '', status: false });
  const [userNameError, setUserNameError] = useState({
    message: '',
    status: false,
  });
  const [passwordError, setPasswordError] = useState({
    message: '',
    status: false,
  });

  const handleChange = (e, type) => {
    if (type === 'email') {
      if (validator.isEmail(e.target.value)) {
        setEmailError({ message: 'Email sudah benar', status: true });
      } else {
        if (e.target.value === '') {
          setEmailError({ message: 'Email tidak boleh kosong', status: false });
        } else {
          setEmailError({ message: 'Email harus lengkap', status: false });
        }
      }
      setRegister({ ...register, email: e.target.value });
    } else if (type === 'username') {
      if (e.target.value.length > 8 && e.target.value.length < 16) {
        if (/[^0-9a-zA-Z]/.test(e.target.value)) {
          setUserNameError({
            message: 'Username harus berupa huruf atau angka',
            status: false,
          });
        } else {
          setUserNameError({ message: 'Username sudah benar', status: true });
        }
      } else {
        if (/[^0-9a-zA-Z]/.test(e.target.value)) {
          setUserNameError({
            message: 'Username harus berupa huruf atau angka',
            status: false,
          });
        } else if (
          (e.target.value.length < 8 || e.target.value.length > 16) &&
          e.target.value !== ''
        ) {
          setUserNameError({
            message: 'Username harus 8-16 karakter',
            status: false,
          });
        } else if (e.target.value === '') {
          setUserNameError({ message: 'Username tidak boleh kosong', status: false });
        }
      }
      setRegister({ ...register, username: e.target.value });
    } else if (type === 'password') {
      if (e.target.value.length > 8 && e.target.value.length < 16) {
        setPasswordError({ message: 'Password sudah benar', status: true });
      } else {
        if (e.target.value.length !== 0) {
          setPasswordError({
            message: 'Password harus 8-16 karakter',
            status: false,
          });
        } else {
          setPasswordError({ message: 'Password tidak boleh kosong', status: false });
        }
      }
      setRegister({ ...register, password: e.target.value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(baseUrl, register, { withCredentials: false })
        .then((res) => {
          setState(res?.data);
          setLoading(false);
          Swal.fire('Berhasil!', 'Anda telah berhasil Registrasi', 'success');
          navigate('/login');
        })
        .catch((error) => {
          Swal.fire({
            title: 'Gagal!',
            text: 'Register Gagal!',
            icon: 'error',
            confirmButtonText: 'ya, saya mencoba kembali',
          });
        });
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: 'Gagal!',
        text: 'Register Gagal!',
        icon: 'error',
        confirmButtonText: 'ya, saya mencoba kembali',
      });
    }
  };
  // console.log(state);
  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden flex py-44 items-center flex-col-reverse justify-center w-full md:gap-x-80  lg:flex-row">
        <div className="hidden md:flex max-w-2xl">
          <img src={registerImage} alt="logo" className="w-full" />
        </div>
        <div className="border-slate-200 rounded-xl shadow-md p-12 w-96">
          <form
            className="text-sm max-w-[460px] h-full sm:max-w-full"
            onSubmit={handleSubmit}
          >
            <img src={logo} alt="logo" className="w-32 mx-auto mb-5" />
            <label htmlFor="email">
              <span className="block font-semibold mb-1 after:content-['*'] after:ml-0.5 ">
                Email
              </span>
              <input
                placeholder="nama@mail.com"
                id="email"
                className="w-full  block border rounded border-orange-400 bg-gray-100 p-2 focus:outline-none focus:ring-orange-500 focus:border-orange-500 "
                type="email"
                onChange={(e) => handleChange(e, 'email')}
                
              />
              <p
                className={`mb-0 text-sm ${
                  emailError.status ? 'text-green-700' : 'text-pink-700'
                }`}
              >
                {emailError.message}
              </p>
            </label>
            <label htmlFor="text">
              <span className="block mt-4 font-semibold mb-1 after:content-['*'] after:ml-0.5 ">
                Username
              </span>
              <input
                placeholder="Username Anda"
                id="username"
                className=" w-full block border rounded border-orange-400 bg-gray-100 p-2 focus:outline-none focus:ring-orange-500 focus:border-orange-500 "
                type="text"
                name="username"
                onChange={(e) => handleChange(e, 'username')}
                
              />
              <p
                className={`mb-0 text-sm ${
                  userNameError.status ? 'text-green-700' : 'text-pink-700'
                }`}
              >
                {userNameError.message}
              </p>
            </label>
            <label htmlFor="password">
              <span className="block mt-4 font-semibold mb-1 after:content-['*'] after:ml-0.5 ">
                Password
              </span>
              <input
                placeholder="********"
                id="password"
                className=" w-full block border rounded border-orange-400 bg-gray-100 p-2 focus:outline-none focus:ring-orange-500 focus:border-orange-500 "
                type="password"
                onChange={(e) => handleChange(e, 'password')}
                
              />
              <p
                className={`mb-0 text-sm ${
                  passwordError.status ? 'text-green-700' : 'text-pink-700'
                }`}
              >
                {passwordError.message}
              </p>
            </label>
            <input
              type="submit"
              className="w-full py-3 mt-8 bg-orange-500 hover:bg-orange-600 relative text-white shadow-md rounded-full"
              value="Daftar"
            />

            <p className="text-center mt-4">
              Sudah Punya Account ?
              <Link to="/login" className="font-bold pl-2 text-red-600">
                Login
              </Link>
            </p>

          </form>
            {/* <button className="py-3 px-3 mt-8 mb-4 w-full justify-center rounded-2xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200 flex">
              <div className="flex gap-4 justify-center max-w-sm">
                <img src={google} className="w-5" alt="google" />
                <span className="block w-max font-medium tracking-wide text-sm text-blue-700">
                  with Google
                </span>
              </div>
            </button> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
