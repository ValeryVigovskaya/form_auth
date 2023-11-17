import './apiMock';

export function getDataFetch() {
    return fetch("/api/get_user_data")
      .then((response) => response.json())
      .catch((err) => {
        console.log(err); 
      });
  }

