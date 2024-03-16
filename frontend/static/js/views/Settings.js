import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Settings");
    }

    async getHtml() {
        console.log("settings")
        return `
            <div class="banner-image">
            <div class="fade">
                <div class="banner-content">
                    <h1>SETTINGS</h1>
                    <p>What would you like to do?</p>  
                </div>
            </div>
        </div>
        <div class="dashboard-content">
            <a class="setting-item nav__link" href="/personal-details" data-link>
                <div class="image"></div>
                <div class="content">
                    <p class="title">Personal details</p>
                </div>            
            </a>
            <a class="setting-item nav__link" href="/account" data-link>
                <div class="image"></div>
                <div class="content">
                    <p class="title">Account</p>
                </div>            
            </a>
            <a class="setting-item nav__link" href="/payment-method" data-link>
                <div class="image"></div>
                <div class="content">
                    <p class="title">Payment method</p>
                </div>            
            </a>
            <div class="setting-item" id="modeSwitchSettings">
                <div class="image"></div>
                <div class="content">
                    <p class="title" id="modeText">Dark mode</p>
                </div>            
            </div>
            <a class="setting-item nav__link" href="/about" data-link>
                <div class="image">
                    <i class="badge-info"></i>
                </div>
                <div class="content">
                    
                    <p class="title">About</p>
                </div>            
            </a>
            <div class="setting-item">
                <div class="image"></div>
                <div class="content">
                    <p class="title">Logout</p>
                    
                    </div>            
            </div>
            
        </div>
        
        <div class="epmtyspace" style="height: 10px"></div>
        `;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        const target = e.target;
        
        if (target.matches("#modeSwitchSettings")) {
            const body = document.querySelector('body'),
              modeSwitch = body.querySelector('#modeSwitchSettings'),
              modeText = body.querySelector(".mode-text"),
              modeText2 = body.querySelector('#modeText');
      
            body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
        modeText2.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        modeText2.innerText = "Dark mode";
    }
        }
 });
});
