export interface Size {
    id: number;
    name: SizeType;
    currency: string;
    price: number;
}

export enum SizeType {
    SMALL = "Small",
    MEDIUM = "Medium",
    LARGE = "Large",
}
