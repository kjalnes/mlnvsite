import React from 'react';
import { Grid, Container, Divider, Button } from 'semantic-ui-react'
import './App.css';
import Menu from './Menu';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';



const App = () => (
    <div className='background-image'>
        <header className="App-header">
            <h1>Make Let Not Var 【ツ】</h1>
        </header>
        <Container className='main-container'>
            <Grid stackable className='inner-container'>
                <Grid.Column computer={4} table={1} mobile={1} >
                    <div className='menu-spacer'>&nbsp;</div>
                    <Menu />
                </Grid.Column>
                <Grid.Column width={11} className='test'>
                    <div className='mobile-margins'>
                        <About />
                        <Projects />
                        <Contact />
                        <Divider hidden />
                    </div>
                </Grid.Column>
            </Grid>
        </Container>
    </div>
);

export default App;

const $ = window.$;

(function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    $(document).ready(function () {
        // $(window).scroll(function () {
        //     var top =  $(".goto-top");
        //     if ($('body').height() <= ($(window).height() + $(window).scrollTop() + 200 )) {
        //         top.animate({"margin-left": "0px"},1500);
        //     } else {
        //         top.animate({"margin-left": "-100%"}, 1500);
        //     }
        // });

        $(".goto-top").on('click', function () {
            $("html, body").animate({ scrollTop: 0 }, 400);
        });
    });
})();






