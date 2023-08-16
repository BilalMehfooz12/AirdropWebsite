import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import logo from "../../Image/logo.png";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./index.css";
const Header = () => {
  return (
    <div >
        <Grid container>
        <Grid item lg={10} md={10} xs={9} style={{ marginTop: "50px" }}>
            <Grid container className="header_top_main">
              <Grid item lg={1.5} xs={2} className="Header_Top_img">
                <img src={logo} alt="" />
              </Grid>

              <Grid item lg={8} xs={9.5} className="header_top_h1">
                <h2
                  style={{
                    width: "65%",
                    paddingTop: "30px",
                    marginTop:'4%',
                    marginLeft:'5px',
                    color:'rgb(255,199,0)'
                  }}
                  id="header_m_h1"
                >
                  <b>Join The Biggest Air drop</b>
                </h2>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={1.5} md={1.5} sm={2} xs={2}>
                    <Button
                      variant="outlined"
                      style={{
                        color: "white",
                        backgroundColor:'rgb(255,199,0)',
                        border:'1px solid rgb(255,199,0)',
                        marginTop:'60%',
                        borderRadius:'5px',
                        color:'black'
                      }}
                      id="header_btn_resp"
                    >
                      Login
                    </Button>
                  </Grid>
        </Grid>
    <nav
          class="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "rgb(255,122,0)",borderRadius:'15px' }}
        >
          <div class="container-fluid">
     
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <Container>
                <Grid container>
                  <Grid item lg={1.2}></Grid>
                  <Grid item lg={2} md={2} sm={1.5} xs={12}>
                    <p style={{ color: "white",marginBottom:'1px',marginTop:'5px' }} id="header_text_resp">
                      <b >HOME</b>
                    </p>
                  </Grid>
                  <Grid item lg={2} md={2} sm={2.4} xs={12}>
                    <p style={{ color: "white",marginBottom:'1px',marginTop:'5px'  }} id="header_text_resp">
                      <a
                        href="#why_bgvt"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <b>ABOUT US</b>
                      </a>
                    </p>
                  </Grid>
                  <Grid item lg={2} md={2} sm={2} xs={12}>
                    <p style={{ color: "white",marginBottom:'1px',marginTop:'5px'  }} id="header_text_resp">
                      <a
                        href="#bit_game"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <b>TASK</b>
                      </a>
                    </p>
                  </Grid>
                  <Grid item lg={2} md={2} sm={2.5} xs={12}>
                    <p style={{ color: "white",marginBottom:'1px',marginTop:'5px'  }} id="header_text_resp">
                      <a
                        href="#benifts"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <b>ROADMAP</b>
                      </a>
                    </p>
                  </Grid>
                  <Grid item lg={2} md={2} sm={2.5} xs={12}>
                    <p style={{ color: "white" ,marginBottom:'3px',marginTop:'5px' }} id="header_text_resp">
                      <a
                        href="#raod_map"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <b>WHITE PAPER</b>
                      </a>
                    </p>
                  </Grid>
              
                </Grid>
              </Container>
              {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul> */}
            </div>
          </div>
        </nav>
    </div>
  );
};

export default Header;
