export const fetchAPI = async (date) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ date: date }),
  };
  try {
    const data = await (
      await fetch(
        "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js",
        requestOptions
      )
    ).json();
    return data;
  } catch (error) {
    return { error: "Api is not working!" };
  }
};

export const submitAPI = async (data) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data }),
  };
  try {
    const result = await (
      await fetch(
        "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js",
        requestOptions
      )
    ).json();
    return result;
  } catch (error) {
    return { error: "Api is not working!" };
  }
};
