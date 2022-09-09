import { ShoppingBag, AccountCircle } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Container,
  css,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

export const AppHeader = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          css={css`
            font-size: 1.5rem;
            align-items: center;
          `}
        >
          <Typography flexGrow="1" variant="h3">
            Sports
          </Typography>
          <Box>
            <IconButton color="inherit">
              <ShoppingBag />
            </IconButton>
            <IconButton color="inherit" onClick={handleOpenUserMenu}>
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Login</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
