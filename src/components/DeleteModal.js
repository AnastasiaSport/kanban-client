import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function DeleteModal({task, deleteTask}) {
    const [modal, setModal] = useState(false);

    const okButtonHandler = () => {
        deleteTask(task._id);
        toggle();
    }

    const toggle = () => setModal(!modal);

    return (
        <>
            <Button color="danger" onClick={toggle}>
                Delete
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Delete Task</ModalHeader>
                <ModalBody>
                    Are you sure to delete this task:  <b> {task.name} </b> ?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={okButtonHandler} >
                        Ok
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default DeleteModal;