import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import twitter from "../../Image/icon/twitter.png";
import telegram from "../../Image/icon/telegram.png";
import letter from "../../Image/icon/letter.png";
import { useState } from 'react'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import "./index.css";

const Task = () => {
  
  const [image, setImage] = useState(null)
  const [fileName, setFileName] = useState("")
  return (
    <div className="mmittooken_bg">
      <h1
        style={{
          textAlign: "center",
          color: "rgb(255,199,0)",
          fontFamily: "Times New Roman, Times, serif",
          marginBottom: "50px",
          paddingTop: "5%",
        }}
      >
        Task
      </h1>
      <Container>
        <Grid container style={{ justifyContent: "center" }}>
          <Grid item lg={6} md={7} sm={9} xs={12} className="mmit_token_main">
            <Grid
              container
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                marginBottom: "20px",
                marginTop: "30px",
              }}
            >
              <Grid item lg={1} md={1} sm={1} xs={1}>
                <img src={twitter} alt="" className="mmit_icon" />
              </Grid>
              <Grid item lg={1} md={0.5} sm={0.1}></Grid>
              <Grid item lg={8} md={8.5} sm={8.4} xs={8}>
                <p id="task_text">
                  <b>Follow Us On Twitter To Get *3</b>
                </p>
              </Grid>
              <Grid
                item
                lg={2}
                md={2}
                sm={2.5}
                xs={3}
                style={{
                  backgroundColor: "rgb(255,199,0)",

                  borderRadius: "15px",
                }}
              >
                <p className="text_coin">
                  <b>1Coin</b>
                </p>
              </Grid>
            </Grid>

            <Grid
              container
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            >
              <Grid item lg={1} md={1} sm={1} xs={1}>
                <img src={telegram} alt="" className="mmit_icon" />
              </Grid>
              <Grid item lg={1} md={0.5} sm={0.1}></Grid>
              <Grid item lg={8} md={8.5} sm={8.4} xs={8}>
                <p id="task_text">
                  <b>Join Us On Telegram To Get *3</b>
                </p>
              </Grid>
              <Grid
                item
                lg={2}
                md={2}
                sm={2.5}
                xs={3}
                style={{
                  backgroundColor: "rgb(255,199,0)",

                  borderRadius: "15px",
                }}
              >
                <p className="text_coin">
                  <b> 1 Coin</b>
                </p>
              </Grid>
            </Grid>

            <Grid
              container
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            >
              <Grid item lg={1} md={1} sm={1} xs={1}>
              </Grid>
              <Grid item lg={1} md={0.5} sm={0.1}></Grid>
              <Grid item lg={8} md={8.5} sm={8.4} xs={8}>
                <p id="task_text">
                  <b>Share With Your Friends *3</b>
                </p>
              </Grid>
              <Grid
                item
                lg={2}
                md={2}
                sm={2.5}
                xs={3}
                style={{
                  backgroundColor: "rgb(255,199,0)",

                  borderRadius: "15px",
                }}
              >
                <p className="text_coin">
                  <b> 1 Coin</b>
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container style={{ justifyContent: "center" }}>
          <Grid item lg={5.2} md={6.5} sm={7} xs={12} style={{marginTop:'5%'}}>
          
           <main>
      <form
      onClick={() => document.querySelector(".input-field").click()}
      >
        <input type="file" accept='image/*' className='input-field' hidden 
        onChange={({ target: {files}}) => {
          files[0] && setFileName(files[0].name)
          if(files){
            setImage(URL.createObjectURL(files[0]))
          }
        }}
         />

        {image ?
        <img src={image} width={150} height={150} alt={fileName} />
        : 
        <>
        <MdCloudUpload color='rgb(255, 199, 0)' size={60} />
        <p style={{color:'white'}}><b>Browse Files to upload</b></p>
        </>
      }

      </form>

      <section className='uploaded-row'>
        {/* <AiFillFileImage color='#1475cf' /> */}
        <span className='upload-content'>
          {fileName}
        </span>
      </section>

    </main>
          </Grid>
        </Grid>
        <h1
          style={{
            textAlign: "center",
            color: "rgb(255,199,0)",
            fontFamily: "Times New Roman, Times, serif",
            marginBottom: "50px",
            paddingTop: "5%",
          }}
        >
          WHITE PAPER
        </h1>
        <Grid container style={{ justifyContent: "center" }}>
          <Grid item lg={4} md={5} sm={6} xs={12}>
            <Button
              style={{
                backgroundColor: "rgb(122,0,255)",
                width: "100%",
                marginTop: "-20px",
                borderRadius: "12px",
                color: "white",
                paddingTop: "20px",
                paddingBottom: "15px",
                fontSize: "20px",
              }}
            >
              <b>Read WhitePaper</b>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Task;
