import { useState, useEffect } from 'react';

type filterFormatField = {
    id: string,
    name: string,
    validation: { entityType?: string, pattern?: string, primitiveType: string}  
}

type filterFormatDropdown = {
    id: string,
    name: string,
    values: Array<{value: string, name: string}>  
}

const useFilter = () => {
    const [filterField, setFilterField] = useState<{[key: string]: filterFormatField | filterFormatDropdown}>({});

    function normilizeFilterFormat(fields: Array<any>) {
        const normilizedFormat: { [key: string]: filterFormatField | filterFormatDropdown} = {}
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