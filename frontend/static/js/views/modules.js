import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("SUBCON | Modules");
    }

    async getHtml() {
        var num = 5;
        while(num != 0){
            console.log("Hello World");
            num--;
        }
        return `
            <div class="banner-image">
            <div class="fade">
                <div class="banner-content">
                    <h1>MODULES</h1>
                    <p>Choose your desired module or subject.</p>  
                </div>
            </div>
        </div>
        <div class="module-content">
            <a class="module2-item nav__link" href="/module-info" data-link>
                <div class="image"></div>
                <div class="content">
                    <p class="title">Mathematics</p>
                    </div>            
            </a>
            <div class="module2-item">
                <div class="image"></div>
                <div class="content">
                    <p class="title">Mathematics</p>
                    </div>            
            </div>
            <div class="module2-item">
                <div class="image"></div>
                <div class="content">
                    <p class="title">Mathematics</p>
                    </div>            
            </div>
            <div class="module2-item">
                <div class="image"></div>
                <div class="content">
                    <p class="title">Mathematics</p>
                    </div>            
            </div>
            <div class="module2-item">
                <div class="image"></div>
                <div class="content">
                    <p class="title">Mathematics</p>
                    </div>            
            </div>
            <div class="module2-item">
                <div class="image"></div>
                <div class="content">
                    <p class="title">Mathematics</p>
                    </div>            
            </div>
            <div class="module2-item">
                <div class="image"></div>
                <div class="content">
                    <p class="title">Mathematics</p>
                    </div>            
            </div>
            <div class="module2-item">
                <div class="image"></div>
                <div class="content">
                    <p class="title">Mathematics</p>
                    </div>            
            </div>
            <div class="module2-item">
                <div class="image"></div>
                <div class="content">
                    <p class="title">Mathematics</p>
                    </div>            
            </div>
            <div class="module2-item">
                <div class="image"></div>
                <div class="content">
                    <p class="title">Mathematics</p>
                    </div>            
            </div>
            
        </div>
        
        <div class="epmtyspace" style="height: 10px"></div>
        `;
    }
}
