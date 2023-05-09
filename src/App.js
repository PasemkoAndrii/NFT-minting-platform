import { Box, Divider, Typography } from "@mui/material/";
import { contractAddress } from "./Contract/contract-params";
import { NewTokenSubmitioningForm } from "./Components/MintNewTokenComponent/mint-new-token-submit-form";
import { NFTImageListComponent } from "./Components/ImageListComponent/nft-imge-list";
import ResponsiveAppBar from "./Components/AppBarComponent/app-bar";
import { Routes, Route } from "react-router-dom";
import LoginComponent from "./Components/LoginComponent/login-page";
import { CreateNewUser } from "./Components/LoginComponent/CreateNewUser/create-new-user";
import UserDashboard from "./Components/LoginComponent/user-dashboard/user-dashboard";

export default function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "orange",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        alignItems: "center"
      }}
    >
      <ResponsiveAppBar />
      <Box
        sx={{
          display: "fLex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          overflow: "auto",
          flexGrow: 1
        }}
      >
        <Typography sx={{ margin: 1 }}>Contract: {contractAddress}</Typography>
        <Divider sx={{ width: "100%" }} />
        <Routes>
          <Route path="/" element={<NFTImageListComponent />} />
          <Route
            path="/minte-new-token"
            element={<NewTokenSubmitioningForm />}
          />
          <Route path="/login-page" element={<LoginComponent />} />
          <Route path="/create-new-user" element={<CreateNewUser />} />
          <Route path="/dashboard-page" element={<UserDashboard />} />
        </Routes>
      </Box>
    </Box>
  );
}
