import {
  Box,
  Container,
  Typography,
  Button,
} from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
      }}
    >
      <Container sx={{ textAlign: "center" }}>
        <SentimentDissatisfiedIcon
          sx={{ fontSize: 90, color: "text.secondary" }}
        />

        <Typography
          variant="h1"
          fontWeight="bold"
          sx={{ mt: 2 }}
        >
          404
        </Typography>

        <Typography variant="h5" sx={{ mb: 2 }}>
          الصفحة غير موجودة
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          عذرًا، الصفحة التي تحاول الوصول إليها غير متاحة
        </Typography>

        <Button
          component={Link}
          to="/"
          variant="contained"
          size="large"
        >
          العودة إلى الصفحة الرئيسية
        </Button>
      </Container>
    </Box>
  );
}
