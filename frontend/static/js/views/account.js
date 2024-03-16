import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("SUBCON | Account");
    }

    async getHtml() {
            document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleButton');
  const toggleButton2 = document.getElementById('toggleButton-2');
  const customPopUp = document.getElementById('account-popup');
  const customPopUp2 = document.getElementById('account-popup-2');
  const closeButton = document.getElementById('cancel');
  const closeButton2 = document.getElementById('cancel-2');

  toggleButton.addEventListener('click', function () {
    customPopUp.classList.remove('hidden');
    
    closeButton.addEventListener('click', function () {
    customPopUp.classList.add('hidden');
  });
  });

  toggleButton2.addEventListener('click', function () {
    customPopUp2.classList.remove('hidden');
    
    closeButton2.addEventListener('click', function () {
    customPopUp2.classList.add('hidden');
  });
  });
});
        return `
            <div class="banner-image">
            <div class="fade">
                <div class="banner-content">
                    <h1>NOOOOO!...</h1>
                    <p>Wait, are you leaving?</p>  
                </div>
            </div>
        </div>
        <div class="dashboard-content">
            <button class="account-item deactivate" id="toggleButton">
                <div class="image"></div>
                <div class="content">
                    <p class="title">Deactivate account</p>
                </div>         
            </button>
            <button class="account-item delete" id="toggleButton-2">
                <div class="image"></div>
                <div class="content">
                    <p class="title">Delete account</p>
                </div> 
            </button>           
            </div>
            <div id="account-popup" class="hidden">
                <div class="more-info">
                    <p class="question">Are you sure you want to deactivate your account?</p>
                    <p class="consequence">- Retrieve your account by logging in as you normally do</p>
                </div>
                <div class="take-action">
                    <button id="cancel">Cancel</button>
                    <button>Deactivate</button>
                </div>
            </div>
            <div id="account-popup-2" class="hidden">
                <div class="more-info">
                    <p class="question">Are you sure you want to delete your account?</p>
                    <p class="consequence">- All your data will be lost.</p>
                    <p class="consequence">- There is no way to recover your data.</p>
                </div>
                <div class="take-action">
                    <button id="cancel-2">Cancel</button>
                    <button>Delete</button>
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

        // Check if the clicked element is the "Deactivate account" button
        if (target.matches("#toggleButton")) {
            const accountPopup = document.getElementById('account-popup');
            accountPopup.classList.toggle('hidden');
        }

        // Check if the clicked element is the "Delete account" button
        if (target.matches("#toggleButton-2")) {
            const accountPopup2 = document.getElementById('account-popup-2');
            accountPopup2.classList.toggle('hidden');
        }

        // Check if the clicked element is the "Cancel" button in the first popup
        if (target.matches("#cancel")) {
            const accountPopup = document.getElementById('account-popup');
            accountPopup.classList.add('hidden');
        }

        // Check if the clicked element is the "Cancel" button in the second popup
        if (target.matches("#cancel-2")) {
            const accountPopup2 = document.getElementById('account-popup-2');
            accountPopup2.classList.add('hidden');
        }

        // You can handle other button actions similarly
    });
});
