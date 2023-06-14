import logoUrl from "../../assets/images/logo.svg";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import Button from "../../base-components/Button";
import { FormInput, FormCheck } from "../../base-components/Form";
import { Link } from "react-router-dom";
import { useState } from "react";

function Main() {
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password_confirmation, setPasswordConfirmation] = useState("")

  const handleSignup = () => {
    // TODO
  }

  return (
    <>
      <div className="container">

        <div className="flex items-center justify-center w-full min-h-screen p-5 md:p-20">
          <section className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
              <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                <img
                  alt="Night"
                  className="absolute inset-0 h-full w-full object-cover opacity-60"
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                />

                <div className="hidden lg:relative lg:block lg:p-12">
                  <h2 className="mt-6 text-4xl font-bold text-primary sm:text-3xl md:text-4xl">
                    Welcome to the CV Online
                  </h2>

                  <p className="mt-4 leading-relaxed text-primary/90">
                    For Job seekers & Employers. <br />
                    Create an account to upload and share your CV with
                    employers.
                  </p>
                </div>
              </section>

              <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                <div className="max-w-xl lg:max-w-3xl">
                  <div className="relative -mt-16 block lg:hidden">
                    <a
                      className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                      href="#"
                    ></a>

                    <h1 className="mt-2 text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
                      Welcome to the CV Online
                    </h1>

                    <p className="mt-4 leading-relaxed text-primary/90">
                      For Job seekers & Employers. <br />
                      Create an account to upload and share your CV with
                      employers.
                    </p>
                  </div>

                  <form onSubmit={(e) => e.preventDefault()} action="#" className="mt-8 grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="FirstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First Name
                      </label>

                      <FormInput
                        type="text"
                        className="mt-1 w-full rounded-md   text-sm "
                        id="FirstName"
                        name="first_name"
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="LastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last Name
                      </label>

                      <FormInput
                        type="text"
                        className="mt-1 w-full rounded-md   text-sm "
                        id="LastName"
                        name="last_name"
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="Email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>

                      <FormInput
                        className="mt-1 w-full rounded-md   text-sm "
                        type="email"
                        id="Email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="Password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>

                      <FormInput
                        className="mt-1 w-full rounded-md   text-sm "
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="PasswordConfirmation"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password Confirmation
                      </label>

                      <FormInput
                        className="mt-1 w-full rounded-md   text-sm "
                        type="password"
                        id="PasswordConfirmation"
                        name="password_confirmation"
                        value={password_confirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                      />
                    </div>

                    <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                      <Button variant="primary" className="w-full" onClick={() => {
                        handleSignup()
                      }}>
                        Create an account
                      </Button>
                    </div>
                    <div className="col-span-6 ">
                      <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                        Already have an account? &nbsp;
                        <Link to="/login">Log in</Link>
                        
                      </p>
                    </div>
                  </form>
                </div>
              </main>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Main;
