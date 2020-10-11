import { useState, useEffect } from 'react';

const useFilterSelect = (
    options: Array<{value: string, name: string}>
) => {
    // const [filterFields, setFilterFields] = useState<Array<{ id: string, label: string}>>([]);
    const [normalizedOptions, setNormalizedOptions] = useState<Array<{ id: string, label: string}>>([]);

    function normalizeOption(options: Array<{value: string, name: string}>) {
        setNormalizedOptions(
            options.map((option) => {
                return {
                id: option.value,
                label: option.name,
                };
            })
        )
    }

    useEffect(() => {
        normalizeOption(options);
    // eslint-disable-next-line
    }, []);


    return {
        normalizedOptions
    }
}

export default useFilterSelect;