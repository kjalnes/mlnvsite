import React from 'react';
import { Divider, Grid, Image } from 'semantic-ui-react'
import me from '../me.png';

const About = () => {
   return (
        <div className='page-segment'>
            <div className='spacer one' id='about'>
                &nbsp;
            </div>
            <Grid>
                <Grid.Column width={1}  >
                    <div className='custom-title'>Hello</div>
                </Grid.Column>
                <Grid.Column computer={15} tablet={13} mobile={13} >
                    <div>
                        <div className='bio'>
                            <div className='bio-text'>Hello! I am a JavaScript developer. I began learning code 5+ years ago and since then I have expanded my frontend and backend skills through onsite and online communities including Udacity, Fullstack Academy and General Assembly. Still learning and loving it. I have a background in design and I'm all about semantic code, solid UX and fully functional and data-driven user interfaces.
                                <br />
                                <a
                                    href='https://github.com/kjalnes'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >GitHub</a><span> | </span>
                                <a
                                    href='https://www.linkedin.com/in/kristine-alnes-a1702071/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >LinkedIn</a><span></span>
                                <br /><br />
                            </div>
                            <Image className='portrait' circular src={me} />
                        </div>
                        <Divider horizontal section>
                            Stack &#9776;
                        </Divider>
                        <br /><br />
                        <Grid columns={6} doubling>
                            <Grid.Column>JavaScript</Grid.Column>
                            <Grid.Column>React</Grid.Column>
                            <Grid.Column>Redux</Grid.Column>
                            <Grid.Column>Node</Grid.Column>
                            <Grid.Column>PostgreSQL</Grid.Column>
                            <Grid.Column>Sequelize</Grid.Column>
                        </Grid>
                        <Grid columns={6} doubling>
                            <Grid.Column>Webpack</Grid.Column>
                            <Grid.Column>Git</Grid.Column>
                            <Grid.Column>Bash</Grid.Column>
                            <Grid.Column>AWS EC2</Grid.Column>
                            <Grid.Column>AWS S3</Grid.Column>
                            <Grid.Column>AWS RDS</Grid.Column>
                        </Grid>
                        <Grid columns={6} doubling>
                            <Grid.Column>HTML5</Grid.Column>
                            <Grid.Column>CSS3</Grid.Column>
                            <Grid.Column>Sass</Grid.Column>
                            <Grid.Column>Jasmine</Grid.Column>
                            <Grid.Column>SuperTest</Grid.Column>
                            <Grid.Column>Chai</Grid.Column>
                        </Grid>
                    </div>
                </Grid.Column>
            </Grid>
        </div>
    );
}

export default About;
