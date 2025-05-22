import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/auth/SocialLogin";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const Login = () => {
  const { loginWithEmailPassword, setLoading } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors },
  } = useForm();

  const handleLoginForm = (data) => {
    const email = data?.email;
    const password = data?.password;
    // console.log({ email, password });
    // Login with email & pasword
    loginWithEmailPassword(email, password)
      .then(result => {
        console.log(result?.user);
        if (result?.user) {
          reset();
          toast.success('Login successfull.');
          navigate("/");
        }
      })
      .catch(err => {
        toast.error(err?.code);
        setLoading(false);
      })
  }


  return (
    <div className="my-10 w-2/6 mx-auto border border-primary p-3 rounded-lg">
      <h2 className="text-center text-2xl font-semibold">We happy to you back!</h2>
      <SocialLogin />
      <div className="divider px-9">or</div>
      <div>
        <form onSubmit={handleSubmit(handleLoginForm)} className="card-body space-y-3">
          {/* row 3 */}
          <div className="form-control">
            <input
              {...register("email", { required: "Email must filled!" })}
              type="email"
              placeholder="Email address"
              className="input input-bordered rounded-full" />
            <p className="text-error pt-2">{errors.email?.message}</p>
          </div>
          {/* row 4 */}
          <div className="form-control">
            <input
              {...register("password", { required: "Password must filled!", minLength: 6 })}
              type="password"
              placeholder="**********"
              className="input input-bordered rounded-full" />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
            <p className="text-error pt-2">{errors.password?.message}</p>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-primary text-white rounded-full hover:text-primary text-base">Login</button>
          </div>
        </form>
        <p className="text-center">Don't have an account ? please <Link className="text-primary font-semibold" to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;