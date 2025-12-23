import Box from '@mui/material/Box'
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import CardActionArea from '@mui/material/CardActionArea';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import backgroundimg from "../assets/images/generative-ai-cloth-store-aesthetic-background-of-clothes-hanging-on-hangers-muted-neutral-colors-photo.jpg"

///////////////////////////////// //////////////// ///////////////// /////////
import { useEffect, useState } from 'react'
import getProduct from '../services/api'
import { getProductCard } from '../services/api';
import Paper from '@mui/material/Paper'


import React from "react";
import Slider from "react-slick";
import Container from '@mui/material/Container';

////////////// ///////////// //////// //////////




function ProductCarousel() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProduct();
            setProducts(data);
        };

        fetchData();

    }, [])



    const settings = {
        dots: true,            // نقاط التنقل أسفل Carousel
        infinite: true,        // تكرار لا نهائي
        speed: 500,            // سرعة الحركة
        slidesToShow: 4,       // عدد العناصر الظاهرة في نفس الوقت
        slidesToScroll: 1,     // عدد العناصر التي تتحرك عند السحب
        autoplay: true,        // تشغيل تلقائي
        autoplaySpeed: 3000,   // كل 3 ثواني
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    if (products) {


        return (
            <Box sx={{ m: 4 }}>
                <Slider {...settings}>
                    {products.map((product) => (
                        <Card key={product.id} sx={{ m: 1 }}>
                            <CardMedia
                                component="img"
                                height="340"
                                width={"100%"}
                                image={product.images[0]}
                                alt={product.title}
                            />
                            <CardContent>
                                <Typography variant="h6">{product.title}</Typography>
                                <Typography variant="subtitle1">${product.price}</Typography>
                                <Button variant="contained" color="primary" fullWidth sx={{ mt: 1 }}>
                                    Add to Cart
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </Slider>
            </Box>
        );
    }
}



export default function Home() {

    const [productsGrid, setProductsGrid] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProductCard()
            setProductsGrid(data)
        }
        fetchData()

    }, [])


    // console.log(prods);





    return (
        <>
            <Box
                sx={{
                    width: "100vw",
                    height: "2200px",
                    background: "#fffffdff"

                }}

            >
                <Box
                    sx={{
                        width: "100hw",
                        height: "100vh",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(${backgroundimg})`,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <div style={{ width: "26rem" }} >
                        <Typography sx={{ fontSize: "60px", mb: "20px", fontWeight: "900" }} color="warning" variant="h3" >new fashion</Typography>
                        <Typography sx={{ fontSize: "22px", fontWeight: "700" }} color="#fff" variant="body1" >new fashionf ashi onfashion
                            fashio nfashio nfashionfas
                            hionfa shion fashi onfashionfashio
                            nfashion</Typography>
                    </div>
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        height: "atue",
                        mt: "50px",
                        p: "20px"
                    }}
                >
                    <div style={{ width: "" }} >
                        <Typography sx={{ fontSize: "60px", mb: "20px", fontWeight: "900", }} color="textPrimary" variant="h3" >new fashion</Typography>
                        <Typography sx={{ fontSize: "22px", fontWeight: "700", mb: "30px" }} color="textSecondary" variant="body1" >new fash
                            ionf ashi onfashion fashio nfashio nfashionfas
                            hionfa shion fashi onfashionfashio
                            nfashion</Typography>
                        <Divider variant="middle" />

                    </div>
                    <ProductCarousel />
                </Box>
                <Container>
                    <div style={{ width: "" }} >
                        <Typography sx={{ fontSize: "60px", mb: "20px", fontWeight: "900", }} color="textPrimary" variant="h3" >new fashion</Typography>
                        <Typography sx={{ fontSize: "22px", fontWeight: "700", mb: "30px" }} color="textSecondary" variant="body1" >new fash
                            ionf ashi onfashion fashio nfashio nfashionfas
                            hionfa shion fashi onfashionfashio
                            nfashion</Typography>


                    </div>
                    <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                        {productsGrid.map((product) => {

                            return (<Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                {/* <Item> */}
                                <Card key={product.id} sx={{ height: "720px" }}>
                                    <CardActionArea>
                                        <div style={{ overflow: "hidden" }}>
                                            <CardMedia
                                                component="img"
                                                height="400"
                                                image={product.image}
                                                alt="green iguana"
                                                sx={{ "&:hover": { scale: .9, rotate: "10deg" }, transition: ".5s" }}
                                            />
                                        </div>
                                        <CardContent>
                                            <Typography sx={{ height: "60px", overflow: "hidden" }} gutterBottom variant="h5" component="div">
                                                {product.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary', overflow: "hidden", height: "80px" }}>
                                                {product.description}
                                            </Typography>

                                        </CardContent>
                                        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Typography variant="body1" sx={{ color: 'text.secondary', overflow: "hidden" }}>
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
                                    </CardActionArea>
                                    <CardContent>
                                        <Button variant="contained" color="primary" fullWidth sx={{ mt: 1 }}>
                                            Add to Cart
                                        </Button>
                                    </CardContent>
                                </Card>

                                {/* </Item> */}
                            </Grid>)
                        })}
                    </Grid>
                </Container>

            </Box>

        </>
    )
}

