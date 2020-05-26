import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID Vb2cL8JNJnh66wP-CLbIHhlLb1UFPaXMDx6kLIOweXM"
      }
});