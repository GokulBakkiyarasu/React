import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Link } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { Search, SearchIconWrapper, StyledInputBase } from "../styles/navbar";
import "../styles/navbar.css";

export default function PrimaryAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link href="/" style={{ textDecoration: "none", color: "black" }}>
        <MenuItem>
          <Badge badgeContent={4} color="error">
            <FavoriteBorderIcon />
          </Badge>
          <p>Wishlist</p>
        </MenuItem>
      </Link>

      <Link href="/" style={{ textDecoration: "none", color: "black" }}>
        <MenuItem>
          <Badge badgeContent={17} color="error">
            <ShoppingCartIcon />
          </Badge>
          <p>Cart</p>
        </MenuItem>
      </Link>
      <Link href="/" style={{ textDecoration: "none", color: "black" }}>
        <MenuItem>
          <LoginOutlinedIcon />
          <p>Login</p>
        </MenuItem>
      </Link>

      <Link href="/" style={{ textDecoration: "none", color: "black" }}>
        <MenuItem>
          <AccountCircle />
          <p>Signup</p>
        </MenuItem>
      </Link>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "white",
          height: "100px",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            style={{ color: "black", fontWeight: "bold" }}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Company Name
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon style={{ color: "black" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <FavoriteBorderIcon style={{ color: "black" }} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <ShoppingCartIcon
                  style={{ color: "black", marginLeft: "10px" }}
                />
              </Badge>
            </IconButton>
            <div className="login-container">
              <AccountCircle style={{ color: "black", marginLeft: "10px" }} />
              <Link href="/login">Login</Link>
              <p
                style={{
                  color: "black",
                  fontWeight: "bold",
                  marginLeft: "5px",
                }}
              >
                /
              </p>
              <Link href="/login">Signup</Link>
            </div>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon style={{ color: "black" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
