import { IGetAllCategories } from ".";

export interface IHomeProps {
    categories?: IGetAllCategories | { message: string };
}