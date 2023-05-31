import { IdType } from './sharedTypes';

export interface Bowl {
    id: number;
    name: string;
    description: string;
    image: IdType;
    imagePath: string;
}
