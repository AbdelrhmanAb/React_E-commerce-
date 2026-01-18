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
import useToast from "../context/ToastContext";
import useCardProducts from "../context/CardContext";
import { useState } from "react";

const CartPage = () => {
    const { cardList, dispatch } = useCardProducts()

    // console.log(cardList);
const {ShowToast}=useToast()

    return (
        <div style={{minHeight:"100vh"}}>
            <Typography variant="h2" sx={{background:"rgba(255, 191, 81, 1)",padding:"20px"}} fontWeight="bold" mb={3}>
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
                            p: "10px",
                            borderRadius: 3
                        }}>


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
                                                {product.category}
                                            </Typography>
                                            <Typography color="primary" fontWeight="bold" mt={1}>
                                                {product.price / 2 + "0"}EGP
                                            </Typography>
                                        </Box>

                                        {/* Quantity UI */}
                                        <Stack direction="row" alignItems="center">
                                            <IconButton disabled={product.count == 1 ? true : false} onClick={() => {
                                                dispatch({ type: "decrease", payload: product.id })
                                            }}>
                                                <RemoveIcon />
                                            </IconButton>

                                            <Typography mx={1}>{product.count}</Typography>

                                            <IconButton onClick={() => {
                                                dispatch({ type: "increase", payload: product.id })
                                            }}>
                                                <AddIcon />
                                            </IconButton>
                                        </Stack>

                                        <IconButton
                                            color="error"

                                            onClick={() => {
                                                ShowToast({massege:"DELETE   product to Card is Success"})
                                                dispatch({ type: "delete", payload: product.id })
                                            }}>
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
                                            <Typography>{product.price + "0"}EGP</Typography>
                                        </Stack>

                                        <Stack direction="row" justifyContent="space-between">
                                            <Typography>Shipping</Typography>
                                            <Typography>{product.price / 2 + "0"}EGP</Typography>
                                        </Stack>

                                        <Divider />

                                        <Stack direction="row" justifyContent="space-between">
                                            <Typography fontWeight="bold">Total</Typography>
                                            <Typography fontWeight="bold">{(product.price / 2) * 3 + "0"}EGP</Typography>
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
        </div >
    );
};

export default CartPage;
