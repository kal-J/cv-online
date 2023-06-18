import logoUrl from "../../assets/images/logo.svg";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import Button from "../../base-components/Button";
import { FormInput, FormCheck } from "../../base-components/Form";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetUserDataQuery, useLoginMutation } from "../../services/userApi";
import Loading from "../../components/Loading";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import { setAccessCode, updateUserData } from "../../stores/userSlice";

function Main() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const bearerToken = useAppSelector((state) => state.user?.bearerToken);
  const isAuthenticated = useAppSelector((state) => state.user?.isAuthenticated);
  
  const [code, setCode] = useState("");

  const handleCvAccess = async () => {
     dispatch(setAccessCode({
      cv_access_code: code
    }));
    navigate("/access-code/cv");
  };

  return (
    <>
      
      <div className="container">
        <div className="flex items-center justify-center w-full min-h-screen p-5 md:p-20">
          <div className="w-96 intro-y">
            {/* <img
              className="w-16 mx-auto"
              alt="Rocketman - Tailwind HTML Admin Template"
              src={logoUrl}
            /> */}
            <div className="text-2xl font-medium text-center text-white dark:text-slate-300 mt-14">
              Enter Code to Access CV
            </div>
            <div className="box px-5 py-8 mt-10 max-w-[450px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
              <FormInput
                type="text"
                className="block px-4 py-3"
                placeholder="Access Code"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              />
              
              
              <div className="mt-5 text-center xl:mt-8 xl:text-left">
                <Button
                  variant="primary"
                  className="w-full xl:mr-3"
                  onClick={() => handleCvAccess()}
                >
                  View CV
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
