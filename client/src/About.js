import React from 'react';
import { Container, Divider, Grid } from 'semantic-ui-react'

const About = () => {
   return (
        <Container className='page-segment' id='one'>
            <Grid>
                <Grid.Column width={1}>
                    <div className='custom-title'>Hello</div>
                </Grid.Column>
                <Grid.Column width={15}>
                        <div className='paragraph-small'>
                            <p>
                                Welcome to my site! I am a JavaScript developer. I started learning to code back in 2013 and since then I have expanded my skills through onsite and online communities including Udacity, Fullstack Academy and General Assembly. I'm all about good design, semantic code and and fully functional and data-driven user interfaces. <br />
                                <a
                                    href='https://github.com/kjalnes'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >GitHub</a><span> | </span>
                                <a
                                    href='https://www.linkedin.com/in/kristine-alnes-a1702071/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >LinkedIn</a>
                            </p>

                            <Divider horizontal section>
                                My stack &#9776;
                            </Divider>

                            <Grid divided columns={6} doubling>
                                <Grid.Column>JavaScript</Grid.Column>
                                <Grid.Column>React</Grid.Column>
                                <Grid.Column>Redux</Grid.Column>
                                <Grid.Column>Node</Grid.Column>
                                <Grid.Column>PostgreSQL</Grid.Column>
                                <Grid.Column>Sequelize</Grid.Column>
                            </Grid>
                            <Grid divided columns={6} doubling>
                                <Grid.Column>Webpack</Grid.Column>
                                <Grid.Column>Git</Grid.Column>
                                <Grid.Column>Bash</Grid.Column>
                                <Grid.Column>AWS EC2</Grid.Column>
                                <Grid.Column>AWS S3</Grid.Column>
                                <Grid.Column>AWS RDS</Grid.Column>
                            </Grid>
                            <Grid divided columns={6} doubling>
                                <Grid.Column>HTML5</Grid.Column>
                                <Grid.Column>CSS3</Grid.Column>
                                <Grid.Column>Mocha</Grid.Column>
                                <Grid.Column>Chai</Grid.Column>
                                <Grid.Column>CircleCI</Grid.Column>
                                <Grid.Column>TravisCI</Grid.Column>
                            </Grid>
                        </div>
                    </Grid.Column>
            </Grid>
        </Container>
    )

}

export default About;

