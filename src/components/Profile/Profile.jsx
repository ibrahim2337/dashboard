const Profile = () => {
  return (
    <div>
      <div className="h-screen py-5 overflow-y-auto bg-gray-50 border-l border-r w-72 ">
        <div className="">
          <button className="flex items-center w-full ps-10 py-2 transition-colors duration-200  gap-x-2 focus:outline-none">
            <div className="relative">
              <img
                className="object-cover w-16 h-16 rounded-full border-blue-300"
                src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&h=1470&q=80"
                alt=""
              />
            </div>

            <div className="text-left">
              <h1 className="text-2xl font-bold text-gray-700">Hi Mike,</h1>

              <p className="text-xs text-gray-500">Welcome Back.</p>
            </div>
          </button>

          <div className="mt-5 ps-10">
            <h1 className="text-lg font-bold ">Today</h1>
            <div className="mt-2">
              <h3 className="text-2xl font-bold">$19,892</h3>
              <p className="text-xs text-gray-400">Account Balance</p>
            </div>
            <div className="mt-2">
              <h3 className="text-lg font-bold">$4,000</h3>
              <p className="text-xs text-gray-400">
                Year-to-Date Contributions
              </p>
            </div>
            <div className="mt-2">
              <h3 className="text-lg font-bold">$1,892</h3>
              <p className="text-xs text-gray-400">Total Interest</p>
            </div>
            <button className="px-4 py-2 text-white rounded-md mt-4 bg-blue-700">
              I want to
            </button>
          </div>
          <div className="mt-8 ps-10">
            <h1 className="text-lg font-bold">Recent Transactions</h1>
            <div className="mt-2">
              <h3 className="text-xs text-gray-400">2020-08-07</h3>
              <p className="text-xs font-bold">
                Withdrawal Transfer to Bank-XXX11
              </p>
            </div>
            <div className="me-11 my-3">
              <hr />
            </div>
            <div className="">
              <h3 className="text-xs text-gray-400">2020-07-21</h3>
              <p className="text-xs font-bold">
                Withdrawal Transfer to Bank-XXX11
              </p>
            </div>
            <div className="me-11 my-3">
              <hr />
            </div>
            <div className="">
              <h3 className="text-xs text-gray-400">2020-07-16</h3>
              <p className="text-xs font-bold">
                Withdrawal Transfer to Bank-XXX11
              </p>
            </div>
            <div className="me-11 mt-3">
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
