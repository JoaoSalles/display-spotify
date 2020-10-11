import { debounce } from 'lodash';

const useFilter = (
    handleFieldChange:  ({ field, value }: { field: string, value: string}) => void,
    field: string,
) => {
    let debounceFunction: any;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        if (!debounceFunction) {
            debounceFunction = debounce(
            () => handleFieldChange({ field, value: e.target.value  }),
            500,
        );
        }
        debounceFunction();
    };

    return {
        handleChange
    }
}

export default useFilter;