import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("SUBCON | Answer Submitted");
    }

    async getHtml() {
        return `
            <div class="banner-image">
            <div class="fade">
                <div class="banner-content">
                    <h1>ANSWER SUBMITTED</h1>
                    <p>You did great right? We have faith and believe you did.</p>  
                </div>
            </div>
        </div>
        <div class="dashboard-content module-submit-container">
            <div class="module-submit">
                <p class="title">Your answer was submitted</p>
                
                <p class="body">As soon as all participants have submitted their answers the results will be announced. Keep checking your email and notifications so you don't miss anything. You can explore other modes or levels while you wait.</p>
            </div>
            <div class="epmtyspace" style="height:10px"></div>
        </div>
        `;
    }
}
