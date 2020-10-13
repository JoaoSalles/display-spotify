const getURLParams = (params: { [key: string]: string }) => {
  let paramsURL = "";
  Object.entries(params).forEach((param) => {
    if (param[1] !== "") {
      if (paramsURL === "") {
        paramsURL = encodeURI(`?${param[0]}=${param[1]}`);
      } else {
        paramsURL += encodeURI(`&${param[0]}=${param[1]}`);
      }
    }
  });
  return paramsURL;
};

export default getURLParams;
