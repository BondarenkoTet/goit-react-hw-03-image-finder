import axios from "axios";

const API_KEY = "33736384-d824c34936f956644527773fb"
const BASE_URL = "https://pixabay.com/api/";

export async function getImg(searchImg, page) {
    const response = await axios.get(
    `${BASE_URL}?q=${searchImg}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    console.log(response);
    return  response;
} 



//.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
//this.apiKey = "33736384-d824c34936f956644527773fb";