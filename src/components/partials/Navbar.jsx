import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import theme from "../../theme";
import { Link } from "react-router-dom";
import { effects } from "../../theme";
import { Container } from "@mui/material";

const pages = ["Sobre este proyecto", "Contacto"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Box display="flex" width="100%">
        <AppBar
          position="static"
          sx={{ width: "100%", backgroundColor: "#000000", padding: "50px" }}
        >
          <Container>
            <Box
              display="flex"
              justifyContent="space-between"
              sx={{
                backgroundColor: "rgb(0,0,0)",
              }}
            >
              <Box>
                <Link to="/" className="link-none">
                  <img
                    className={effects.zoom}
                    style={{ width: "250px" }}
                    srcSet={require("../../assets/img/Hackflix-Icon.png")}
                    alt="hackflix-logo"
                  />
                </Link>
              </Box>
              <Box
                display="flex"
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
              >
                <Box display="flex" sx={{ padding: "15px" }}>
                  <Typography className={effects.zoom}></Typography>
                </Box>
                <Box display="flex" sx={{ padding: "15px" }}>
                  <Typography className={effects.zoom}>
                    <Link
                      to="/about"
                      className="link-none"
                      style={{
                        textDecoration: "none",
                        color: "#F5F5F0",
                        fontSize: "20px",
                      }}
                    >
                      Sobre este proyecto
                    </Link>
                  </Typography>
                </Box>
                <Box display="flex" sx={{ padding: "15px" }}>
                  <Typography className={effects.zoom}>
                    <Link
                      to="/contact"
                      className="link-none"
                      style={{
                        textDecoration: "none",
                        color: "#F5F5F0",
                        fontSize: "20px",
                      }}
                    >
                      Contacto
                    </Link>
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "flex",
                    md: "none",
                  },
                  justifyContent: { xs: "flex-end" },
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "flex", md: "none" },
                    justifyContent: { xs: "flex-end" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
          </Container>
        </AppBar>
      </Box>
    </>
  );
};
export default Navbar;
