// import Footer from "../componant/Footer"

/////////// /////////////////// ////////////// /////////////////
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import Container from '@mui/material/Container';

const heights = [150, 300, 190, 270, 110, 150, 130, 180, 250, 190, 200, 150, 230, 150, 180];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: (theme.vars || theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
    overflow:"hidden"
  }),
}));



export default function Shop(){

 return (
    <Container sx={{mt:"150px"}}>
    <Box sx={{ width: "100%", }}>
      <Masonry
        columns={4}
        spacing={2}
        // defaultHeight={}
        defaultColumns={4}
        defaultSpacing={1}
      >
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            {index + 1}
          </Item>
        ))}
      </Masonry>
    </Box>
    </Container>
  );

}