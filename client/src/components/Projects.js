import React, { Component } from 'react'
import { Divider, Grid, Button } from 'semantic-ui-react'
import GalleryModal from './GalleryModal';
import VideoModal from './VideoModal';

class Projects extends Component {
    state = {
        openGalleryModal: false,
        openVideoModal: false,
        project: 'wmp'
    }

    toggleGalleryModal(project) {
        this.setState({ openGalleryModal: !this.state.openGalleryModal, project })
    }

    toggleVideoModal(project) {
        this.setState({ openVideoModal: !this.state.openVideoModal, project })
    }

    render() {
        const { openGalleryModal, openVideoModal, project } = this.state;

        return (
            <div className='page-segment'>
                <GalleryModal
                    toggleGalleryModal={this.toggleGalleryModal.bind(this)}
                    open={openGalleryModal}
                    project={project} />
                <VideoModal
                    toggleVideoModal={this.toggleVideoModal.bind(this)}
                    open={openVideoModal}
                    project={project} />
                <Grid id='projects'>
                    <Grid.Column width={1}>
                        <div className='spacer two'>&nbsp;</div>
                        <div className='custom-title'>Projects</div>
                    </Grid.Column>
                    <Grid.Column computer={15} tablet={13} mobile={13} >
                        <div className='spacer two'>&nbsp;</div>
                        <Divider horizontal section style={{marginTop: '0rem'}}>
                            Full stack
                        </Divider>
                        <Grid celled='internally' stackable>
                            <Grid.Row columns={3}>
                                <Grid.Column>
                                    <div>
                                        <h3>We Make Peace</h3>
                                        <h5>Educational Program App</h5>
                                        <p>Full Stack Software Engineer / UI Design</p>
                                        <p>
                                            <a href='http://www.app.wemakepeace.org' target='_blank' rel='noopener noreferrer'>App</a> | <a href='http://www.wemakepeace.org' target='_blank' rel='noopener noreferrer'>Website</a> | <a href='https://github.com/wemakepeace/wmpapp' target='_blank' rel='noopener noreferrer'>GitHub</a>
                                        </p>
                                        <p>
                                            <em>CMS site with custom JS templating and fullstack app that automates letter exchange program control flow by connecting teachers peer to peer algorithmically using geolocation to match classes via student age, class size, and location.
                                            </em>
                                        </p>
                                        <p>
                                            Read about the program <a href='https://wemakepeace.org/peace-letter-program/' target='_blank' rel='noopener noreferrer'>here</a>.
                                        </p>
                                        <p>- App: Built using React, Redux, Node.js/Express, Sequelize, PostgreSQL(RDS), secure session management using JWT, OAuth, password admin via Nodemailer, AWS EC2, AWS S3, AWS RD
                                        </p>
                                        <p>
                                            - Site: UI/UX, design and development of CMS - JavaScript, jQuery, PHP, HTML and CSS
                                        </p>
                                        <Button basic onClick={() => this.toggleGalleryModal('wmp')}>
                                            Project gallery
                                        </Button>
                                    </div>
                                </Grid.Column>
                                <Grid.Column>
                                    <div>
                                        <h3>Oosa</h3>
                                        <h5>Hiring App</h5>
                                        <p>Full Stack Software Engineer, UI Design</p>
                                        <p><a href='http://app.myoosa.com/' target='_blank' rel='noopener noreferrer'>App</a></p>
                                        <p>
                                            <em>Hiring app that connects prospective dental professionals w/ employers.</em>
                                        </p>
                                        <p>
                                            - React, Redux, Node.js/Express, PostgreSQL (RDS), Sequelize, Secure session management w/ JWT, Postman, Nodemailer, SCSS <br />
                                            - Deployed to AWS EC2, data storage in S3 and RDS <br />
                                            - Initial app was built by me, with additional engieneers joining the team after initial mvp<br />
                                            - To see codebase sample, send me a message request
                                        </p>
                                        <Button basic onClick={() => this.toggleGalleryModal('oosa')}>
                                            Project gallery
                                        </Button>
                                    </div>
                                </Grid.Column>
                                <Grid.Column>
                                    <div>
                                        <h3>SofaStack</h3>
                                        <h5>Software Developer Tool</h5>
                                        <p>Full Stack Software Engineer, UI Design</p>
                                        <p>
                                            <a href='https://sofastack.herokuapp.com/' target='_blank' rel='noopener noreferrer'>App</a> | <a href='https://github.com/kjalnes/sofastack' target='_blank' rel='noopener noreferrer'>GitHub</a>
                                        </p>
                                        <p>
                                            <em>Dev tool that generates a CRUD Node.js / Express application w/ routes / DB integration. Github integration to automatically deploy repository on completed API / DB schema definitions.</em>
                                        </p>
                                        <p>
                                            - React, Redux, Bluebird, Passport, Webpack, PostgreSQL, Sequelize, OAuth, Mocha / Chai, SuperTest<br />
                                            - Project was built using agile development with a team of three engineers
                                        </p>
                                        <Button basic onClick={() => this.toggleVideoModal('sofastack')}>
                                            Demo Video
                                        </Button>
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={3}>
                                <Grid.Column>
                                    <div>
                                        <h3>Made By Don</h3>
                                        <h5>E-commerce</h5>
                                        <p>Full Stack Software Engineer, UI Design</p>
                                        <p>
                                            <a href='http://www.madebydon.com/#/' target='_blank' rel='noopener noreferrer'>App</a> | <a href='https://github.com/kjalnes/madebydon' target='_blank' rel='noopener noreferrer'>GitHub</a>
                                        </p>
                                        <p>
                                            <em>E-commerce site for NYC-based leather shop.</em>
                                        </p>
                                        <p>
                                            - React, Redux, Node.js/Express, Sequelize, PostgreSQL, technical and design consulting <br />
                                            - Integrated Stripe-based payment system / shopping cart, SSL integration<br />
                                            - Project was built using agile development
                                        </p>
                                        <Button basic onClick={() => this.toggleGalleryModal('madebydon')}>
                                            Project gallery
                                        </Button>
                                    </div>
                                 </Grid.Column>
                                <Grid.Column>
                                    <div>
                                        <h3>Readable</h3>
                                        <h5>Reddit clone</h5>
                                        <p>Full Stack Software Engineer</p>
                                        <p>
                                            <a href='https://morning-sands-83943.herokuapp.com/#/' target='_blank' rel='noopener noreferrer'>App</a> | <a href='https://github.com/kjalnes/reddit_proj' target='_blank' rel='noopener noreferrer'>GitHub</a>
                                        </p>
                                        <p>
                                            <em>Reddit clone application for user posting.</em>
                                        </p>
                                        <p>
                                            - React, React Router, Redux, Node.js/Express
                                        </p>
                                    </div>
                                </Grid.Column>
                                <Grid.Column>
                                    <div>
                                        <h3>Mobile Flashcards</h3>
                                        <h5>Study App</h5>
                                        <p>Full Stack Software Engineer</p>
                                        <p>
                                            <a href='https://github.com/kjalnes/mobile-flashcards' target='_blank' rel='noopener noreferrer'>GitHub</a>
                                        </p>
                                        <p>
                                            <em>Built iOS Flashcard study app to learn and explore React Native.</em>
                                        </p>
                                        <p>
                                            - React, React Native, Redux
                                        </p>
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

                        <Divider horizontal section style={{margin: '60px 0'}}>
                            Frontend + UI + design
                        </Divider>

                        <Grid divided='vertically' stackable>
                                <Grid.Row>
                                    <div><h4>Christopher Jeney </h4>Web Developer, CMS with custom Js theme based on client wireframes
                                    <br />
                                    <a href='http://www.christopherjeney.com' target='_blank' rel='noopener noreferrer'>Website</a></div>
                                </Grid.Row>
                                <Grid.Row>
                                    <div><h4>Malin Landæus Select Collections </h4> Web Developer and deisgner, UI/UX
                                    <br />
                                    <a href='http://www.malinlandaeus.com' target='_blank' rel='noopener noreferrer'>Website</a>
                                    </div>
                                </Grid.Row>
                                <Grid.Row>
                                    <div><h4>Aeternal Lovers Sound Systems</h4>Web Developer, UI/UX
                                    <br />
                                    <a href='http://www.aeternal.nyc' target='_blank' rel='noopener noreferrer'>Website</a></div>
                                </Grid.Row>
                        </Grid>

                        <Divider horizontal section style={{margin: '40px 0'}}>
                            Studies
                        </Divider>

                        <Grid divided stackable>
                            <Grid.Row>
                                <div>
                                    <h4>A study in Layout and Positioning</h4><br />
                                    Illustrated study in CSS layout and positioning
                                    <br />
                                    <a href='https://kjalnes.github.io/css-layout/' target='_blank' rel='noopener noreferrer'>Website</a> | <a href='https://github.com/kjalnes/css-layout' target='_blank' rel='noopener noreferrer'>Github</a><br />
                                </div>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Projects;

