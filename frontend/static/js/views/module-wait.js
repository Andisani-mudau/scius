import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("SUBCON | Please Wait");
    }

    async getHtml() {
        const v1 = "Waiting for your classmates to join...";
        const v2 = "<p class=\"title\">" + v1 + "</p>";
        return `
            <div class="banner-image">
            <div class="fade">
                <div class="banner-content">
                    <h1>PATIENCE...</h1>
                    <p>While you wait, let everyone know you were born ready.</p>  
                </div>
            </div>
        </div>
        <div class="dashboard-content module-wait-container">
            <div class="module-wait">
                
                ` + v2 + ` //a title will appear here
                                
                <p class="body">Please wait for everyone else to join. You will get an email to proceed when 10 individuals have joined. Please, turn your notifications on, that way you won't miss anything and keep everyone waiting in vain. Don't forget to invite all your classmates and friends.</p>
            </div>
            <div class="epmtyspace" style="height:10px"></div>
        </div>
        `;
    }
}
