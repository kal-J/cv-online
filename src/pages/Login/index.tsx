import logoUrl from "../../assets/images/logo.svg";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import Button from "../../base-components/Button";
import { FormInput, FormCheck } from "../../base-components/Form";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../../services/userApi";
import Loading from "../../components/Loading";

function Main() {

  const navigate = useNavigate();
  const [login, { isLoading, isError, error, isSuccess, data }] = useLoginMutation()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
     await login({
      identifier: email,
      password: password
    })

  }

  useEffect(() => {
    console.log("Login Data Response => ", data)
  }, [data])

  return (
    <>
    {isLoading && <Loading />}
      <div className="container">
        
        <div className="flex items-center justify-center w-full min-h-screen p-5 md:p-20">
          <div className="w-96 intro-y">
            {/* <img
              className="w-16 mx-auto"
              alt="Rocketman - Tailwind HTML Admin Template"
              src={logoUrl}
            /> */}
            <div className="text-2xl font-medium text-center text-white dark:text-slate-300 mt-14">
              Login to Your Account!
            </div>
            <div className="box px-5 py-8 mt-10 max-w-[450px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
              <FormInput
                type="text"
                className="block px-4 py-3"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
              <FormInput
                type="password"
                className="block px-4 py-3 mt-4"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
              <div className="flex mt-4 text-xs text-slate-500 sm:text-sm">
                <div className="flex items-center mr-auto">
                  <FormCheck.Input
                    id="remember-me"
                    type="checkbox"
                    className="mr-2 border"
                  />
                  <label
                    className="cursor-pointer select-none"
                    htmlFor="remember-me"
                  >
                    Remember me
                  </label>
                </div>
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
              <div className="mt-5 text-center xl:mt-8 xl:text-left">
                <Button variant="primary" className="w-full xl:mr-3" onClick={() => handleLogin()}>
                  Login
                </Button>
                <Button variant="outline-secondary" className="w-full mt-3" onClick={
                  () => navigate("/signup")
                }>
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
