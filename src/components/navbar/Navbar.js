import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import navlogo from "../images/navlogo.png";
import '../navbar/Navbar.css'

export default function SearchAppBar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar sx={{ bgcolor: "#fddf3d" }} >
        <Toolbar id="res"  className="fixed flex flex-row justify-between">
          <div id="div1" className="flex flex-row">
            <IconButton
              style={{ color: "black" }}
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <img src={navlogo} width={232} height={62} />
          </div>
          <div className="flex flex-row justify-around">
            <button
              style={{ backgroundColor: "rgb(243, 102, 56)" }}
              class="flex text-sm text-white font-sans py-2 px-4 rounded-full text-center"
            >
              TALK TO UBERGRAD COUNSELLER
            </button>
            <a className='mr-3 pl-5 text-lg text-black text-bold' href="#">Login</a>
            <a className='mr-2 text-lg text-black text-semibold' href="#">/</a>
            <a className='mr-4 text-lg text-black text-semibold' href="#">Signup</a>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
