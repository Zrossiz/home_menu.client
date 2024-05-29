import { IGetAllCategories } from "@/types";
import axios from "axios";

export const getCategories = async (): Promise<IGetAllCategories | { message: string }> => {
    try {
        const { data } = await axios.get(`${process.env.API_URL}category/`);

        return data;
    } catch (err) {
        console.log(err);
        return {
            message: 'Ошибка при получении категорий'
        }
    }
}