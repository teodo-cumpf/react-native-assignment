import { IdType } from './sharedTypes';

export interface Base {
    id: number;
    name: string;
    description: string;
    image: IdType;
    imagePath: string;
}
