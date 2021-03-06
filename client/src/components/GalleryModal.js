import React, { Component } from 'react'
import { Modal, Button } from 'semantic-ui-react'
import ImageGallery from 'react-image-gallery';

const modalContent = {
    wmp: {
        header: 'Educational Program App',
        content: '',
        galleryFormat: 'landscape',
        items: [
            { original: '../../assets/images/wmp/wmp_1.PNG' },
            { original: '../../assets/images/wmp/wmp_2.PNG' },
            { original: '../../assets/images/wmp/wmp_3.PNG' },
            { original: '../../assets/images/wmp/wmp_4.PNG' },
            { original: '../../assets/images/wmp/wmp_5.PNG' },
            { original: '../../assets/images/wmp/wmp_6.PNG' },
            { original: '../../assets/images/wmp/wmp_7.PNG' },
            { original: '../../assets/images/wmp/wmp_8.PNG' },
            { original: '../../assets/images/wmp/wmp_9.PNG' },
            { original: '../../assets/images/wmp/wmp_10.PNG' },
            { original: '../../assets/images/wmp/wmp_11.PNG' },
            { original: '../../assets/images/wmp/wmp_12.PNG' },
            { original: '../../assets/images/wmp/wmp_13.PNG' },
            { original: '../../assets/images/wmp/wmp_14.PNG' },
            { original: '../../assets/images/wmp/wmp_15.PNG' },
            { original: '../../assets/images/wmp/wmp_16.PNG' },
            { original: '../../assets/images/wmp/wmp_17.PNG' }
        ]
    },
    madebydon: {
        header: 'E-commerce for Made By Don',
        content: '',
        galleryFormat: 'landscape',
        items: [
            { original: '../../assets/images/madebydon/mbd_1.PNG' },
            { original: '../../assets/images/madebydon/mbd_2.PNG' },
            { original: '../../assets/images/madebydon/mbd_3.PNG' },
            { original: '../../assets/images/madebydon/mbd_4.PNG' },
            { original: '../../assets/images/madebydon/mbd_6.PNG' },
            { original: '../../assets/images/madebydon/mbd_7.PNG' },
            { original: '../../assets/images/madebydon/mbd_8.PNG' },
            { original: '../../assets/images/madebydon/mbd_9.PNG' },
            { original: '../../assets/images/madebydon/mbd_10.PNG' },
            { original: '../../assets/images/madebydon/mbd_11.PNG' },
            { original: '../../assets/images/madebydon/mbd_12.PNG' }
        ]
    },
    oosa: {
        header: 'Myoosa Hiring App',
        content: '',
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

        return (
            <div>
                <Modal
                    open={open}
                    dimmer='inverted'
                    size='large'
                    className='mlnv-modal'
                >
                    <Modal.Actions style={{margin: '0 auto'}}>
                        <Button basic onClick={toggleGalleryModal}>X</Button>
                    </Modal.Actions>
                    <Modal.Header style={{textAlign: 'center'}}>
                    { header }
                    </Modal.Header>
                    <Modal.Content className={galleryFormat}>
                    { content }
                    <ImageGallery
                        items={items}
                        showThumbnails={false}
                        showPlayButton={false}
                        showFullscreenButton={false}
                    />
                    </Modal.Content>

                </Modal>
            </div>
        );
    }
}

export default GalleryModal;
