import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Sidebar from "../scenes/global/Sidebar";
import Topbar from "../scenes/global/Topbar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const ProtectedLayout = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Topbar />
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default ProtectedLayout;
