type GetCountryResponse = {
  countryCode: string;
};

const getCountry = async (): Promise<GetCountryResponse> => {
  return await fetch('https://ipapi.co/country')
    .then(async (response) => {
      return {
        countryCode: await response.text()
      };
    })
    .catch(() => {
      return {
        countryCode: ''
      };
    });
};

export default getCountry;
