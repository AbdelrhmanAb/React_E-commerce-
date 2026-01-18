import { Typography } from "@mui/material";
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress';



export default function Loading(){
   return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <CircularProgress size={80} color="primary" />
        <Typography variant="h6" sx={{ mt: 2 }}>
          جاري تحميل المنتجات...
        </Typography>
      </Box>
    );
}