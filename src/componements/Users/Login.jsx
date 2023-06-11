import { useContext, useState } from 'react';
// import { loadCaptchaEnginge, LoadCanvasTemplate } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import useTitle from '../../../hooks/useTitle';
import img from '../../assets/loginBanner.jpg'
import SocialLogin from '../Share/SocialLogin/SocialLogin';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    useTitle("Login")
    // const [disabled, setDisable] = useState(true)
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    // const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);

    const from = location.state?.from?.pathname || "/";

    // useEffect(() => {
    //     loadCaptchaEnginge(6);
    // }, [])
    // const handelCapter = (e) =>{
    //     const user_captcha_value = e.target.value;
    //     // console.log(user_captcha_value);
    //     if (validateCaptcha(user_captcha_value)==true) {
    //         alert('Captcha Matched');
    //         setDisable(false)
    //     }
   
    //     else {
    //         alert('Captcha Does Not Match');
    //         setDisable(true)
    //     }
    // }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: `${user.displayName} Login Successful.`,
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }



    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center  lg:text-left">
                        <img src={img} className='w-full'></img>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-bold text-center">Sign in now!</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <span
                                        className="password-toggle-icon"
                                        onClick={() => setShowPassword(!showPassword)}
                                        style={{
                                            position: 'absolute',
                                            top: '370px',
                                            right: '0',
                                            margin: '0.5rem',
                                            cursor: 'pointer'
                                          }}
                                    >
                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                    </span>
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handelCapter} type="text" name="captcha"  className="input input-bordered" />

                            </div> */}
                            {/* TODO: make button disabled for captcha */}
                            <div className="form-control mt-6">
                                <input  className="btn btn-active btn-ghost" type="submit" value="Sing In" />
                            </div>
                        </form>
                        <p className='mt-[-20px] text=center'>New Here? Create an account... <Link className='text-orange-500 font-bold' to="/registation">Sing Up</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;