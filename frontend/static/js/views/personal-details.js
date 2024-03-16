import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("SUBCON | Personal Details");
    }
    
    

    async getHtml() {
       
        return `
            <div class="banner-image">
            <div class="fade"></div>
        </div>
        <div class="dashboard-content">
            <form class="personal-details">
                <div class="general-data">
                    <div class="extend">
                        <label for="imageInput"><span id="imageName">Change profile image...</span></label>
                        <input class="user-image" type="file" id="imageInput" name="image" accept=".jpg, .png">
                    
                </div>
                    <div>
                    <input type="text" name="Username" placeholder="Username">
                    <input type="text" name="Gender" placeholder="Gender">
                </div>
                <div>
                    <input type="text" name="firstname" placeholder="Firstname">
                    <input type="text" name="lastname" placeholder="Lastname">
                </div>
                <div class="extend">
                    <input type="email" name="email" placeholder="Email">
                    <input type="tel" name="phone" placeholder="Phone">
                </div>
                <div>
                    <input type="text" name="age" placeholder="Age">
                    <input type="password" name="password" placeholder="Password">
                    </div>
                </div>
                <div class="residential-data">
                    <div>
                        <input type="text" name="Username" placeholder="Continent">
                        <input type="text" name="Gender" placeholder="Country">
                    </div>
                    <div>
                        <input type="text" name="firstname" placeholder="Province">
                        <input type="text" name="lastname" placeholder="City/Town">
                    </div>
                    <div class="extend">
                        <input type="email" name="email" placeholder="Address 1">
                        <input type="tel" name="phone" placeholder="Address 2">
                    </div>
                    <div>
                        <input type="text" name="age" placeholder="Postal Code">
                        <input type="password" name="password" placeholder="-23.885753,29.486201">
                    </div>
                </div>
                <div class="important-data">
                    <div>
                        <input type="text" name="Username" placeholder="ID Number">
                    </div>
                </div>
                <button>Save</button>
            </form>
        </div>
        
        <div class="epmtyspace" style="height: 10px"></div>
        `;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        const target = e.target;
        
        if (target.matches("#imageInput")) {
            document.getElementById('imageInput').addEventListener('change', function() {
    var fileName = this.files[0].name;
        document.getElementById('imageName').innerHTML = fileName;
    });
        }
 });
});
