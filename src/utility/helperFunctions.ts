import { ExtraIngredient, Size } from "../types";

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

export const generateIdFromDate = () => {
    return Math.floor(new Date().getTime());
}
