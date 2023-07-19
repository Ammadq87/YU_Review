import axios from "axios";

export default class CourseReviewModel {
    professorId=-1;
    difficulty=1;
    useful=1;
    liked=false;
    recommend=false;
    review='';
    retake=false;
    ReviewLikes=0;
    ReviewDislikes=0;
    DatePosted = new Date().toISOString().slice(0, 10);
    CourseID=this.generateCourseID();

    db = axios.create({
        baseURL: 'http://localhost:3000/api'
    });

    async submitCourseReview() {
        try {
            const cr = this;
            const submitted = await new Promise((resolve) => {
                setTimeout(() => {
                    const result = this.db.post('/course/review/submitReview', cr);
                    resolve(result);
                }, 1000);
            });
    
            console.log(submitted);
        } catch (error) {
            console.error(error);
        }
    }

    generateCourseID() {
        const id = location.href.split('/')[5];
        const i = id.lastIndexOf('-');
        return id.substring(0,i) + '.00';
    }

    //#region Getters, setters
    async setProfessor(name) {
        const id = await this.db.get(`/york/getProfessorId/${name}`);
        this.professorId = id['data']['Id'];
    } 

    setDifficulty(n) {
        this.difficulty = n;
    }

    setUseful(n) {
        this.useful = n
    }

    setLiked(n) {
        this.liked = n;        
    }

    setRecommended(n) {
        this.recommend = n;
    }

    setReview(s) {
        this.review = s;
    }

    setRetake(n) {
        this.retake = n;
    }
    //#endregion



}