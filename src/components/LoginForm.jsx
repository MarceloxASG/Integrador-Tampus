import Logo from '../img/Logo.png';
import { LoginSocialFacebook } from 'reactjs-social-login';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { FacebookLoginButton, TwitterLoginButton } from 'react-social-login-buttons';
import { jwtDecode } from 'jwt-decode';
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from './context';
  
const LoginForm = () => {
  
    //Facebook
    const [profile, setProfile] = useState(null);
    
    //Google GOD !
    const {user, setUser} = useUser();
    const navigate= useNavigate();

    const handleLoginSuccess = (credentialResponse) => {
        const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
        console.log(credentialResponseDecoded);
        setUser({ ...user , ...credentialResponseDecoded}); // Almacena la información del usuario en el estado
        navigate('/Navegar')
      };
    
    
    
  return (
        <section class="min-h-screen bg-[#f5e5c2]">
            <div class="container h-full pl-16 py-24">
                <div
                class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between pt-14">
                    <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                        <img
                        src={Logo}
                        class="w-full"
                        alt="Phone image" />
                    </div>

                    <div class="md:w-8/12 lg:ml-6 lg:w-5/12 ">
                        <form>
                            <div className='text-4xl font-mono text-center mb-7'>ÚNETE A NOSOTROS</div>
                            <div class="relative mb-6" data-te-input-wrapper-init>
                                <p className='mb-3'>Email Address</p>
                                <input
                                type="text"
                                class="peer block min-h-[auto] w-full rounded bg-white px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleFormControlInput3"
                                placeholder="Email address" />
                                <label
                                for="exampleFormControlInput3"
                                class="pointer-events-none absolute left-3  top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"
                                >
                                </label>
                            </div>

                            <div class="relative mb-6" data-te-input-wrapper-init>
                                <p className='mb-3'>Password</p>
                                <input
                                    type="password"
                                    class="peer block min-h-[auto] w-full rounded bg-white px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput33"
                                    placeholder="Password" />
                                <label
                                    for="exampleFormControlInput33"
                                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"
                                    >
                                </label>
                            </div>

                            <div class="mb-6 flex items-center justify-between">
                                <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                    <input
                                        class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-gray-400 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-black checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-black checked:focus:after:bg-transparent dark:border-black dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                        type="checkbox"
                                        value=""
                                        id="exampleCheck3"
                                        />
                                    <label
                                        class="inline-block pl-[0.15rem] hover:cursor-pointer"
                                        for="exampleCheck3">
                                        Remember me
                                    </label>
                                </div>

                                <a
                                    href="#!"
                                    class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">
                                    ¿No tienes cuenta?
                                </a>
                            </div>

                            <Link to='/Navegar'>
                                <button
                                    type="submit"
                                    class="inline-block w-full rounded bg-blue-500 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-md focus:shadow-md focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-md dark:shadow-xl dark:hover:shadow-md dark:focus:shadow-md dark:active:shadow-md"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Sign in
                                </button>
                            </Link>

                            <div
                                class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p
                                    class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                    OR
                                </p>
                            </div>

                            <div>
                                {!profile ? (
                                    <LoginSocialFacebook
                                    appId='198460089969425'
                                    onResolve={(response) => {
                                        console.log(response)
                                        setProfile(response.data);
                                    }}
                                    onReject={(error) => {
                                        console.log(error);
                                    }}
                                    >
                                        <FacebookLoginButton />
                                    </LoginSocialFacebook>
                                ) : (
                                    ""
                                )}

                                {profile ? (
                                    <div>
                                        <h1>{profile.name}</h1>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                            
                        

                            <a>
                                <TwitterLoginButton />
                            </a>

                            <div>
                                <GoogleOAuthProvider clientId='788968571780-fl919dgmr5ndh3ggh64mn33i42h4lc2c.apps.googleusercontent.com'>
                                    <GoogleLogin
                                        onSuccess={handleLoginSuccess}
                                        onError={() => {
                                            console.log("Login Failed");
                                        }}
                                    />
                                </GoogleOAuthProvider>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default LoginForm;