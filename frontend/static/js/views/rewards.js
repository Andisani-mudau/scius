import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("SUBCON | Rewards");
    }

    async getHtml() {
        return `
            <div class="banner-image lazy-image image-container">
            <div class="fade">
                <div class="banner-content">
                    <h1>REWARDS</h1>
                    <p>We have something amazing for everyone</p>  
                </div>
            </div>
        </div>
       
        <div class="banner-reward-image">
            <div class="fade">
                <div class="reward-moment">
                    <p>Stand a chance to win</p>
                    <h1>Galaxy A24</h1>
                    <p>If you participate within...</p>
                </div>
                <div class="countdown"><h1>29 : 11 : 59</h1></div>
                <div class="info">
                    <div># Physical Science</div>
                    <div># Mode 10</div>
                    <div># Level 3</div>
                </div>
            </div>
        </div>
        <div class="banner-reward-image">
            <div class="fade">
                <div class="reward-moment">
                    <p>Stand a chance to win</p>
                    <h1>Galaxy A24</h1>
                    <p>If you participate within...</p>
                </div>
                <div class="countdown"><h1>29 : 11 : 59</h1></div>
                <div class="info">
                    <div># Physical Science</div>
                    <div># Mode 10</div>
                    <div># Level 3</div>
                </div>
            </div>
        </div>
        <div class="banner-reward-image">
            <div class="fade">
                <div class="reward-moment">
                    <p>Stand a chance to win</p>
                    <h1>Galaxy A24</h1>
                    <p>If you participate within...</p>
                </div>
                <div class="countdown"><h1>29 : 11 : 59</h1></div>
                <div class="info">
                    <div># Physical Science</div>
                    <div># Mode 10</div>
                    <div># Level 3</div>
                </div>
            </div>
        </div>
        <div class="banner-reward-image">
            <div class="fade">
                <div class="reward-moment">
                    <p>Stand a chance to win</p>
                    <h1>Galaxy A24</h1>
                    <p>If you participate within...</p>
                </div>
                <div class="countdown"><h1>29 : 11 : 59</h1></div>
                <div class="info">
                    <div># Physical Science</div>
                    <div># Mode 10</div>
                    <div># Level 3</div>
                </div>
            </div>
        </div>
        <div class="banner-reward-image">
            <div class="fade">
                <div class="reward-moment">
                    <p>Stand a chance to win</p>
                    <h1>Galaxy A24</h1>
                    <p>If you participate within...</p>
                </div>
                <div class="countdown"><h1>29 : 11 : 59</h1></div>
                <div class="info">
                    <div># Physical Science</div>
                    <div># Mode 10</div>
                    <div># Level 3</div>
                </div>
            </div>
        </div>
        <div class="banner-reward-image">
            <div class="fade">
                <div class="reward-moment">
                    <p>Stand a chance to win</p>
                    <h1>Galaxy A24</h1>
                    <p>If you participate within...</p>
                </div>
                <div class="countdown"><h1>29 : 11 : 59</h1></div>
                <div class="info">
                    <div># Physical Science</div>
                    <div># Mode 10</div>
                    <div># Level 3</div>
                </div>
            </div>
        </div>
        <div class="banner-reward-image">
            <div class="fade">
                <div class="reward-moment">
                    <p>Stand a chance to win</p>
                    <h1>Galaxy A24</h1>
                    <p>If you participate within...</p>
                </div>
                <div class="countdown"><h1>29 : 11 : 59</h1></div>
                <div class="info">
                    <div># Physical Science</div>
                    <div># Mode 10</div>
                    <div># Level 3</div>
                </div>
            </div>
        </div>
        
        
        <div class="epmtyspace" style="height: 10px"></div>
        `;
    }
}
