import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("SUBCON | Better Luck Next Time");
    }

    async getHtml() {
        return `
            <div class="banner-image">
            <div class="fade">
                <div class="banner-content">
                    <h1>UH OH!</h1>
                    <p>Well, fair enough.</p>  
                </div>
            </div>
        </div>
        <div class="dashboard-content module-lost-container">
            <div class="module-lost">
                <p class="title">Better luck next time!</p>
                
                <p class="body">You could have won, username was just able to be the first to answer the correct answer at <b>03:05:32</b>, compared to you at <b>03:05:57</b>.</p>
            </div>
            <div class="results-overview">
                <div class="section question">
                    <div class="top-info">
                        <span>Question</span>
                        <span>07-03-2024</span>
                        <span>Mode 1</span>
                        <span>Level 3</span>
                        <span>Reward: R40</span>
                    </div>
                    <p class="body">On November 5, 1968, Republican Richard Nixon accomplished perhaps the greatest comeback in American political history, narrowly defeating his Democratic rival, Hubert Humphrey, to become the
thirty-seventh president of the United States. Only eight years earlier he had lost his first attempt at the presidency to John F. Kennedy in a devastating fashion.</p>
                </div>
                <div class="section answer">
                    <div class="top-info">
                        <span>Corret answer</span>
                        
                    </div>
                    <p class="body">On November 5, 1968, Republican Richard Nixon accomplished perhaps the greatest comeback in American political history, narrowly defeating his Democratic rival, Hubert Humphrey, to become the
thirty-seventh president of the United States. Only eight years earlier he had lost his first attempt at the presidency to John F. Kennedy in a devastating fashion.</p>
                </div>
                <div class="section your-answer">
                    <div class="top-info">
                        <span>Your answer</span>
                        
                    </div>
                    <p class="body">On November 5, 1968, Republican Richard Nixon accomplished perhaps the greatest comeback in American political history, narrowly defeating his Democratic rival, Hubert Humphrey, to become the
thirty-seventh president of the United States. Only eight years earlier he had lost his first attempt at the presidency to John F. Kennedy in a devastating fashion.</p>
                </div>
            </div>
            <div class="epmtyspace" style="height:10px"></div>
        </div>
        `;
    }
}
