import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("SUBCON | Welcome!");
    }

    async getHtml() {
        return `
            <div class="banner-image lazy-image image-container">
            <div class="fade">
                <div class="banner-content">
                    <h1>DIGITAL EXPERIENCE</h1>
                    <p>Learning has never been more simpler, learning while being rewarded is the fastest way to record information in anyone's mind</p>
                    <div class="enter">
                        <a class="read-more nav__link" href="/sign-in" data-link>Sign In</a>
                        <a class="read-more nav__link" href="/sign-up" data-link>Sign Up</a>
                    </div>
                </div>
                <div class="banner-content-2">
                    <h1 style="margin-right: 50px;">REDIFINING</h1>
                    <h1>EDUCATION</h1>
                </div>
                <div class="trademark">
                    <p>All rights reserved, &copy Subcon.inc. This is a legally registered organisation, legal actions will be taken shou you use our work without our consent or copy without our permission.</p>
                </div>
            </div>
        </div>
        <div class="landing-content">
            <div class="landing-what-we-offer">
                <div class="heading">
                    <h1>What We Offer</h1>
                    <p>Be aware of the services we offer, should it not suit your livelihood prossess.</p>
                </div>
                <div class="body">
                    <div>
                        <h2 class="body-heading">Education</h2>
                        <p>We are focused on giving you reasons to know what you must. Reading books is fun until you start losing motivation, that's where we come in. Today we live in a world where attention span is declining from all of us, thus learning a subset of information is way much easier rather than having to study an entire library.</p>
                        <a class="read-more nav__link" href="/about" data-link>
                            <div class="global-icon"><i class="bx bx-note icon"></i></div>
                            <p>Read More...</p>
                        </a>
                    </div>
                    <div>
                        <h2 class="body-heading">Rewards</h2>
                        <p>Study knowing there is a reward waiting for you just around the corner while your desire to read is still burning. Most students have a desire to study but realizing that it is a long term investment they start to lose patience. We are here to fill the gap between where you are and where you are going, thus you won't feel the wait.</p>
                        <a class="read-more nav__link" href="/about" data-link>
                            <div class="global-icon"><i class="bx bx-note icon"></i></div>
                            <p>Read More...</p>
                        </a>
                    </div>
                    <div>
                        <h2 class="body-heading">Educational Tips & Tricks</h2>
                        <p>Is there a negative confidence, is it even a thing? Having a feeling that what you know is the correct way of doing things while in reality you aren't even close to the truth. Until you go out there and challenge your reality with the world's you will never know, that is why research is the default process of learning. But you don't have to do all that, we exist and have decided to make your learning experience easier. </p>
                        <a class="read-more nav__link" href="/about" data-link>
                            <div class="global-icon"><i class="bx bx-note icon"></i></div>
                            <p>Read More...</p>
                        </a>
                    </div>
                </div>
            </div>
            <!-- Who is this for -->
            <div class="landing-who-is-this-for">
                <div class="heading">
                    <h1>Who Is This For?</h1>
                    <p>Are you the target audience? Well if you are interested in finding out, there is only one way.</p>
                </div>
                <div class="body">
                    <div>
                        <div class="image">
                            <div class="fade"></div>
                        </div>
                        <div class="body-content">
                            <h2 class="body-heading">Grade 12</h2>
                            <p>Our aim is to enhance the quality of learning to make it easy for learners to excel in class. If a learner is having difficulties in learning that is only because the learner is focused in everything else but school work. There is so many fun things to do in this world that are not school related, and there are so little that are school related. learners are attracted by fun, that is all they seek, thus why can't we make learning fun to too.</p>
                            <a class="read-more nav__link" href="/about" data-link>
                                <div class="global-icon"><i class="bx bx-note icon"></i></div>
                                <p>Read More...</p>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div class="image">
                            <div class="fade"></div>
                        </div>
                        <div class="body-content">
                            <h2 class="body-heading">Collage</h2>
                            <p>This is usually the pick of childhood, a transition to adulthood. Everyone is in a process of building their purpose in life, but we all know this only lasts for the first 3 months of the year for most people. Losing focus is much easier if you don't have a definite aim in life, our task is to keep your focus safe so you don't ever lose it, the more students and your friends talk about us the more you gain power to focus on your learning process.</p>
                            <a class="read-more nav__link" href="/about" data-link>
                                <div class="global-icon"><i class="bx bx-note icon"></i></div>
                                <p>Read More...</p>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div class="image">
                            <div class="fade"></div>
                        </div>
                        <div class="body-content">
                            <h2 class="body-heading">Self taught</h2>
                            <p>It does not matter where you are, learning is for everyone, and so are we. We have adapted our business process to suit your learning experience. We work 24/7 to make sure you get the most out of your books by offering a wide range of subjects or modules. Your age doesn't matter, you have no limit to what modules you can focus on.</p>
                            <a class="read-more nav__link" href="/about" data-link>
                                <div class="global-icon"><i class="bx bx-note icon"></i></div>
                                <p>Read More...</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Why us -->
            <div class="why-us">
                <div class="heading">
                    <h1>Why Us?</h1>
                    <p>We are the reason to why you don't mind reading an entire book anymore, we stand corrected.</p>
                </div>
                <div class="body">
                    <div class="landing-community">
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
                        <p>Congratulations to <b class="username">@username</b> for being the first to answer the correct answer on Physical Science, mode 10, level 3.</p>
                        <div class="info">
                            <div># Physical Science</div>
                            <div># Mode 10</div>
                            <div># Level 3</div>
                        </div>
                    </div>
                    <div class="landing-community">
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
                        <p>Congratulations to <b class="username">@username</b> for being the first to answer the correct answer on Physical Science, mode 10, level 7.</p>
                        <div class="info">
                            <div># Physical Science</div>
                            <div># Mode 10</div>
                            <div># Level 7</div>
                        </div>
                    </div>
                    <div class="landing-community">
                        <div class="community-top-info">
                            <div class="image"></div>
                            <div class="title">
                                <p>Update!</p>
                                <div class="date">
                                    <div class="global-date-icon"><i class="bx bx-time icon"></i></div>
                                    <p>07-03-2024</p>
                                </div>
                            </div>
                        </div>
                        <p>We have added a new textbook on Geography, please check it up. The following questions will be based on it.</p>
                        <div class="info">
                            <div># Physical Science</div>
                            <div># Mode 10</div>
                            <div># Level 3</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End -->
            <div class="landing-about-us">
                <h2 class="heading">About Us</h2>
                <p>Subcon &reg is an organisation that aims to change the history of learning.  We make everything easy for you so your mind doesn't have to take long to record information by asking you questions while providing you with a list of answers where you just have to use your experience to choose the right answer. With this idea, students will gain a burning desire to grab their books and read as we offer rewards to those who answer correctly.</p>
                <a class="read-more nav__link" href="/about" data-link>
                    <div class="global-icon"><i class="bx bx-note icon"></i></div>
                    <p>Read More...</p>
                </a>
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
        <footer>
            <div class="instagram"></div>
            <div class="facebook"></div>
            <div class="whatsapp"></div>
            <div class="thread"></div>
            <div class="x"></div>
        </footer>
        <div class="epmtyspace" style="height: 10px"></div>
        `;
    }
}
