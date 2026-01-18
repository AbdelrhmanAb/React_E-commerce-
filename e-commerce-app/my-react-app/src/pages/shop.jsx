// import Footer from "../componant/Footer"
import useCardProducts from '../context/CardContext';

/////////// /////////////////// ////////////// /////////////////
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from '@mui/material/Divider';
import heroVideo from "../assets/videos/herovideo.mp4";

import { Link } from 'react-router-dom';

import useProducts from '../context/ProductsContext';
import useToast from '../context/ToastContext';
import useProductDetails from '../context/Detailscontext';
import Loading from '../componant/Loader';

const heights = [150, 300, 190, 270, 110, 150, 130, 180, 250, 190, 200, 150, 230, 150, 180];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: (theme.vars || theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
        overflow: "hidden"
    }),
}));



export default function Shop() {


    const {cardList,dispatch } = useCardProducts()

    const { products_2 , loading} = useProducts()

    const {ShowToast} = useToast()
    const {proId,setProId} = useProductDetails()
    
    

    const handleAddToCard = (product)=>{
        ShowToast({massege:"Addition product to Card is Success"})

        dispatch({type:"ADD",payload:{product}})
        
    }

       const handlePruductDetails = (id)=>{
        setProId(id)
        
        ShowToast({massege:"DDETAL product to Card is Success"})

    
        
    }

    
      if (loading) {
        return (
          <>
          <Loading/>
          </>
        );
      }

    return (<div style={{minHeight:"100vh"}}>
     <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* الفيديو */}
      <Box
        component="video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />

      {/* المحتوى فوق الفيديو */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        <Typography variant="h2">New Fashion</Typography>
      </Box>
    </Box>
  
        <Container sx={{ mt: "150px" }}>
            <div style={{ width: "" }} >
                <Typography sx={{ fontSize: "60px", mb: "20px", fontWeight: "900", }} color="textPrimary" variant="h3" >new fashion</Typography>
                <Typography sx={{ fontSize: "22px", fontWeight: "700", mb: "30px" }} color="textSecondary" variant="body1" >new fash
                    ionf ashi onfashion fashio nfashio nfashionfas
                    hionfa shion fashi onfashionfashio
                    nfashion</Typography>
                <Divider variant="middle" />

            </div>
            <Box sx={{ width: "100%", }}>
                <Masonry
                    columns={3}
                    spacing={2}
                    // defaultHeight={}
                    defaultColumns={4}
                    defaultSpacing={1}
                >
                    {products_2.map((product) => (
                        <Item key={product.id} sx={{ height: "400px" }}>
                            <div style={{ overflow: "hidden" }}>

                                <Card sx={{
                                    position: "relative",
                                    "&:hover .hovercontent": {
                                        height: "100%",
                                        width: "100%",
                                        opacity: "1",
                                        visibility: "visible",

                                    }
                                }} >
                                    <CardMedia
                                        component="img"
                                        height="400"
                                        image={product.image}
                                        alt="green iguana"
                                    />
                                    <CardContent
                                        className='hovercontent'
                                        sx={{
                                            position: "absolute",
                                            left: "0",
                                            bottom: "0",
                                            width: "0",
                                            height: "0px",
                                            opacity: "0",
                                            visibility: "hidden",
                                            transition: "all 0.4s ease",
                                            bgcolor: "rgba(0,0,0,0.7)",
                                            color: "#fff",

                                        }}>

                                        <CardContent>
                                            <Typography sx={{ height: "60px", overflow: "hidden" }} gutterBottom variant="h5" component="div">
                                                {product.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ overflow: "hidden", height: "80px" }}>
                                                {product.description}
                                            </Typography>

                                        </CardContent>
                                        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Typography variant="body1" sx={{ overflow: "hidden" }}>
                                                {product.price}$
                                            </Typography>
                                            <Rating
                                                name="text-feedback"
                                                value={product.rating.rate}
                                                readOnly
                                                precision={0.5}
                                                emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
                                            />

                                        </CardContent>

                                        <CardContent>
                                            <Button onClick={()=>{handleAddToCard(product)}} variant="contained" color="primary" fullWidth sx={{ mt: 1 }}>
                                                Add to Cart
                                            </Button>
                                            <Link to={`/PruductDetails/${product.id}`}>
                                             <Button onClick={()=>{handlePruductDetails(product.id)}} variant="contained" color="primary" fullWidth sx={{ mt: 1 }}>
                                                show PruductDetails
                                            </Button>
                                            </Link>
                                        </CardContent>
                                    </CardContent>

                                </Card>
                            </div>

                        </Item>
                    ))}
                </Masonry>
            </Box>
        </Container>
    </div>);

}