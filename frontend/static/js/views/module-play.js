import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("SUBCON | Focus");
    }

    async getHtml() {
        return `
            <div class="banner-image">
            <div class="fade">
                <div class="banner-content">
                    <h1>FOCUS!</h1>
                    <p>You can do this. All you need is to pick the correct one, can't be that hard right?</p>  
                </div>
            </div>
        </div>
        <div class="dashboard-content module-play-container">
            <div class="module-play">
                <p class="title">Question</p>
                
                <p class="body">On November 5, 1968, Republican Richard Nixon accomplished
perhaps the greatest comeback in American political history, narrowly defeating his Democratic rival, Hubert Humphrey, to become the
thirty-seventh president of the United States. Only eight years earlier he had lost his first attempt at the presidency to John F. Kennedy in a devastating fashion. The election was extremely close, but clearly some voting shenanigans in Illinois, orchestrated by the Democratic Party machine in Chicago...</p>
            </div>
            <div class="epmtyspace" style="height: 480px"></div>
            <div class="bottom-content">
                <div class="answers-container">
                    <button class="answers">
                        <p class="number">01</p>
                        <p class="body">On November 5, 1968, Republican Richard Nixon accomplished
perhaps the greatest comeback in American political history, narrowly defeating his Democratic rival, Hubert Humphrey, to become the
thirty-seventh president of the United States. Only eight years earlier he had lost his first attempt at the presidency to John F. Kennedy in a devastating fashion. The election was extremely close, but clearly some voting shenanigans in Illinois, orchestrated by the Democratic Party machine in Chicago...</p>
                    </button>
                    <button class="answers">
                        <p class="number">02</p>
                        <p class="body">On November 5, 1968, Republican Richard Nixon accomplished
perhaps the greatest comeback in American political history, narrowly defeating his Democratic rival, Hubert Humphrey, to become the
thirty-seventh president of the United States. Only eight years earlier he had lost his first attempt at the presidency to John F. Kennedy in a devastating fashion. The election was extremely close, but clearly some voting shenanigans in Illinois, orchestrated by the Democratic Party machine in Chicago...</p>
                    </button>
                    <button class="answers">
                        <p class="number">03</p>
                        <p class="body">On November 5, 1968, Republican Richard Nixon accomplished
perhaps the greatest comeback in American political history, narrowly defeating his Democratic rival, Hubert Humphrey, to become the
thirty-seventh president of the United States. Only eight years earlier he had lost his first attempt at the presidency to John F. Kennedy in a devastating fashion. The election was extremely close, but clearly some voting shenanigans in Illinois, orchestrated by the Democratic Party machine in Chicago...</p>
                    </button>
                    <button class="answers">
                        <p class="number">04</p>
                        <p class="body">On November 5, 1968, Republican Richard Nixon accomplished
perhaps the greatest comeback in American political history, narrowly defeating his Democratic rival, Hubert Humphrey, to become the
thirty-seventh president of the United States. Only eight years earlier he had lost his first attempt at the presidency to John F. Kennedy in a devastating fashion. The election was extremely close, but clearly some voting shenanigans in Illinois, orchestrated by the Democratic Party machine in Chicago...</p>
                    </button>
                    <button class="answers">
                        <p class="number">05</p>
                        <p class="body">On November 5, 1968, Republican Richard Nixon accomplished
perhaps the greatest comeback in American political history, narrowly defeating his Democratic rival, Hubert Humphrey, to become the
thirty-seventh president of the United States. Only eight years earlier he had lost his first attempt at the presidency to John F. Kennedy in a devastating fashion. The election was extremely close, but clearly some voting shenanigans in Illinois, orchestrated by the Democratic Party machine in Chicago...</p>
                    </button>
                    <button class="answers">
                        <p class="number">06</p>
                        <p class="body">On November 5, 1968, Republican Richard Nixon accomplished
perhaps the greatest comeback in American political history, narrowly defeating his Democratic rival, Hubert Humphrey, to become the
thirty-seventh president of the United States. Only eight years earlier he had lost his first attempt at the presidency to John F. Kennedy in a devastating fashion. The election was extremely close, but clearly some voting shenanigans in Illinois, orchestrated by the Democratic Party machine in Chicago...</p>
                    </button>
                    
                </div>
                <a href="/module-submitted" class="participate nav__link" data-link >Answer</a>
            </div>
            
        </div>
        `;
    }
}
