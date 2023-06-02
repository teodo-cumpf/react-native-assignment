import { Base } from "./BaseTypes";
import { Bowl } from "./BowlTypes";
import { Size } from "./SizeTypes";
import { Sauce } from "./SauceTypes";
import { Ingredient } from "./IngredientTypes";
import { ExtraIngredient } from "./ExtraIngredientTypes";

export interface UserOrder {
    bowlId: string;
    sizeId: string;
    baseId: string;
    sauceId: string;
    ingredients: string[];
    extraIngredients: string[];
}

export interface OrderData {
    bowl?: Bowl,
    size?: Size,
    base?: Base,
    sauce?: Sauce,
    ingredients?: Ingredient[],
    extraIngredients?: ExtraIngredient[]
}

export type OrderInputType = Bowl | Size | Base | Sauce | Ingredient[] | ExtraIngredient[];
