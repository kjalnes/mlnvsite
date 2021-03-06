import React, { Component } from 'react';
import axios from 'axios';
import {
    Divider,
    Grid,
    Form,
    Input,
    TextArea,
    Button,
    Icon
} from 'semantic-ui-react'

class Contact extends Component  {
    state = {
        subject: '',
        message: '',
        name: '',
        email: '',
        date: new Date(),
        response: '',
    }

    onInputChange(key, ev) {
        this.setState({ [ key ]: ev.target.value })
    }

    onSubmit() {
        return axios.post('/send', this.state)
        .then(({ data }) => this.setState(data))
    }

    render() {
        const { response } = this.state;
        return (
            <div className='page-segment'>
                <Grid id='contact'>
                    <Grid.Column width={1}>
                        <div className='spacer two'>&nbsp;</div>
                        <div className='custom-title'>Contact</div>
                    </Grid.Column>
                    <Grid.Column computer={15} tablet={13} mobile={13} >
                        <div className='spacer'>&nbsp;</div>
                        <div>
                            Feel free to reach out via <a href="mailto:kris.alnes@gmail.com?Subject=Hello%20" target="_top">email</a> or send message through <a href='https://www.linkedin.com/in/kristine-alnes-a1702071/' >LinkedIn</a>.<br />
                            Or send me a message right here
                        </div>
                        <Divider hidden />
                        <Form>
                            <Form.Field>
                                <Input placeholder='Your name'  type='text' onChange={this.onInputChange.bind(this, 'name')} />
                            </Form.Field>
                            <Form.Field>
                                <Input placeholder='Your email'  type='text' onChange={this.onInputChange.bind(this, 'email')} />
                            </Form.Field>
                            <Form.Field>
                                <Input placeholder='Subject'  type='text' onChange={this.onInputChange.bind(this, 'subject')} />
                            </Form.Field>
                            <Form.Field>
                                <TextArea placeholder='Message'  type='text' onChange={this.onInputChange.bind(this, 'message')} />
                            </Form.Field>

                        </Form>
                        <Divider hidden />
                        <Button basic color='grey' onClick={this.onSubmit.bind(this)}>Send Message</Button>
                        <div style={{ fontSize: '1.5em', margin: '30px 0' }}>
                            { response }
                        </div>
                    </Grid.Column>
                </Grid>
                <div className='spacer'>&nbsp;</div>
                <h1 className='goto-top'>To the top  <Icon name='hand pointer' /></h1>
                <div className='spacer'>&nbsp;</div>
            </div>
        );
   };
}

export default Contact;

