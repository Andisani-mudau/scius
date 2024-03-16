import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
	// Fetch user data from API
	
	fetch('/database/data')
	    .then(res => res.json())
	    .then(data => {
		// Use the fetched data to update the dashboard
		console.log(data); // Example: log the data to console
		// Update the content of the <div> element with the username
		//const userName = data.primary.userName;
		const country = data.country;
		console.log(country);
		//document.getElementById('username-container').textContent = userName;
		document.getElementById('country').textContent = country;
	    })
	    .catch(error => console.error('Error fetching data:', error));
	
        //declaration starts here
        //rewards
        const rewardProductName = "Apple Vision Pro";
        var rewardMoment = `<p>Stand a chance to win</p> <h1>${rewardProductName}</h1><p>If you participate within...</p>`;
        const rewardModuleName = "Physical Science";
        const rewardMode = 10;
        const rewardLevel = 3;
        const rewardSetDate = '2024-02-13T00:00:00';
        //declaration ends here
        
        // Set the target date and time for the countdown
        const targetDate = new Date(rewardSetDate).getTime();
        
        // Set the target date and time for the countdown on notifications
        //const notificationTargetDate = new Date(notificationSetDate).getTime();
        
        // Update the countdown every second
        const countdownInterval = setInterval(() => {
            // Get the current date and time
            const now = new Date().getTime();

            // Calculate the remaining time in milliseconds
            const timeDifference = targetDate - now;

            // Check if the countdown has reached zero
            if (timeDifference <= 0) {
                clearInterval(countdownInterval);
                console.log("Countdown is over!");
                document.getElementById('countdown').innerText = "Closed";
                document.getElementById('rewardMoment').innerText = " ";
            return;
            }

            // Calculate days, hours, minutes, and seconds
            var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
            if (days < 10) {
                days = `0${days}`;
            }
            if(hours < 10){
                hours = `0${hours}`;
            }
            if (minutes < 10) {
                minutes = `0${minutes}`;
            }
            if (seconds < 10) {
                seconds = `0${seconds}`;
            }
            
            // Update the countdown display
            const rewardCountDown = `${days} : ${hours} : ${minutes} : ${seconds}`;
            if (document.getElementById('countdown')) {
                document.getElementById('countdown').innerText = rewardCountDown;
            }
            
        }, 1000);
        
        // Function to format time (add leading zero if needed)
        function formatTime(time) {
            return time < 10 ? '0' + time : time;
        }
        
        return `
        <div class="banner-image lazy-image image-container">
            <div class="fade">
                <div class="banner-content">
                    <h1>HELLO, ANDISANI <span id="username-container "></span></h1>
                    <p id="country">...</p>
                    <p>All we know is that you have to study, because that's why you are here.</p>
                </div>
                <div class="banner-content-2">
                    <h1 style="margin-right: 50px;">INTELLIGENCE</h1>
                    <h1>IS KEY?</h1>
                </div>
                <div class="trademark">
                    <p>All rights reserved, &copy Subcon.inc. This is a legally registered organisation, legal actions will be taken shou you use our work without our consent or copy without our permission.</p>
                </div>
            </div>
        </div>

        <div class="dashboard-content">
            <div class="notification-item">
                <div class="top-info">
                    <div class="image"></div>
                    <div class="title">
                        <p>System</p>
                        <div class="date">
                            <div class="global-date-icon"><i class="bx bx-time icon"></i></div>
                            <p>07-03-2024</p>
                        </div>
                    </div>
                    <div class="info"></div>
                </div>
                <div class="content">
                    <p>Your payment awaits, complete it before #time#.</p>
                    </div>
            </div>
            <div class="dashboard-community">
                <div class="community-top-info">
                    <div class="image"></div>
                    <div class="title">
                        <p>Winner!</p>
                        <div class="date">
                            <div class="global-date-icon"><i class="bx bx-time icon"></i></div>
                            <p>07-03-2024</p>
                        </div>
                    </div>
                </div>
                <p>Congratulations to username for being the first to answer the correct answer on Physical Science, mode 10, level 3.</p>
                <div class="info">
                    <div># Physical Science</div>
                    <div># Mode 10</div>
                    <div># Level 3</div>
                </div>
            </div>
        </div>
        
        <div class="banner-reward-image lazy-image image-container">
            <div class="fade">
                <div class="reward-moment" id="rewardMoment">
                    ${rewardMoment}
                </div>
                <div class="countdown"><h1 id="countdown"></h1></div>
                <div class="info">
                    <div># ${rewardModuleName}</div>
                    <div># Mode ${rewardMode}</div>
                    <div># Level ${rewardLevel}</div>
                </div>
            </div>
        </div>
        
        <footer>
            <div class="instagram"></div>
            <div class="facebook"></div>
            <div class="whatsapp"></div>
            <div class="thread"></div>
            <div class="x"></div>
        </footer>
        <div class="epmtyspace" style="height: 10px"></div>
        <div class="sidebar-patch"></div>
        `;
    }
}
