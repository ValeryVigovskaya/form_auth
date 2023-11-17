import fetchMock from "fetch-mock";

fetchMock.config.overwriteRoutes = true;
fetchMock.config.fallbackToNetwork = true;
export const data = {
  data: [
    {
      id: 1,
      email: "fake@fake.ru",
      first_name: "Fake",
      last_name: "Fakovich",
    },
    {
      id: 2,
      email: "otherfake@fake.ru",
      first_name: "OtherFake",
      last_name: "Otherfakovich",
    },
  ],

};

export const mockUserData = () => {
  fetchMock.get(
  "api/get_user_data",
  () => {
    return JSON.stringify(data);
  },
  {
    delay: 1000,
    overwriteRoutes: true
  }
);

fetchMock.post(
  "api/update_user_data",
  () => {
    return true;
  },
  {
    delay: 1000,
    overwriteRoutes: true
  }
);
}

fetchMock.restore();
mockUserData(data.data);


