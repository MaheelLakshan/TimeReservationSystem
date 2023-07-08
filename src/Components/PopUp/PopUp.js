import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { calanderDateSelect } from '../../context/context';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function PopUp() {
  // const [show, setShow] = useState(true);
  const { showPopUp, setShowPopUp } = useContext(calanderDateSelect);

  const handleClose = () => setShowPopUp(false);
  // const handleShow = () => setShow(true);

  const [selectedDateTime, setSelectedDateTime] = useState(new Date()); // Default selected date and time

  const handleDateTimeChange = (date) => {
    setSelectedDateTime(date);
  };

  const [selectedPlace, setSelectedPlace] = useState('default place');

  const handlePlaceChange = (e) => {
    setSelectedPlace(e.target.value);
  };

  const [isSelected, setIsSelected] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleCheckboxChange = (e) => {
    setIsSelected(e.target.checked);
  };

  return (
    <>
      <Modal show={showPopUp} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Make A Reservation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* <Form.Group className="mb-3">
              <Form.Label>Select the Reservation Places</Form.Label>
              <Row>
                <Col>
                  <Form.Check
                    type="checkbox"
                    id="checkbox1"
                    label="New Computer Center"
                  />
                  <Form.Check
                    type="checkbox"
                    id="checkbox2"
                    label="Old Computer Center"
                  />
                  <Form.Check
                    type="checkbox"
                    id="checkbox3"
                    label="Seminar Room"
                  />
                </Col>
              </Row>
            </Form.Group> */}

            <Form.Group className="mb-3">
              <Form.Label>Select the Reservation Place</Form.Label>
              <Form.Select value={selectedPlace} onChange={handlePlaceChange}>
                <option>{selectedPlace}</option>
                <option value="New Computer Center">New Computer Center</option>
                <option value="Old Computer Center">Old Computer Center</option>
                <option value="Seminar Room">Seminar Room</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="PopUpForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="EE06" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              style={{ width: '100%' }}
              controlId="PopUpForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="PopUpForm.ControlTextarea1">
              <Form.Label>Date and Time Selection</Form.Label>
              <br />
              <DatePicker
                selected={selectedDateTime}
                onChange={handleDateTimeChange}
                showTimeSelect
                dateFormat="yyyy MMMM d , h:mm aa"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Make this reservation for each week</Form.Label>
              <Form.Check
                type="checkbox"
                id="checkbox1"
                label="yes"
                checked={isSelected}
                onChange={handleCheckboxChange}
              />
              {isSelected && (
                <Form.Group className="mb-3">
                  <Form.Label>Date Range</Form.Label>
                  <div>
                    <label style={{ marginRight: '10px' }}>From: </label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      dateFormat="MMMM d, yyyy"
                      className="form-control"
                    />
                  </div>
                  <br />
                  <div>
                    <label style={{ marginRight: '30px' }}>To: </label>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                      dateFormat="MMMM d, yyyy"
                      className="form-control"
                    />
                  </div>
                </Form.Group>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUp;
