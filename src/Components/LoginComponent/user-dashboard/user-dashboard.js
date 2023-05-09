import { Box, Typography, Button } from "@mui/material";
import { connect } from "react-redux";

const UserDashboard = (props) => {
  return (
    <Box>
      <Typography variant="h4">Dashboard</Typography>
      <Button onClick={() => props.logOut()}>Logout</Button>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return { logOut: () => dispatch({ type: "USER_LOGOUT_EVENT" }) };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
