type GetCountryResponse = {
  status: string;
  countryCode: string;
};

const getCountry = async (): Promise<GetCountryResponse> => {
  return await fetch('http://ip-api.com/json/?fields=16386')
    .then(async (response) => {
      return await response.json();
    })
    .catch(() => {
      return false;
    });
};

export default getCountry;
