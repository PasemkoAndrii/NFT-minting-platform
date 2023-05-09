import { Box, Button, TextField, Typography } from "@mui/material";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function LoginComponent(props) {
  console.log(props.first);
  return (
    <Box
      sx={{
        width: { xs: 300 },
        display: "flex",
        flexDirection: "column"
      }}
    >
      <TextField variant="standard" label="account" />
      <TextField variant="standard" label="password" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Button
          sx={{ mt: 1 }}
          variant="outlined"
          component={Link}
          to="/create-new-user"
        >
          Create User
        </Button>
        <Typography sx={{ alignSelf: "center" }} variant="h6">
          or
        </Typography>

        <Button
          sx={{ mt: 1 }}
          variant="contained"
          onClick={() => props.first("xxxxx")}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  //dispatch({ type: "USER_LOGIN", payload: 333 });
  return {
    first: (acc) =>
      dispatch({ type: "USER_LOGIN_EVENT", payload: { accountAddress: acc } })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
