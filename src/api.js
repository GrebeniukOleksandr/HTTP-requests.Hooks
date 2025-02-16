import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com";

export async function fetchImages(topic, currentPage, signal) {
  try {
    const response = await axios.get("/search/photos", {
      params: {
        query: topic,
        page: currentPage,
        per_page: 12,
        client_id: "ozp1un4D3wBLT6q_0FvwFxf59Dbmv_RBzKZcQnzcheg",
      },
      signal,
    });

    return response.data.results;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Запит скасовано:", error.message);
    } else {
      console.error("Помилка отримання зображень:", error);
      throw error;
    }
  }
}
