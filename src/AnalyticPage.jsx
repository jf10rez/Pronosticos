import React, { useEffect, useState } from "react";
import { Chart } from "./Chart";
import { LastsResults } from "./LastsResults";
import { TrendingsButtons } from "./TrendingsButtons";

export const AnalyticPage = () => {
    const [values, setValues] = useState([]);

    const [filters, setFilters] = useState([])

    useEffect(() => {
      if( values.length > 0 ){
        values.forEach( (item, index) => {
            if( item === values[ values.length - 1 ] ){
                console.log(values[values.length])
                return setFilters( fil => [...fil, {
                    last: item,
                    after: values[values.length]
                }] )
            }

            return setFilters([])
        } )
      }
    }, [values])
    
  return (
    <>
      <Chart values={values} setValues={setValues} />
      <TrendingsButtons values={values} setValues={setValues} />
      <LastsResults values={filters} />
    </>
  );
};
