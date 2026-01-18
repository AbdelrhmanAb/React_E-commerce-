// ContactPage.jsx
import React from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Paper,
  IconButton,
  Link,
  Divider
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone,
  LocationOn
} from '@mui/icons-material';

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Paper elevation={4} sx={{ p: 5, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          تواصل معنا
        </Typography>

        <Typography variant="body1" color="text.secondary" gutterBottom>
          نحن هنا للإجابة على جميع استفساراتك. لا تتردد في التواصل معنا عبر النموذج أو من خلال وسائل التواصل الاجتماعي.
        </Typography>

        <Box component="form" noValidate autoComplete="off" sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="الاسم الكامل" variant="outlined" required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="البريد الإلكتروني" variant="outlined" required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="الموضوع" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="الرسالة"
                variant="outlined"
                multiline
                rows={5}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" size="large">
                إرسال الرسالة
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h6" gutterBottom>
          معلومات التواصل
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center">
              <Email sx={{ mr: 1 }} color="primary" />
              <Typography variant="body2">bwsbssnnbdddn@gmail.com</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center">
              <Phone sx={{ mr: 1 }} color="primary" />
              <Typography variant="body2">+20 1026431290</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center">
              <LocationOn sx={{ mr: 1 }} color="primary" />
              <Typography variant="body2">الإسكندرية، مصر</Typography>
            </Box>
          </Grid>
        </Grid>

        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            تابعنا على وسائل التواصل
          </Typography>
          <Box>
            <IconButton component={Link} href="https://facebook.com" target="_blank">
              <Facebook color="primary" />
            </IconButton>
            <IconButton component={Link} href="https://twitter.com" target="_blank">
              <Twitter color="primary" />
            </IconButton>
            <IconButton component={Link} href="https://instagram.com" target="_blank">
              <Instagram color="primary" />
            </IconButton>
            <IconButton component={Link} href="https://linkedin.com" target="_blank">
              <LinkedIn color="primary" />
            </IconButton>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Contact;