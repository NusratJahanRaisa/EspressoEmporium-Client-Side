import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {
  const { handleSignUp } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;


    const newUser = {name,email}

    handleSignUp(email, password)
      .then((res) => {
        console.log(res);

        const creationTime = res.user.metadata.creationTime
        const lastSignInTime = res.user.metadata.lastSignInTime

        const newUser = {name,email,creationTime,lastSignInTime}

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json", 
          },
          body: JSON.stringify(newUser)
        })
        .then(res=> res.json())
        .then(data=>{
             if (data.insertedId){

                console.log('user created in db')
             }
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/coffee-bg.jpg')] bg-cover">
      <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Sign Up for Espresso Emporium
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full input input-bordered"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="w-full input input-bordered"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 font-semibold">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Your Password"
              className="w-full input input-bordered"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
