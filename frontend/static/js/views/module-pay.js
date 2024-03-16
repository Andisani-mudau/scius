import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("SUBCON | Complete Transition");
    }

    async getHtml() {
        return `
            <div class="banner-image">
            <div class="fade">
                <div class="banner-content">
                    <h1>CASH'N</h1>
                    <p>Pay with caution!</p>  
                </div>
            </div>
        </div>
        <div class="dashboard-content module-pay-container">
            <div class="module-pay">
                <p class="title">Add your payment</p>
                
                <p class="body">Now that everyone has joined, each one of you need to make a payment. Make sure you have chosen the payment of your choice in the settings.</p>
            </div>
            <div class="epmtyspace" style="height:10px"></div>
        </div>
        `;
    }
}
