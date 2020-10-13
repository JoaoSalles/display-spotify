import { useDispatch } from "react-redux";
import { debounce } from "lodash";
import { FILTER_SAGA } from "store/actions/filterActions";

const useFilter = () => {
  const dispatch = useDispatch();

  let debounceFunction: any;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    if (!debounceFunction) {
      debounceFunction = debounce(
        () => dispatch({ type: FILTER_SAGA, value: e.target.value }),
        500
      );
    }
    debounceFunction();
  };

  return {
    handleChange,
  };
};

export default useFilter;
