
const initialState = {
  user: null,
  isAuthenticated: false,
  OTPVerified: false,
  OTP_ERROR: false,
  loginError: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "USER_LOADED":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case "LOGOUT_SUCCESS":
    case "AUTH_ERROR":
    case "SIGNUP_FAIL":
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        OTPVerified: false,
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        OTPVerified: false,
        loginError:action.payload?.error
      }
    case "LOGIN_SUCCESS":
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        OTPVerified: false,
        OTP_ERROR: false,
        loginError: false,
      };
    case "SIGNUP_SUCCESS":
    return {
      ...state,
      ...action.payload,
      isAuthenticated: false,
      OTPVerified: false,
      OTP_ERROR: false,
      loginError: false,
    };
    case "OTP_SUCCESS":
    return {
      ...state,
      ...action.payload,
      isAuthenticated: true,
      OTPVerified: true,
      OTP_ERROR: false,
      loginError: false,
    };
    case "OTP_ERROR":
    return {
      ...state,
      ...action.payload,
      OTPVerified: false,
      OTP_ERROR: action.payload.error,
    };

    default:
      return state;
  }
}
