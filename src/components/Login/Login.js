import { Link } from "react-router-dom";
import bookImg from "../../assets/books.png";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const Login = () => {
  const renderTooltip = (props) => (
    <Tooltip id="link-tooltip" {...props}>
      Go to the homepage
    </Tooltip>
  );

  return (
    <main>
      <section className="container d-flex flex-column vh-100">
        <div className="row align-items-center justify-content-center g-0 h-100">
          <div className="col-lg-5 col-md-8 py-8 py-xl-0">
            <div className="card shadow">
              <img
                src={bookImg}
                className="img-fluid mx-auto d-block rounded-top"
              />
              <div className="card-body p-6 d-flex flex-column gap-4">
                <div>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                    popperConfig={{
                      modifiers: [
                        {
                          name: "offset",
                          options: {
                            offset: [0, 20], //Adjusts the tooltip 20px higher
                          },
                        },
                      ],
                    }}
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
                  <div className="d-flex flex-column gap-1 mt-4">
                    <h1 className="mb-0 fs-2 fw-medium">Sign in</h1>
                    <span>
                      Don't have an account?
                      <Link
                        to={"/signup"}
                        className="ms-1 text-decoration-none"
                      >
                        {" "}
                        Sign up
                      </Link>
                    </span>
                  </div>
                </div>
                {/* Form */}
                <form className="needs-validation" noValidate>
                  {/* Username */}
                  <div className="mb-3">
                    <label for="signInEmail" className="form-label">
                      Username or email
                    </label>
                    <input
                      type="email"
                      id="signInEmail"
                      className="form-control"
                      name="signInEmail"
                      placeholder="Email address here"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter valid username.
                    </div>
                  </div>
                  {/* Password */}
                  <div className="mb-3">
                    <label for="signInPassword" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="signInPassword"
                      className="form-control"
                      name="signInPassword"
                      placeholder="**************"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter valid feedback.
                    </div>
                  </div>
                  {/* Checkbox */}
                  <div className="d-lg-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="rememberme"
                        required
                      />
                      <label className="form-check-label" for="rememberme">
                        Remember me
                      </label>
                      <div className="invalid-feedback">
                        You must agree before submitting.
                      </div>
                    </div>
                    <div>
                      <Link className="text-decoration-none">
                        Forget your password?
                      </Link>
                    </div>
                  </div>
                  <div>
                    {/* Button */}
                    <div className="d-grid">
                      <button
                        type="submit"
                        className="btn btn-primary c-btn-back-color-set"
                      >
                        Sign in
                      </button>
                    </div>
                    {/* <hr className="my-4"></hr> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
