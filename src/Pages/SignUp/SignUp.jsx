import { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";

const SignUp = () => {
	const {createUser} =useContext(AuthContext)
  const handleSignup = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(form);
    const name=form.get("name");
    const password =form.get("password");
    const email=form.get("email");
    const photo=form.get("photo");
	createUser(email,password)
	.then(result=>{
		console.log(result);
	})
	.catch(error=>console.log(error))
  };

  return (
    <div className="flex justify-center items-center w-full h-screen ">
      <div className="flex flex-col w-8/12 p-6 rounded-md sm:p-10 bg-gray-50 text-gray-80">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign up</h1>
          <p className=" text-gray-600">Create a new account</p>
        </div>
        <form onSubmit={handleSignup} className="space-y-12">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Name
                </label>
              </div>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Your name"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Photo Url
                </label>
              </div>
              <input
                type="photo"
                name="photo"
                id="photo"
                placeholder="Photo Url"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
          </div>
          <button type="submit" className="btn my-3 bg-[#403F3F] w-full">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
