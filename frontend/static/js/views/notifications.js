import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("SUBCON | Notifications");
    }

    async getHtml() {
        return `
            <div class="banner-image">
            <div class="fade">
                <div class="banner-content">
                    <h1>NOTIFICATIONS</h1>
                    <p>What's in it for you today?</p>  
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
        </div>   
        <div class="epmtyspace" style="height: 10px"></div>
        `;
    }
}
