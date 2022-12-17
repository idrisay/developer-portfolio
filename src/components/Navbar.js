import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink, useNavigate } from "react-router-dom";
import WebhookIcon from "@mui/icons-material/Webhook";
import profileImage from "../assets/profile.jpeg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const pages = [
  { name: "About", link: "about" },
  { name: "Projects", link: "projects" },
];
const socials = [
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/idris-ay/",
    icon: <LinkedInIcon sx={{ color: "inherit" }} />,
  },
  {
    name: "Github",
    url: "https://github.com/idrisay",
    icon: <GitHubIcon sx={{ color: "inherit" }} />,
  },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate()

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

  const handleNav = (newurl) => {
    navigate(newurl)
  }

  return (
    <AppBar sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }} position="fixed">
      <Container maxWidth="xl">
        <Toolbar sx={{ color: "white" }} disableGutters>
          <NavLink to={"/"}>
            <WebhookIcon
              sx={{
                display: { xs: "none", md: "flex", color: "white" },
                mr: 1,
              }}
            />
          </NavLink>
          <NavLink to={"/"}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              Idris Ay
            </Typography>
          </NavLink>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => {
                    handleNav(page.link);
                    handleCloseNavMenu();
                  }}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            // containerelement={<NavLink to={"/"} />}
            // component={NavLink}
            as={NavLink}
            to="/"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              alignItems: "center",
            }}
          >
            <WebhookIcon sx={{ mr: 1, color: "white" }} />
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              Idris Ay
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLink key={page.name} to={page.link} sx={{}}>
                <Typography
                  sx={{
                    margin: "5px 10px 0px 0px",
                    color: "white",
                    fontSize: "1.25rem",
                  }}
                >
                  {page.name}
                </Typography>
              </NavLink>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
            }}
          >
            <Toolbar sx={{ display: { xs: "none", md: "flex" } }}>
              {socials.map((item) => (
                <Box
                  key={item.name}
                  sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    margin: "10px",
                  }}
                >
                  <a
                    rel="noreferrer"
                    target="_blank"
                    sx={{ textDecoration: "none" }}
                    href={item.url}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                      }}
                    >
                      {item.icon}
                    </Box>
                  </a>
                </Box>
              ))}
            </Toolbar>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Tooltip title="Social Accounts">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={profileImage} />
                </IconButton>
              </Tooltip>
            </Box>
            <IconButton
              sx={{
                p: 0,
                display: { xs: "none", md: "block", cursor: "default" },
              }}
              onClick={handleOpenUserMenu}
            >
              <Avatar alt="Remy Sharp" src={profileImage} />
            </IconButton>
            <Menu
              sx={{ mt: "45px", display: { xs: "block", md: "none" } }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {socials.map((social) => (
                <a
                  key={social.name}
                  target="_blank"
                  rel="noreferrer"
                  href={social.url}
                >
                  <MenuItem
                    sx={{ color: "black" }}
                    onClick={handleCloseUserMenu}
                  >
                    <Box sx={{ margin: "3px 5px 0px 0px" }}>{social.icon}</Box>
                    <Typography textAlign="center">{social.name}</Typography>
                  </MenuItem>
                </a>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
