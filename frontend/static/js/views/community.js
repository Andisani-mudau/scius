import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("SUBCON | Community");
    }

    async getHtml() {
        return `
            <div class="banner-image">
            <div class="fade">
                <div class="banner-content">
                    <h1>COMMUNITY</h1>
                    <p>Your success and that of others.</p>  
                </div>
            </div>
        </div>
        <div class="community-content">
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
            <div class="dashboard-community">
                <div class="community-top-info">
                    <div class="image"></div>
                    <div class="title">
                        <p>Update</p>
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
            <div class="dashboard-community">
                <div class="community-top-info">
                    <div class="image"></div>
                    <div class="title">
                        <p>Update</p>
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
        <!-- Community -->
        <div class="epmtyspace" style="height: 10px"></div>
        `;
    }
}
