import React from 'react';
import { Box, Typography, Card, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";
import ChatRounded from "@mui/icons-material/ChatRounded";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import JoinInnerIcon from '@mui/icons-material/JoinInner';


const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
    <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "75vh",
        }}
      >
    <Box sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}>
      
      {/*Text to Summary*/} 
      <Box p={2}>
          {/*<Typography variant="h4" mb={2} fontWeight="bold">
            Text Generation
  </Typography>*/}
          <Card
            onClick={() => navigate("/summary")} sx={{boxShadow: 2,borderRadius: 5,height: 190,width: 200,"&:hover": {border: 2,boxShadow: 0,borderColor: "primary.dark",cursor: "pointer",},}}>
            <DescriptionRounded
              sx={{ fontSize: 80, color: "primary.dark", mt: 2, ml: 2,  }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
               TEXT TO SUMMARY
              </Typography>
              
            </Stack>
          </Card>
        </Box>
        

        {/*Para Generation*/}
        <Box p={2}>
          {/*<Typography variant="h4" mb={2} fontWeight="bold">
            Paragraph Generation
  </Typography>*/}
          <Card
            onClick={() => navigate("/paragraph")} sx={{boxShadow: 2,borderRadius: 5,height: 190,width: 200,"&:hover": {border: 2,boxShadow: 0,borderColor: "primary.dark",cursor: "pointer",},}}>
            <FormatAlignLeftOutlined
              sx={{ fontSize: 80, color: "primary.dark", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
               WORDS TO PARAGRAPH
              </Typography>
              
            </Stack>
          </Card>
        </Box>

        {/*Grammar Correction*/}
        <Box p={2}>
          
          <Card
            onClick={() => navigate("/grammar")} sx={{boxShadow: 2,borderRadius: 5,height: 190,width: 200,"&:hover": {border: 2,boxShadow: 0,borderColor: "primary.dark",cursor: "pointer",},}}>
            <SpellcheckIcon
              sx={{fontSize: 80, color: "primary.dark", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                GRAMMAR CORRECTION
              </Typography>
              
            </Stack>
          </Card>
        </Box>

      {/*Chatbot*/}
        <Box p={2}>
          {/*<Typography variant="h4" mb={2} fontWeight="bold">
            Chatbot
          </Typography>*/}
          <Card
            onClick={() => navigate("/chatbot")} sx={{boxShadow: 2,borderRadius: 5,height: 190,width: 200,"&:hover": {border: 2,boxShadow: 0,borderColor: "primary.dark",cursor: "pointer",},}}>
            <ChatRounded
              sx={{ fontSize: 80, color: "primary.dark", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
               AI CHATBOT
              </Typography>
              
            </Stack>
          </Card>
        </Box>

        {/*Time Complexity Analysis*/}
        <Box p={2}>
          
          <Card
            onClick={() => navigate("/timecomplexity")} sx={{boxShadow: 2,borderRadius: 5,height: 190,width: 200,"&:hover": {border: 2,boxShadow: 0,borderColor: "primary.dark",cursor: "pointer",},}}>
            <AccessTimeFilledIcon
              sx={{ fontSize: 80, color: "primary.dark", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
              TIME COMPLEXITY ANALYSIS
              </Typography>
              
            </Stack>
          </Card>
        </Box>

        

        {/*SQL Queries*/}
        <Box p={2}>
          
          <Card
            onClick={() => navigate("/sql")} sx={{boxShadow: 2,borderRadius: 5,height: 190,width: 200,"&:hover": {border: 2,boxShadow: 0,borderColor: "primary.dark",cursor: "pointer",},}}>
            <JoinInnerIcon
              sx={{ fontSize: 80, color: "primary.dark", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                SQL QUERIES
              </Typography>
              
            </Stack>
          </Card>
        </Box>


      </Box>
      </Box>
        </>
  );
};

export default Homepage;