import React, { Component } from 'react'
import { Modal, Button, Image } from 'semantic-ui-react'
import ImageGallery from 'react-image-gallery';

const modalContent = {
    wmp: {
        header: 'Peace Letter App',
        content: 'This is the content',
        galleryFormat: 'landscape',
        items: [
            { original: '../../assets/images/wmp/one.PNG' },
            { original: '../../assets/images/wmp/two.PNG' },
            { original: '../../assets/images/wmp/three.PNG' },
            { original: '../../assets/images/wmp/four.PNG' },
            { original: '../../assets/images/wmp/five.PNG' },
            { original: '../../assets/images/wmp/six.PNG' },
            { original: '../../assets/images/wmp/seven.PNG' },
            { original: '../../assets/images/wmp/eight.PNG' }
        ]
    },
    oosa: {
        header: 'Myoosa Hiring App',
        content: 'Content',
        galleryFormat: 'portrait',
        items: [
            { original: '../../assets/images/oosa/oosa_1.PNG' },
            { original: '../../assets/images/oosa/oosa_2.PNG' },
            { original: '../../assets/images/oosa/oosa_3.PNG' },
            { original: '../../assets/images/oosa/oosa_4.PNG' },
            { original: '../../assets/images/oosa/oosa_5.PNG' },
            { original: '../../assets/images/oosa/oosa_6.PNG' },
            { original: '../../assets/images/oosa/oosa_7.PNG' },
            { original: '../../assets/images/oosa/oosa_8.PNG' },
            { original: '../../assets/images/oosa/oosa_9.PNG' },
            { original: '../../assets/images/oosa/oosa_10.PNG' },
            { original: '../../assets/images/oosa/oosa_11.PNG' },
            { original: '../../assets/images/oosa/oosa_12.PNG' },
            { original: '../../assets/images/oosa/oosa_13.PNG' },
            { original: '../../assets/images/oosa/oosa_14.PNG' },
            { original: '../../assets/images/oosa/oosa_15.PNG' },
            { original: '../../assets/images/oosa/oosa_16.PNG' },
            { original: '../../assets/images/oosa/oosa_17.PNG' },
            { original: '../../assets/images/oosa/oosa_18.PNG' },
            { original: '../../assets/images/oosa/oosa_19.PNG' },
            { original: '../../assets/images/oosa/oosa_20.PNG' }
        ]
    }
}



class GalleryModal extends Component {
    state = {
        open: this.props.open
    }

    componentWillReceiveProps({ open }) {
        this.setState({ open })
    }

    render() {
        const { toggleGalleryModal, project } = this.props;

        if (!project || !modalContent[project]) return null;

        const { header, content, items, galleryFormat } = modalContent[ project ];
        const { open } = this.state;
        const inlineStyle = {
            modal : {
                marginLeft: 'auto',
                marginRight: 'auto',
            },
            content: {
                landscape: {
                    textAlign: 'center'
                },
                portrait: {
                    textAlign: 'center',
                    width: '40%',
                    margin: '0 auto'
                }
            }
        };

        return (
            <div>
                <Modal
                    open={open}
                    dimmer='inverted'
                    style={inlineStyle.modal}
                    size='large'
                >
                    <Modal.Actions style={{margin: '0 auto'}}>
                        <Button basic onClick={toggleGalleryModal}>X</Button>
                    </Modal.Actions>
                    <Modal.Header style={{textAlign: 'center'}}>
                    { header }
                    </Modal.Header>
                    <Modal.Content style={inlineStyle.content[ galleryFormat ]}>

                    { content }
                    <ImageGallery
                        items={items}
                        showThumbnails={false}
                        showPlayButton={false}
                    />
                    </Modal.Content>

                </Modal>
            </div>
        );
    }
}

export default GalleryModal;
