import axios from "axios";

const KEY = "AIzaSyAkhwWO5NSs7_jK2Wl-WJL6KnF8Zuu6f9Y";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
