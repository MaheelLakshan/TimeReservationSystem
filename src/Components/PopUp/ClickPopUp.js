import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// ... import other necessary components ...

const ClickPopUp = ({ event, onClose }) => {
  if (!event) {
    return null; // Render nothing if no event is selected
  }

  const handleEdit = () => {
    // Implement the edit functionality here...
    // For example, you can open a different edit modal or navigate to an edit page.
    console.log('Edit clicked');
  };

  const handleDelete = () => {
    // Implement the delete functionality here...
    // For example, you can open a delete confirmation modal.
    console.log('Delete clicked');
  };

  return (
    <>
      <Modal show={true} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{event.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Display event details or other content here */}
          <p>Reservation Place: {event.place}</p>
          <p>Start Date: {event.start.toLocaleString()}</p>
          <p>End Date: {event.end.toLocaleString()}</p>
          {/* Add other event details or form fields as needed */}
        </Modal.Body>
        <Modal.Footer>
          {/* Edit button */}
          <Button variant="primary" onClick={handleEdit}>
            Edit
          </Button>

          {/* Delete button */}
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>

          {/* Close button */}
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ClickPopUp;
