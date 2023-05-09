import {
  Box,
  Button,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";
import { useState } from "react";

export function CreateNewUser() {
  const [dialogVisibility, setDialogVisibility] = useState(false);
  const [registrationForm, setRegistrationForm] = useState({
    accAddr: "",
    accApi: "",
    password: "",
    nickname: ""
  });
  console.log(1, registrationForm);

  return (
    <Box
      sx={{
        width: { xs: 300 },
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Typography sx={{ mt: 2, textAlign: "center" }}>
        Enter your existing ETH account or generate new
      </Typography>
      <TextField
        label="account address"
        variant="standard"
        value={registrationForm.accAddr}
        onChange={(event) =>
          setRegistrationForm({
            ...registrationForm,
            accAddr: event.target.value
          })
        }
      />
      <TextField
        label="account API key"
        variant="standard"
        value={registrationForm.accApi}
        onChange={(event) =>
          setRegistrationForm({
            ...registrationForm,
            accApi: event.target.value
          })
        }
      />
      <TextField
        label="password"
        variant="standard"
        value={registrationForm.password}
        onChange={(event) =>
          setRegistrationForm({
            ...registrationForm,
            password: event.target.value
          })
        }
      />
      <TextField
        label="nickname"
        variant="standard"
        value={registrationForm.nickname}
        onChange={(event) =>
          setRegistrationForm({
            ...registrationForm,
            nickname: event.target.value
          })
        }
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Button sx={{ mt: 1 }} variant="contained">
          Create New User
        </Button>
        <Button variant="outlined" onClick={() => setDialogVisibility(true)}>
          generate
        </Button>
        <GenerateEthAccountDialog
          open={dialogVisibility}
          onClose={() => setDialogVisibility(false)}
        />
      </Box>
    </Box>
  );
}

const GenerateEthAccountDialog = (props) => {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>Successfully created new ETH Account</DialogTitle>
      <DialogContent>
        Please do not forgot to notate ETH account address and API key. In order
        to recover losted password or username
      </DialogContent>
      <DialogContent dividers={true}>xxxxxxxxxxx</DialogContent>
      <DialogContent dividers={true}>yyyyyyyyyyy</DialogContent>
      <DialogActions>
        <Button onClick={() => console.log("Agree")}>
          Agree and save account
        </Button>
      </DialogActions>
    </Dialog>
  );
};
