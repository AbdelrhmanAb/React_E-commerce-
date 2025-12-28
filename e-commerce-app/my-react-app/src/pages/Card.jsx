import {
    Box,
    Card,
    CardContent,
    Typography,
    IconButton,
    Button,
    Divider,
    Avatar,
    Stack,
    Container
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
// import Container from "@mui/material";
import useCardProducts from "../context/CardContext";

const CartPage = () => {
    const { cardList, dispatch } = useCardProducts()
    console.log(cardList);


    return (
        <Container>
                    <Typography variant="h5" fontWeight="bold" mb={3}>
                Shopping Cart
            </Typography>
        <Box
            sx={{
                maxWidth: "100vw",
                mx: "auto",
                
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 2
            }}
        >
    
            {cardList.map((product) => {
                return (
                    <Box key={product.id} sx={{
                background: "rgba(166, 0, 83, 0.27)",
                        
                        maxWidth: 800,
                         mx: "auto", 
                          p: "10px" ,
                          borderRadius: 3}}>


                        {/* Product Item */}
                        <Card sx={{ mb: 2, borderRadius: 3, }}>
                            <CardContent>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Avatar
                                        src={product.image}
                                        variant="rounded"
                                        sx={{ width: 80, height: 80 }}
                                    />

                                    <Box sx={{ flexGrow: 1 }}>
                                        <Typography fontWeight="bold" width={"20ch"}>
                                        {product.title}
                                        </Typography>
                                        <Typography color="text.secondary">
                                            Category
                                        </Typography>
                                        <Typography color="primary" fontWeight="bold" mt={1}>
                                            1200 EGP
                                        </Typography>
                                    </Box>

                                    {/* Quantity UI */}
                                    <Stack direction="row" alignItems="center">
                                        <IconButton>
                                            <RemoveIcon />
                                        </IconButton>

                                        <Typography mx={1}>{product.count}</Typography>

                                        <IconButton>
                                            <AddIcon />
                                        </IconButton>
                                    </Stack>

                                    <IconButton color="error">
                                        <DeleteIcon />
                                    </IconButton>
                                </Stack>
                            </CardContent>
                        </Card>

                        {/* Summary */}
                        <Card sx={{ borderRadius: 3 }}>
                            <CardContent>
                                <Stack spacing={2}>
                                    <Stack direction="row" justifyContent="space-between">
                                        <Typography>Subtotal</Typography>
                                        <Typography>1200 EGP</Typography>
                                    </Stack>

                                    <Stack direction="row" justifyContent="space-between">
                                        <Typography>Shipping</Typography>
                                        <Typography>Free</Typography>
                                    </Stack>

                                    <Divider />

                                    <Stack direction="row" justifyContent="space-between">
                                        <Typography fontWeight="bold">Total</Typography>
                                        <Typography fontWeight="bold">1200 EGP</Typography>
                                    </Stack>

                                    <Button variant="contained" size="large" fullWidth>
                                        Checkout
                                    </Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                )
            })}

        </Box>
        </Container>
    );
};

export default CartPage;
