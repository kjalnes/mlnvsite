import React from 'react'
import { Divider, Grid } from 'semantic-ui-react'

const Projects = () => {
    return (
        <div className='page-segment'>
            <div className='spacer two' id='projects'>
                &nbsp;
            </div>
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
                                    Full Stack Software Engineer
                                    <div>
                                        <a href='http://www.wemakepeace.org' target='_blank' rel='noopener noreferrer'>Link</a> |  <a href='https://github.com/kjalnes/wmp-portal' target='_blank' rel='noopener noreferrer'>GitHub</a><br />
                                        <em>Website and teacher portal that algorithmically connects teachers peer-to-peer </em><br />
                                        - Portal application: React, Redux, Node.js/Express, Sequelize, PostgreSQL, , Leaflet.js - Website: UI/UX, design and development of CMS - JavaScript, jQuery, PHP , HTML and CSS
                                    </div>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div>
                                    <h4>Oosa</h4>
                                    Full Stack Software Engineer, UI/UX
                                    <div>
                                        <a href='https://myoosa.com/' target='_blank' rel='noopener noreferrer'>Visit web application</a><br />
                                        <em>Hiring app for dental company Oosa.</em><br />
                                        - React, Redux, Node.js/Express, Sequelize, PostgreSQL, Secure session management w/ JWT, nodemailer, SCSS
                                        - Deployed to AWS EC2, data storage in S3 and RDS
                                        - To see codebase send me a message
                                    </div>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div>
                                    <h4>Made By Don</h4>
                                    Full Stack Software Engineer, UI/UX and design
                                    <div>
                                        <a href='https://madebydon.herokuapp.com/#/' target='_blank' rel='noopener noreferrer'>Link</a> | <a href='https://github.com/kjalnes/madebydon' target='_blank' rel='noopener noreferrer'>GitHub</a><br />
                                        <em>Ecommerce website for 85-year-old friend and neighbor Don, a West Village leather maker and artist</em><br />
                                        - React, Redux, Node.js/Express, Sequelize, PostgreSQL, technical and design consulting <br />
                                        - Secure session management w/ JWT, SSL, Stripe integration<br />
                                        - Project was run using agile development with Waffle.io.
                                    </div>
                                </div>
                             </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={3}>
                          <Grid.Column>
                                <div>
                                    <h4>SofaStack</h4>
                                    Full Stack Software Engineer, UI/UX
                                    <div>
                                        <a href='https://sofastack.herokuapp.com/' target='_blank' rel='noopener noreferrer'>Visit web application</a> | <a href='https://github.com/kjalnes/sofastack' target='_blank' rel='noopener noreferrer'>GitHub</a><br />
                                        <em>Code generator application that builds boilerplate CRUD Node.js app based on UI input</em><br />
                                        - React, Redux, Node.js/Express, Sequelize, PostgreSQL,  modular routing - GitHub OAuth authentication to allow for direct deployment to user’s GitHub directly
                                        - Server testing - Travis CI, Supertest, Mocha, Chai
                                    </div>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div>
                                    <h4>Readable</h4>
                                    Full Stack Software Engineer
                                    <div>
                                        <a href='' target='_blank' rel='noopener noreferrer'>Link</a> |  <a href='https://github.com/kjalnes/readable' target='_blank' rel='noopener noreferrer'>GitHub</a><br />
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
                                        <a href='' target='_blank' rel='noopener noreferrer'>Link</a> |  <a href='https://github.com/kjalnes/mobile-flashcards' target='_blank' rel='noopener noreferrer'>GitHub</a><br />
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
                            <div><h4>Aeternal Lovers Sound Systems</h4><br /> Web Developer, UI/UX, technical and design consulting | <a href='www.aeternal.nyc' target='_blank' rel='noopener noreferrer'>Link</a></div>
                            </Grid.Column>
                            <Grid.Column>
                                <div><h4>Malin Landæus Select Collections </h4><br /> Web Developer, UI/UX, technical and design consulting | <a href='www.malinlandaeus.com' target='_blank' rel='noopener noreferrer'>Link</a>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div><h4>Christopher Jeney </h4><br /> Web Developer | <a href='www.christopherjeney.com' target='_blank' rel='noopener noreferrer'>Link</a></div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </Grid>
        </div>
    );
}

export default Projects;

