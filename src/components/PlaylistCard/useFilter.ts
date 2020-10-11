import { useState, useEffect } from 'react';
import { filterFormatField } from 'types/filterFormatTypes';

const useFilter = () => {
    const [filterField, setFilterField] = useState<{[key: string]: filterFormatField}>({});

    function normilizeFilterFormat(fields: Array<any>) {
        const normilizedFormat: { [key: string]: filterFormatField} = {}
        fields.forEach(field => {
            normilizedFormat[field.id] = field;
        })
        return normilizedFormat;
    }

    async function getFilterFormat() {
        const response = await fetch('http://www.mocky.io/v2/5a25fade2e0000213aa90776')
        if (response.status === 200) {
            const reponseJson = await response.json();
            setFilterField(normilizeFilterFormat(reponseJson.filters));
        }
    }

    useEffect(() => {
        getFilterFormat();
    // eslint-disable-next-line
    }, []);

    return {
        filterField
    }
}

export default useFilter;