import { Ingredient } from './IngredientTypes';

export interface ExtraIngredient extends Ingredient {
    currency: string;
    price: number;
}
