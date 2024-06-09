export interface ICategory {
    id: number;
    name: string;
    description: string;
    slug: string;
    created_at: Date;
    updated_at: Date;
}

export interface IGetAllCategories {
    success: boolean;
    data: ICategory[];
}