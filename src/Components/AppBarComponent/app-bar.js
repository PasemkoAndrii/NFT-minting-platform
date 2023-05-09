import {
  AppBar,
  MenuItem,
  Toolbar,
  Typography,
  Box,
  Button
} from "@mui/material";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";

export function ResponsiveAppBar(props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ mr: 3 }}>
          NFT Wallet
        </Typography>

        <MenuItem component={Link} to="/">
          Main
        </MenuItem>
        <MenuItem component={Link} to="/minte-new-token">
          Mint New Token
        </MenuItem>

        <Box sx={{ flexGrow: 1, bgcolor: "grey" }}></Box>

        <LoginDashboardButton toggleVariant={props.userLoginInfo} />
      </Toolbar>
    </AppBar>
  );
}

const LoginDashboardButton = (props) => {
  if (props.toggleVariant.isLogined === true) {
    return (
      <MenuItem component={Link} to="/dashboard-page">
        Dashboard
      </MenuItem>
    );
  }

  return (
    <MenuItem component={Link} to="/login-page">
      Login
    </MenuItem>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLogin: () =>
      dispatch({ type: "USER_LOGIN_EVENT", payload: { name: "And" } })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveAppBar);
