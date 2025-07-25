import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
  const { handleSignIn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // const newUser = {name,email}

    handleSignIn(email, password)
      .then((res) => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Signed In",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        // console.log(err)
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/coffee-bg.jpg')] bg-cover">
      <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Sign In to Espresso Emporium
        </h2>
        <form onSubmit={handleSubmit}>
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
            Sign In
          </button>
        </form>

        <p className="mt-4 text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
