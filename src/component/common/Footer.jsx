import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import { Grid } from "@mui/material";

function Footer() {
  return (
    <AppBar position="static" sx={{ position: "fixed", bottom: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: "grid" }}>
          <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex" }}>
              <AdbIcon sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                © 2023 Adesh, LLC. All rights reserved.
              </Typography>
            </Box>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Footer;
