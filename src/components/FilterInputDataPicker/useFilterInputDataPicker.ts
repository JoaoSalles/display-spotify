import { useState } from "react";

const useFilterInputDataPicker = () => {
    // necessary because date pick does not work well without value
    // and it needs to be Date type
    const [dateTypevalue, setDateTypevalue] = useState<Date[] | null>(null);

    return {
        dateTypevalue,
        setDateTypevalue
    }
}

export default useFilterInputDataPicker;