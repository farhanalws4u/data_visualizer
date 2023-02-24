import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllData, getFilteredData } from "../store/actions/dataActions";
import FilterDropDown from "../components/FilterDropDown";
import HeroSection from "../components/HeroSection";
import { Button } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { filterList } from "../utils/filtersList";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);
  console.log("global state in home", globalState);

  useEffect(() => {
    dispatch(getAllData({}));
  }, []);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleFilterAdd = () => {
    dispatch(getAllData(globalState.filters));
  };
  const handleFilterRemove = () => {
    document.location.reload();
  };

  // main drawer component
  const drawer = (
    <div>
      <Typography
        variant="h5"
        sx={{
          textAlign: "left",
          paddingTop: "6.5%",
          marginLeft: "13%",
          color: "#6e48aa",
          height: { sm: "62px", md: "62px" },
        }}
      >
        Filters
      </Typography>
      <Divider />
      <List>
        {filterList.map((list, index) => (
          <ListItem key={index} sx={{ marginLeft: "3%" }}>
            <FilterDropDown
              name={list.name}
              title={list.title}
              options={list.options}
            />
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          onClick={handleFilterAdd}
          variant="contained"
          sx={{
            backgroundColor: "#6e48aa",
            color: "#fff",
            fontWeight: "500",
            marginTop: 2,
            textTransform: "none",
            "&:hover": { background: "#6e48aa" },
          }}
        >
          Add Filters
        </Button>
        <Button
          onClick={handleFilterRemove}
          variant="contained"
          sx={{
            backgroundColor: "#6e48aa",
            color: "#fff",
            fontWeight: "500",
            marginTop: 2,
            textTransform: "none",
            "&:hover": { background: "#6e48aa" },
          }}
        >
          Remove Filters
        </Button>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#6e48aa",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          height: { sm: "62px", md: "62px", xs: "55px" },
        }}
      >
        <DashboardIcon sx={{ marginRight: "2%" }} />
        <Typography variant="h6" sx={{}}>
          Data Visualization Dashboard
        </Typography>
      </AppBar>

      {/* drawer component is redering here. */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            display: "flex",
            justifyContent: "left",
            marginTop: { xs: "4%" },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" }, marginTop: 6 }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#6e48aa",
                color: "#fff",
                fontWeight: "500",
                textTransform: "none",
                "&:hover": { background: "#6e48aa" },
              }}
            >
              Filters
            </Button>
          </IconButton>
        </Box>
        <HeroSection />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
