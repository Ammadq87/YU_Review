import axios from "axios";

export default class YourReviewsModel {
    reviews = [];
    database = null

    constructor() {
        database = axios.create({
            baseURL: 'http://localhost:3000/api'
        });
    }

    static async getReviews() {
        
    }
}