import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//  async function for fetching product from backend
export const getProduct = createAsyncThunk('get/product', async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/product/1/'). catch(
        error  => console.log(error)
    )
    return response.data
})
