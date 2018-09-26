import React, { Component } from 'react'
import { Modal, Button } from 'semantic-ui-react'
import VideoPlayer from './VideoPlayer';

const modalContent = {
    sofastack: {
        header: 'Sofastack',
        content: '',
        videoPath: '../../assets/videos/sofastack-shorter.mov'
    }
}


class VideoModal extends Component {
    state = {
        open: this.props.open
    }

    componentWillReceiveProps({ open }) {
        this.setState({ open })
    }

    render() {
        const { toggleVideoModal, project } = this.props;

        if (!project || !modalContent[ project ]) return null;

        const { header, content, videoPath } = modalContent[ project ];
        const { open } = this.state;
        const inlineStyle = {
            modal : {
                marginLeft: 'auto',
                marginRight: 'auto',
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
                        <Button basic onClick={toggleVideoModal}>X</Button>
                    </Modal.Actions>
                    <Modal.Header style={{textAlign: 'center'}}>
                    { header }
                    </Modal.Header>
                    <Modal.Content className='modal-video' style={inlineStyle.modal}>
                    { content }
                    <VideoPlayer video={videoPath} />
                    </Modal.Content>

                </Modal>
            </div>
        );
    }
}

export default VideoModal;
