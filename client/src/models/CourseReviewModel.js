import axios from "axios";

export default class CourseReviewModel {
    professorId = null;
    difficulty = -1;
    useful = -1;
    liked = false;
    recommend = false;
    review = '';
    retake = false;
    ReviewLikes = 0;
    ReviewDislikes = 0;
    DatePosted = new Date().toISOString().slice(0, 10);
    CourseID = this.generateCourseID();

    db = axios.create({
        baseURL: 'http://localhost:3000/api'
    });

    async hasAlreadySubmitted() {
        try {
            const User = JSON.parse(sessionStorage.getItem('User'))['User'];
            const id = User['ID'];
           
            const submitted = await new Promise((resolve) => {
                setTimeout(() => {
                    const result = this.db.get(`/course/review/checkSubmission/${id}`);
                    resolve(result);
                }, 1000);
            });
            return submitted;
        } catch (err) {
            console.log(err);
        }
    }

    async checkSubmission() {
        try {
            const User = JSON.parse(sessionStorage.getItem('User'))['User'];
            const id = User['ID'];
            const submitted = await this.db.get(`/course/review/checkSubmission/${id}`);
            return submitted['data'][0]['Amount'];
        } catch (error) {
            console.error(error);
        }
    }

    async submitCourseReview() {
        try {
            const cr = this;
            const submitted = await new Promise((resolve) => {
                setTimeout(() => {
                    const result = this.db.post('/course/review/submitReview', cr);
                    resolve(result);
                }, 1000);
            });
            return submitted['data'];
        } catch (error) {
            console.error(error);
        }
    }

    validInformation() {
        if (this.difficulty === -1 || this.useful === -1 || (!this.review || this.review.length === 0)){
            console.log(this.professorId, this.difficulty, this.useful, this.review);
            return false;
        }
        return true;
    }

    generateCourseID() {
        const id = location.href.split('/')[5];
        const i = id.lastIndexOf('-');
        return id.substring(0,i) + '.00';
    }

    //#region Getters, setters
    //ToDo: find professor by faculty instead
    async setProfessor(name) {
        if (!name)
            return;
        const id = await this.db.get(`/york/getProfessorId/${name}`);
        this.professorId = id?.data?.Id;
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

    getRetake() {
        return this.retake;
    }

    setReview(s) {
        this.review = s.trim();
    }

    setRetake(n) {
        this.retake = n;
    }
    //#endregion
}