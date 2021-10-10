import { useState } from "react";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { Typography, Menu, MenuItem, makeStyles } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles({
  component: {
    marginTop: "42px",
  },
});
const Profile = ({ account, setAccount }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };
  const logout = () => {
    setAccount(false);
  };
  return (
    <div>
      <Typography
        style={{ fontWeight: 600, cursor: "pointer", margin: 0 }}
        onClick={handleClick}
      >
        {account}
      </Typography>
      <Menu
        id="simple-menu"
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        className={classes.component}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          <PowerSettingsNewIcon
            style={{
              fontSize: "large",
              margin: "10px",
              marginTop: 0,
              marginBottom: 0,
            }}
          />
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Profile;
