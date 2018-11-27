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
                <div className='spacer two' id='projects'>
                    &nbsp;
                </div>
                <GalleryModal
                    toggleGalleryModal={this.toggleGalleryModal.bind(this)}
                    open={openGalleryModal}
                    project={project} />
                <VideoModal
                    toggleVideoModal={this.toggleVideoModal.bind(this)}
                    open={openVideoModal}
                    project={project} />
                <Grid id='projects-1' className='XXXXXXXX'>
                    <Grid.Column width={1}>
                        <div className='custom-title'>Projects</div>
                    </Grid.Column>
                    <Grid.Column computer={15} tablet={13} mobile={13} >
                        <Divider horizontal section style={{marginTop: '0rem'}}>
                            Full stack
                        </Divider>
                        <Grid divided stackable>
                            <Grid.Row columns={3}>
                                <Grid.Column>
                                    <div>
                                        <h4>We Make Peace</h4>
                                        Full Stack Software Engineer / UI Design
                                        <div>
                                            <a href='http://www.app.wemakepeace.org' target='_blank' rel='noopener noreferrer'>App</a> | <a href='http://www.wemakepeace.org' target='_blank' rel='noopener noreferrer'>Website</a> | <a href='https://github.com/wemakepeace/wmpapp' target='_blank' rel='noopener noreferrer'>GitHub</a><br />
                                            <div><em>
                                                CMS site with custom JS templating and fullstack app that automates program control flow by connecting teachers peer to peer algorithmically using geolocation to match classes via student age, class size, and location

                                            </em>
                                            </div>
                                            - App: Built using React, Redux, Node.js/Express, Sequelize, PostgreSQL(RDS), secure session management using JWT, OAuth, password admin via Nodemailer, AWS EC2, AWS S3, AWS RDS<br />
                                            - Site: UI/UX, design and development of CMS - JavaScript, jQuery, PHP, HTML and CSS <br />
                                            - Both releases built and designed by me
                                        </div>
                                        <br />
                                        <Button basic onClick={() => this.toggleGalleryModal('wmp')}>
                                            Project gallery
                                        </Button>

                                    </div>
                                </Grid.Column>
                                <Grid.Column>
                                    <div>
                                        <h4>Oosa</h4>
                                        Full Stack Software Engineer, UI Design
                                        <div>
                                            <a href='http://app.myoosa.com/' target='_blank' rel='noopener noreferrer'>App</a><br />
                                            <em>Hiring app that connects prospective dental professionals w/ employers.</em><br />
                                            - React, Redux, Node.js/Express, PostgreSQL (RDS), Sequelize, Secure session management w/ JWT, Postman, Nodemailer, SCSS <br />
                                            - Deployed to AWS EC2, data storage in S3 and RDS <br />
                                            - Initial app was built by me, with additional engieneers joining the team after initial mvp<br />
                                            - To see codebase, send me a message request
                                        </div>
                                        <br />
                                        <Button basic onClick={() => this.toggleGalleryModal('oosa')}>
                                            Project gallery
                                        </Button>
                                    </div>
                                </Grid.Column>
                                <Grid.Column>
                                    <div>
                                        <h4>Made By Don</h4>
                                        Full Stack Software Engineer, UI Design
                                        <div>
                                            <a href='http://www.madebydon.com/#/' target='_blank' rel='noopener noreferrer'>App</a> | <a href='https://github.com/kjalnes/madebydon' target='_blank' rel='noopener noreferrer'>GitHub</a><br />
                                            <em>E-commerce site for NYC-based leather shop</em><br />
                                            - React, Redux, Node.js/Express, Sequelize, PostgreSQL, technical and design consulting <br />
                                            - Integrated Stripe-based payment system / shopping cart, SSL integration<br />
                                            - Project was built using agile development
                                        </div>
                                        <br />
                                        <Button basic onClick={() => this.toggleGalleryModal('madebydon')}>
                                            Project gallery
                                        </Button>
                                    </div>
                                 </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={3}>
                              <Grid.Column>
                                    <div>
                                        <h4>SofaStack</h4>
                                        Full Stack Software Engineer, UI Design
                                        <div>
                                            <a href='https://sofastack.herokuapp.com/' target='_blank' rel='noopener noreferrer'>App</a> | <a href='https://github.com/kjalnes/sofastack' target='_blank' rel='noopener noreferrer'>GitHub</a><br />
                                            <em>Dev tool that generates a CRUD Node.js / Express application w/ routes / DB integration. Github integration to automatically deploy repository on completed API / DB schema definitions</em><br />
                                            - React, Redux, Bluebird, Passport, Webpack, PostgreSQL, Sequelize, OAuth, Mocha / Chai, SuperTest<br />
                                            - Project was built using agile development with a team of three engineers
                                        </div>
                                        <br />
                                        <Button basic onClick={() => this.toggleVideoModal('sofastack')}>
                                            Demo Video
                                        </Button>
                                    </div>
                                </Grid.Column>
                                <Grid.Column>
                                    <div>
                                        <h4>Readable</h4>
                                        Full Stack Software Engineer
                                        <div>
                                            <a href='https://morning-sands-83943.herokuapp.com/#/' target='_blank' rel='noopener noreferrer'>App</a> | <a href='https://github.com/kjalnes/reddit_proj' target='_blank' rel='noopener noreferrer'>GitHub</a><br />
                                            <em>Reddit clone application for user posting</em><br />
                                            - React, React Router, Redux, Node.js/Express
                                        </div>
                                    </div>
                                </Grid.Column>
                                <Grid.Column>
                                    <div>
                                        <h4>Mobile Flashcards</h4>
                                        Full Stack Software Engineer
                                        <div>
                                            <a href='https://github.com/kjalnes/mobile-flashcards' target='_blank' rel='noopener noreferrer'>GitHub</a><br />
                                            <em>iOS Flashcard study app</em><br />
                                            - React, React Native, Redux
                                        </div>
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

                        <Divider horizontal section>
                            Frontend + UI + design
                        </Divider>

                        <Grid divided stackable>
                            <Grid.Row columns={3}>
                                <Grid.Column>
                                    <div><h4>Christopher Jeney </h4>Web Developer, CMS with custom Js theme based on client wireframes <br /><a href='http://www.christopherjeney.com' target='_blank' rel='noopener noreferrer'>Website</a></div>
                                </Grid.Column>
                                <Grid.Column>
                                    <div><h4>Malin Landæus Select Collections </h4> Web Developer and deisgner, UI/UX <br /><a href='http://www.malinlandaeus.com' target='_blank' rel='noopener noreferrer'>Website</a>
                                    </div>
                                </Grid.Column>
                                <Grid.Column>
                                    <div><h4>Aeternal Lovers Sound Systems</h4>Web Developer, UI/UX <br /><a href='http://www.aeternal.nyc' target='_blank' rel='noopener noreferrer'>Website</a></div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Projects;

