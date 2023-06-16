import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import {Box,Typography,useTheme,useMediaQuery,TextField,Button,Alert,Collapse, Card} from "@mui/material";

const Paragraph = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  //media
  const isNotMobile = useMediaQuery("(min-width: 1000px)");
  // states
  const [text, settext] = useState("");
  const [para, setPara] = useState("");
  const [error, setError] = useState("");

  //Summary ctrl
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const { data } =await axios.post("/api/v1/openai/paragraph", { text});
      console.log(data);
      setPara(data);
    } catch (err) {
      console.log(err);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <Box
      width={isNotMobile ? "40%" : "80%"}
      p={"2rem"}
      m={"2rem auto"}
      borderRadius={5}
      sx={{ boxShadow: 5 }}
      backgroundColor={theme.palette.background.default}
    >
      <Collapse in={error}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      </Collapse>
      <form onSubmit={handleSubmit}>
        <Typography variant="h3">Words to Paragraph</Typography>

        <TextField
          placeholder="Paste or type your text here"
          type="text"
          multiline={true}
          required
          margin="normal"
          fullWidth
          value={text}
          onChange={(e) => {
            settext(e.target.value);
          }}
        />
        
        <Button type='submit' fullWidth variant='contained' size='large' sx={{backgroundColor: theme.palette.background.alt, color:'white', mt:2, '&:hover':{backgroundColor:theme.palette.background.basic} }}> 
          Generate Paragraph
        </Button>

        <Typography mt={2}>
            Not the right tool? <Link to="/homepage">Go Back</Link>
        </Typography>
      </form>

      {para ? (
        <Card sx={{mt: 4,border: 1,boxShadow: 0,height: "500px",borderRadius: 5,borderColor: "natural.medium",bgcolor: "background.default",}}>
          <Typography p={2}>{para}</Typography>
        </Card>
      ) : (
        <Card sx={{mt: 4,border: 1,boxShadow: 0,height: "500px",borderRadius: 5,borderColor: "natural.medium",bgcolor: "background.default",}}>
          <Typography variant="h6" color="natural.main" sx={{textAlign: "center", verticalAlign: "middel", lineHeight: "450px",fontStyle: "italic"}}>
           paragraph will be displayed here
          </Typography>
        </Card>
      )}
    </Box>
  );
};

export default Paragraph;