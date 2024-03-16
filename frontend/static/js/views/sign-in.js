import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("SUBCON | One Way In");
    }

    async getHtml() {
        return `
            <div class="sign-in-content">
                <form method="post" class="signin-details" id="signinForm" >
                    <div class="general-data">
                        <div class="extend">
                            <input type="text" name="userInput" id="userInput" placeholder="Username/ Email" required>
                            <input type="password" name="password" id="password" placeholder="Password" required>
                        </div>
                        <div class="dontHaveAccount">
                            <a href="/sign-up" class="nav__link" data-link>Don't have an account? Sign up...</a>
                        </div>
                    </div>
                    <button type="submit" class="myButton">Log In</button>
                </form>
            </div>
        `;
    }

}   
