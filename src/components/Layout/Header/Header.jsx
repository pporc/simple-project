import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectAccount, setAccountAction } from "../../../store/auth";

export const Header = () => {
  const account = useSelector(selectAccount);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(setAccountAction({}));
  };

  return (
    <Box sx={{ flexGrow: 1 }} className="header">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" color="inherit">
              Home
            </Link>
          </Typography>

          {Object.keys(account).length === 0 ? (
            <>
              <Button color="inherit">
                <Link to="/login">Login</Link>
              </Button>
              <Button color="inherit">
                <Link to="/sign-up">Sign up</Link>
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit">
                <Link to="/post/create">Create Post</Link>
              </Button>
              <Button color="inherit" onClick={logoutHandler}>
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
