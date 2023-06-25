import React from "react";
import Layout from "../../Layout/Layout";
function Login() {
  return (
    <Layout>
      <div className="h-screen flex bg-gray-bg1">
        <div className="w-full max-w-md m-auto bg-white rounded-lg">
          <h1 className="text-2xl font-medium text-black my-4 mb-12 text-center">
            Log in to your account 🔐
          </h1>

          <form className="text-center">
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="password"
                placeholder="Your Password"
              />
            </div>

            <div className="flex justify-center items-center mt-6">
              <button
                className={`bg-green py-2 px-4 text-sm text-Black rounded border border-green focus:outline-none focus:border-green-dark`}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
