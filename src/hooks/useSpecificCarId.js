import React from "react";
import {useApis} from "./useApi";

export const useSpecificCarId = (id) => {
    const [carsResult, isLoading] = useApis('/jsons/apiCars.json');

    const car = React.useMemo(() => {
        let result = null;
        carsResult?.carsList?.forEach(items => {
            if (result) return;

            if (items.id === id) {
                result = items
            }
        });
        return result;
    }, [id, carsResult]);

    return {
        isLoading,
        car
    }
};