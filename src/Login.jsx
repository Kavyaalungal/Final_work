import React from 'react';
import { CCard, CButton } from '@coreui/react';
import { TextField, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import custom CSS for Login page

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission
    // Perform login logic (e.g., API call, validation)
    // Assuming login is successful
    onLogin(); // Update parent component state to set isLoggedIn to true
    navigate('/home'); // Navigate to the home page
  };

  return (
    <CCard className="login-card">
      <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
        <div className="row g-0 justify-content-center align-items-center w-100">
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <div className="content-wrapper p-4">
              <div className="text-center mb-4">
                <a href="/" className="authentication-logo">
                  <img
                    src="assets/images/logo-dark.png"
                    alt="Logo Dark"
                    height={40}
                    className="auth-logo mx-auto"
                  />
                </a>
              </div>
              <form onSubmit={handleLogin}>
                <div className="mb-3 auth-form-group-custom">
                  <i className="ri-user-2-line auti-custom-input-icon"></i>
                  <TextField
                    id="username"
                    label="Username"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '16px' } }}
                    style={{ marginTop: '10px' }}
                  />
                </div>
                <div className="mb-3 auth-form-group-custom">
                  <i className="ri-lock-2-line auti-custom-input-icon"></i>
                  <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    size="small"
                    fullWidth
                    type="password"
                    InputLabelProps={{ style: { fontSize: '16px' } }}
                    style={{ marginTop: '10px' }}
                  />
                </div>
                <div className="mt-4 text-center">
                  <Grid container justifyContent="center">
                    <Grid item xs={12} sm={6}>
                      <CButton
                        color="primary"
                        onClick={handleLogin}
                        className="login-button"
                      >
                        Log In
                      </CButton>
                    </Grid>
                  </Grid>
                </div>
                <div className="mt-4 text-center">
                  <a href="auth-recoverpw.html" className="text-muted">
                    {/* <i className="mdi mdi-lock me-1"></i> Forgot your password? */}
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </CCard>
  );
};

export default Login;
