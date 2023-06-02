import {
    Cart,
    Size,
    OrderData,
    UserOrder,
    ExtraIngredient,
} from "../types";

export const getValuesFromEnum = (enumeration: any) => {
    const enumValues = [];

    for(const enumValue in enumeration){
        if(isNaN(Number(enumValue))){
            enumValues.push(enumeration[enumValue]);
        }
    }

    return enumValues;
}

export const getNumberOfEnumValues = (enumeration: any) => {
    const enumValues = getValuesFromEnum(enumeration);

    return enumValues.length;
}

export const formatItemNameWithPrice = (item: Size | ExtraIngredient) => {
    const price = item.currency.concat(item.price.toFixed(2));

    return item.name.concat(` - ${price}`);
}

export const addOrRemoveStringIfExist = (stringToHandle: string | number, stringArray: string[]) => {
    const isStringAdded = stringArray.includes(stringToHandle.toString());

    if(isStringAdded)
        return stringArray.filter(string => string !== stringToHandle);

    return stringArray.concat(stringToHandle.toString());
}

export const addOrRemoveByIdIfExist = (objectToHandle: any, objectArray: any[]) => {
    const isObjectAdded = objectArray.some(object => object.id === objectToHandle.id);

    if(isObjectAdded)
        return objectArray.filter(object => object.id !== objectToHandle.id);

    return objectArray.concat(objectToHandle);
}

export const calculateTotalPrice = (order: OrderData) => {
    let price = 0;

    if(order.size)
        price = order.size.price;

    if(order.extraIngredients?.length){
        order.extraIngredients.forEach(ingredient => {
            price += ingredient.price;
        });
    }

    return price;
}

export const calculateTotalCartPrice = (cartItems: Cart[]) => {
    let price = 0;

    cartItems.forEach(cart => {
        if(cart.size)
            price += cart.size?.price;

        if(cart.extraIngredients?.length){
            cart.extraIngredients.forEach(ingreedient => {
                price += ingreedient.price;
            });
        }

        price = price * cart.amount;
    });

    return price;
}

export const formatArrayInCommaSeparatedString = (array: string[]) => {
    return array.join(', ');
}


export const formatCartForPurchase = (items: Cart[]) => {
    const updatedArray = items.map(item => {
        return {
            bowlId: item.bowl?.id.toString(),
            sizeId: item.size?.id.toString(),
            baseId: item.base?.id.toString(),
            sauceId: item.sauce?.id.toString(),
            ingredients: item.ingredients?.map(ingreadient => ingreadient.id.toString()),
            extraIngredients: item.extraIngredients?.map(ingreadient => ingreadient.id.toString())
        }
    }); 

    return updatedArray as UserOrder[];
}
