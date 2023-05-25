import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignIn } from '@clerk/clerk-react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const apiHost = import.meta.env.VITE_API_HOST || 'https://docsapi.arc53.com';

  return (
    <>
      {' '}
      <section className="gradient-form h-full justify-center bg-neutral-100 dark:bg-neutral-700">
        <div className="container mx-auto justify-center">
          <div className="g-6 flex flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="login-wrapper block rounded-lg bg-white shadow-lg dark:bg-neutral-800 ">
                <div className="g-0 lg:flex lg:flex-wrap">
                  <div className="loginAbout flex items-center lg:rounded-bl-none"></div>
                  <div className="loginPane justify-center">
                    <div className="md:mx-6 md:p-6">
                      <div className="justify-center text-center">
                        <h4 className="loginTitle mb-8 mt-10 font-semibold">
                          Welcome to Document Genius!
                        </h4>
                        <p className="mb-10 text-sm">
                          Document Genius is designed to help you navigate
                          technical documentation with ease. You can quickly
                          find the information you need using our interactive
                          chatbot and a few short queries. Log in or sign up
                          below to get started!
                        </p>
                      </div>
                      <div id="loginForm" className="loginForm">
                        <SignIn
                          appearance={{
                            layout: {
                              socialButtonsPlacement: 'bottom',
                            },
                            variables: {
                              colorPrimary: '#0087fe',
                            },
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
