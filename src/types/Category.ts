export interface ICategory {
    id: number;
    name: string;
    image: string | null;
    description: string;
    created_at: Date;
    updated_at: Date;
}

export interface IGetAllCategories {
    success: boolean;
    data: ICategory[];
}