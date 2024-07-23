import Script from "next/script"
// import { login, signup } from './actions'

import { login } from "../../utils/supabase/serverActions/login"
import { signup } from "../../utils/supabase/serverActions/signup"

export default function LoginPage() {




  return (
    <div id="login-page"
      className="w-full h-screen mt-24 flex flex-col justify-center items-center">
      <div id="login-container"
        className="w-3/4 h-1/2 flex flex-col justify-around items-center">
        <p className="my-10 text-lg">
          You... You have an account...?
        </p>
        <form className="w-full h-full flex flex-col">
          <div className="w-full flex my-2">
            <span className="w-20">
              <label
                className="mr-2"
                htmlFor="email">Email:</label>
            </span>
            <input id="email" className="flex-1"
              name="email" type="email" required />
          </div>
          <div className="w-full flex my-2">
            <span className="w-20">
              <label htmlFor="password">Password:</label>
            </span>
            <input id="password"
              className="flex-1" name="password" type="password" required />
          </div>
          <div id="auth-buttons-div"
            className="w-full flex justify-evenly py-10"
          >
            <button id=""
              className="py-2 bg-slate-300 hover:bg-slate-500 dark:text-slate-800 rounded-md w-24"
              formAction={login}>Log in</button>
            <button id=""
              className="py-2 bg-slate-300 hover:bg-slate-500 dark:text-slate-800 rounded-md w-24"
              formAction={signup}>Sign up</button>
          </div>
          <div>

          </div>
        </form>
      </div>
    </div>
  )
}