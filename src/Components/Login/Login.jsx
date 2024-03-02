import React from 'react'

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-[#e8e8e8]">
        <div className="bg-slate-700 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">
            <span className="bg-gradient-to-r text-transparent text-white bg-clip-text">
              LogIn
            </span>
          </h2>
          <form>
            <div className="mb-6">
              <label className="block text-slate-100 text-start text-sm font-bold mb-2">Email
              </label>
              <div>
                <input id="email" type="email" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-slate-100 text-start text-sm font-bold mb-2">Password
              </label>
              <div>
                <input id="password" type="password" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your password" />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button type="submit" className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                LogIn
              </button>
            </div>
            <div className="text-center mt-4">
              <a href="#" className="text-slate-300 hover:underline">Forgot password?</a>
            </div>
          </form>
          <p className="text-center text-slate-300 mt-6">Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a></p>
        </div>
      </div>

    </>
  )
}

export default Login