import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 'Bearer OfpcE48UhmgoV0DSfSdROeuBct8PSGgUw-ahgDU9QH_b14p4oKdxwTFqxyCRGQnr1NHxH2-Q6nQQ5oZ4-bYZkcr7r5qTc0iQNYkeC9iYne_LNca3-5jCSXqL9lVTX3Yx'
    }
});