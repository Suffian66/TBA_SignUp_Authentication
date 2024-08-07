
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useGetconfirmEmailQuery } from './services/EmailConfirm';

const ConfirmationEmail = () => {
  const { data, error, isLoading } = useGetconfirmEmailQuery();

  // Check if the data has been fetched successfully
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Check if there's an error
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // If data exists, render the modal
  if (data) {
    return (
      <div>
        <div className="modal show" style={{ display: 'block', position: 'initial' }}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Email Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Your Email has been Verified</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary">Close</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </div>
    );
  }

  // Default return if data is null (shouldn't happen if API is correctly implemented)
  return <div>No data</div>;
};

export default ConfirmationEmail;
