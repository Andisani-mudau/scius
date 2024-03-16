import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("SCIUS | Module Information");
    }

    async getHtml() {
        return `
            <div class="banner-image">
            <div class="fade">
                <div class="banner-content">
                    <h1>HOW TO</h1>
                    <p>You have made it this far.</p>  
                </div>
            </div>
        </div>
        <div class="dashboard-content module-info-container">
            <div class="module-info">
                <p class="title">Mathematics</p>
                
                <p class="body">On November 5, 1968, Republican Richard Nixon accomplished
perhaps the greatest comeback in American political history, narrowly defeating his Democratic rival, Hubert Humphrey, to become the
thirty-seventh president of the United States. Only eight years earlier he had lost his first attempt at the presidency to John F. Kennedy in a devastating fashion. The election was extremely close, but clearly some voting shenanigans in Illinois, orchestrated by the Democratic Party machine in Chicago...</p>
                <p class="title">How it works</p>
                
                <p class="body">Gather a minimum of 10 of your classmates or friends, choose an amount of money you would like to participate in a challenge, minimum is R2. Depending on how many you are choose a Mode of your desire, if you are 10 in number choose Mode 1, if you are participating with R20 each, choose Level 19. Each Level is the amount of money you would like to participate in minus one. And the mode goes in tens. Mode 1 requires 10 individuals, Mode 2 requires 20 individuals and so on up to Mode 100 which requires 1 000 individuals.</p>
            </div>
            <div class="epmtyspace" style="height: 130px"></div>
            <div class="bottom-content">
                <div class="selection">
                    <div class="mode">
                        <input type="number" name="mode" id="" placeholder="Mode...">
                        <div class="more-info">
                            <div class="pointer"></div>
                            <p>This is a group of participants, Mode 1 is limited to 10 individuals, Mode 2 to 20 and so on up to Mode 100</p>
                        </div>
                    </div>
                    <div class="level">
                        <input type="number" name="level" id="" placeholder="Level...">
                        <div class="more-info">
                            <div class="pointer"></div>
                            <p>Each level has an increase in participation fee, starting at Level 1 which amounts to R2, Level to R3 and so on up to Level 1000.</p>
                        </div>
                    </div>
                </div>
                <a href="/module-wait" class="participate nav__link" data-link>Participate</a>
            </div>
        </div>
        `;
    }
}
