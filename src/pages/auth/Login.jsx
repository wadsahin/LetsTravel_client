import { Link } from "react-router-dom";
import SocialLogin from "../../components/auth/SocialLogin";

const Login = () => {
  return (
    <div className="my-10 w-2/6 mx-auto border border-primary p-3 rounded-lg">
      <h2 className="text-center text-2xl font-semibold">We happy to you back!</h2>
      <SocialLogin />
      <div className="divider px-9">or</div>
      <div>
        <form className="card-body space-y-3">
          {/* row 3 */}
          <div className="form-control">
            <input type="email" placeholder="Email address" className="input input-bordered rounded-full" required />
          </div>
          {/* row 4 */}
          <div className="form-control">
            <input type="password" placeholder="**********" className="input input-bordered rounded-full" required />
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