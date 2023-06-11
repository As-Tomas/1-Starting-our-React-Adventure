export default function SignIn() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="text-5xl p-5">Sign In</h1>
          <p className="text-green-500 pb-5">Have an account?</p>
          <input
            className="block border border-solid border-indigo-950 rounded-lg p-2 w-1/3 sm:w-2/3 md:w-1/3"
            type="text"
            placeholder="Enter email"
          />
          <input
            className="block border border-solid border-indigo-950 rounded-lg p-2 m-4 w-1/3 sm:w-2/3 md:w-1/3"
            type="text"
            placeholder="Password"
          />
          <button className="p-2 pl-5 pr-5 text-white text-2xl bg-green-500 rounded-lg mt-1">
            Sign In
          </button>
        </div>
  );
}
