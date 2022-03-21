import React from "react";
import {useApis} from "./useApi";

export const useSpecificCar = (id) => {
    const [carsResult, isLoading] = useApis('/jsons/bd_frota_specs.json');

    const car = React.useMemo(() => {
        let result = null;
        carsResult?.frotaList?.forEach(category => {
            if(result) return;

            category.items.forEach(car => {
                if(result) return;
                if(car.id === id) {
                    result = car
                }
            })
        });
        return result;
    }, [id, carsResult]);

    return {
       isLoading,
       car
    }
};

// function useDelay(time = 1000) {
//     const [isLoading, setIsLoading] = React.useState(true);
//
//     React.useEffect(() => {
//
//         setTimeout(() => {
//             setIsLoading(false);
//         }, time);
//
//
//     }, []);
//
//     return isLoading
// }