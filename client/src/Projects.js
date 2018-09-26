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

        console.log('project', project)
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
                <Grid>
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
                                            <div><em>Website and teacher program app that algorithmically connects teachers peer-to-peer </em>
                                            </div>
                                            - App: React, Redux, Node.js/Express, Sequelize, PostgreSQL, Secure session management w/ JWT, nodemailer, AWS EC2, AWS S3, AWS RDS <br />
                                            - Website: UI/UX, design and development of CMS - JavaScript, jQuery, PHP, HTML and CSS
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
                                            <em>Hiring app for dental company Oosa.</em><br />
                                            - React, Redux, Node.js/Express, Sequelize, PostgreSQL, Secure session management w/ JWT, postman, nodemailer, SCSS <br />
                                            - Deployed to AWS EC2, data storage in S3 and RDS <br />
                                            - To see codebase, send me a message
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
                                            <a href='https://madebydon.herokuapp.com/#/' target='_blank' rel='noopener noreferrer'>App</a> | <a href='https://github.com/kjalnes/madebydon' target='_blank' rel='noopener noreferrer'>GitHub</a><br />
                                            <em>Ecommerce website for 85-year-old friend and neighbor Don, a West Village leather maker and artist</em><br />
                                            - React, Redux, Node.js/Express, Sequelize, PostgreSQL, technical and design consulting <br />
                                            - Secure session management w/ JWT, SSL, Stripe integration<br />
                                            - Project was run using agile development
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
                                            <em>Code generator application that builds boilerplate CRUD Node.js app based on user input. User can choose to deploy generated app straight to their own Github.</em><br />
                                            - React, Redux, Node.js/Express, Sequelize, PostgreSQL,  modular routing - GitHub OAuth authentication to allow for direct deployment to user’s GitHub directly<br />
                                            - Server testing with Travis CI, Supertest, Mocha, Chai
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
                                            <a href='https://github.com/kjalnes/readable' target='_blank' rel='noopener noreferrer'>GitHub</a><br />
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
                                <div><h4>Aeternal Lovers Sound Systems</h4><br /> Web Developer, UI/UX, technical and design consulting | <a href='http://www.aeternal.nyc' target='_blank' rel='noopener noreferrer'>Website</a></div>
                                </Grid.Column>
                                <Grid.Column>
                                    <div><h4>Malin Landæus Select Collections </h4><br /> Web Developer, UI/UX, technical and design consulting | <a href='http://www.malinlandaeus.com' target='_blank' rel='noopener noreferrer'>Website</a>
                                    </div>
                                </Grid.Column>
                                <Grid.Column>
                                    <div><h4>Christopher Jeney </h4><br /> Web Developer | <a href='http://www.christopherjeney.com' target='_blank' rel='noopener noreferrer'>Website</a></div>
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

