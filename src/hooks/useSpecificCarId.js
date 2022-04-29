import React from "react";
import { appConfig } from "../appConfig";
import {useApis} from "./useApi";

export const useSpecificCarId = (id) => {
    const [carsResult, isLoading] = useApis('/jsons/apiCars.json');
    
    const [cardResult, isLoad] = useApis(appConfig.apiUrl + '/products');
    
    const car = React.useMemo(() => {
        let result = null;
        carsResult?.carsList?.forEach(items => {
            if (result) return;

            if (items.id === id) {
                result = items
            }
        });

        cardResult?.forEach(items => {
            if (result) return;

            if (items.id == id) {
                result = items
            }
        });
        return result;
    }, [id, carsResult, cardResult]);

    return {
        isLoading,
        car,
        isLoad
    }
};