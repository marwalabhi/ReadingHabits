import "./SignUp.scss"; // Assuming this is for custom styles
import { Link } from "react-router-dom";

import { useState } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { asignup } from "../../../utils/Redux Store/authSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPassVisible, setConfirmPassVisible] = useState(false);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPass = () => {
    setConfirmPassVisible(!confirmPassVisible);
  };

  const renderTooltip = (props) => (
    <Tooltip id="link-tooltip" {...props}>
      Go to the homepage
    </Tooltip>
  );

  const userDetail = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(userDetail);


  const dispatch = useDispatch();

  // {
  //   payload: {}
  // }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(asignup(formData));
    // navigate("/login");
  };

  return (
    <main className="position-relative">
      {/* Pageheader start */}
      <section className="py-5 py-lg-8">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 offset-xl-4 col-md-12 col-12">
              <div className="text-center">
                <div className="mb-5">
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <Link
                      to={"/"}
                      className="text-decoration-none c-user-sel-non"
                    >
                      <span className="c-read-logo-pa display-6 fw-normal">
                        Reading
                      </span>
                      <span className="c-habit-logo-pa">
                        Habits<span className="c-excla-logo">!</span>
                      </span>
                    </Link>
                  </OverlayTrigger>
                  <div className="fs-5 fw-medium fst-italic">
                    Track your readings with us!
                  </div>
                </div>
                <h1 className="mb-1">Create Account</h1>
                <p className="mb-0 c-sign-up-para-ca">
                  Sign up now and get free account instant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pageheader end */}
      {/* Sign up start */}
      <section>
        <div className="container">
          <div className="row justify-content-center mb-6">
            <div className="col-xl-5 col-lg-6 col-md-8 col-12">
              <div className="card shadow-sm mb-3">
                <div className="card-body py-5">
                  <form
                    onSubmit={handleSubmit}
                    className="needs-validation mb-6"
                    noValidate
                  >
                    <div className="mb-3 ">
                      <label
                        htmlFor="signupFullnameInput"
                        className="form-label"
                      >
                        Full Name
                      </label>
                      <input
                        name="fullName"
                        value={formData.fullName}
                        type="text"
                        className="form-control"
                        id="signupFullnameInput"
                        required
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                      <div className="invalid-feedback">
                        Please enter full name
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="signupEmailInput" className="form-label">
                        Email
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                        type="email"
                        className="form-control"
                        id="signupEmailInput"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter email.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="formSignUpPassword"
                        className="form-label"
                      >
                        Password
                      </label>
                      <div className="password-field position-relative">
                        <input
                          name="password"
                          value={formData.password}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [e.target.name]: e.target.value,
                            })
                          }
                          type={passwordVisible ? "text" : "password"}
                          className="form-control fakePassword"
                          id="formSignUpPassword"
                          required
                        />
                        <span onClick={togglePassword}>
                          {passwordVisible ? (
                            <i className="bi passwordToggler bi-eye"></i>
                          ) : (
                            <i className="bi passwordToggler bi-eye-slash"></i>
                          )}
                        </span>
                        <div className="invalid-feedback">
                          Please enter password.
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="formSignUpConfirmPassword"
                        className="form-label"
                      >
                        Confirm Password
                      </label>
                      <div className="password-field position-relative">
                        <input
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [e.target.name]: e.target.value,
                            })
                          }
                          type={confirmPassVisible ? "text" : "password"}
                          className="form-control fakePassword"
                          id="formSignUpConfirmPassword"
                          required
                        />
                        <span onClick={toggleConfirmPass}>
                          {confirmPassVisible ? (
                            <i className="bi passwordToggler bi-eye"></i>
                          ) : (
                            <i className="bi passwordToggler bi-eye-slash"></i>
                          )}
                        </span>
                        <div className="invalid-feedback">
                          Please enter password.
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="mb-4 d-flex align-items-center justify-content-between">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="signupCheckTextCheckbox"
                            data-gtm-form-interact-field-id="1"
                          />
                          <label
                            className="form-check-label ms-2"
                            htmlFor="signupCheckTextCheckbox"
                          >
                            <Link className="text-decoration-none">
                              Terms of Use
                            </Link>
                            {" & "}
                            <Link className="text-decoration-none">
                              Privacy Policy
                            </Link>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="d-grid">
                      <button
                        className="btn btn-primary c-btn-back-color-set"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <span>
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="text-primary text-decoration-none"
                >
                  Sign in here.
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default SignUp;
