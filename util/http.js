import axios from "axios";

const apiUrl =
  "https://react-native-course-c6216-default-rtdb.firebaseio.com/expenses.json";

const httpRequest = async (method, data = "", token = "") => {
  try {
    const response = await axios({
      method: method,
      url: `${apiUrl}`,
      headers: {
        authorization: token,
      },
      data: data,
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const updateExpense = async (id, data) => {
  await axios.patch(
    `https://react-native-course-c6216-default-rtdb.firebaseio.com/expenses/${id}.json`,
    data
  );
};

export default httpRequest;
