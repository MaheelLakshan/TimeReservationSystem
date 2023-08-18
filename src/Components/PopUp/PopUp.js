import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import GlobalContext from '../../context/GlobalContext';
import moment from 'moment';

function PopUp() {
  // const [show, setShow] = useState(true);
  const {
    showPopUp,
    setShowPopUp,
    // reservations,
    // setReservations,
    selectedEvent,
    dispatchCalEvent,
    passStart,
    passEnd,
    credential,
    selectedPlace,
    setSelectedPlace,
  } = useContext(GlobalContext);

  const handleClose = () => setShowPopUp(false);
  // const handleShow = () => setShow(true);

  const [title, setTitle] = useState(
    selectedEvent ? selectedEvent.title : 'test'
  );
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ''
  );
  const [isSelected, setIsSelected] = useState(false);
  const [isSelectedOpt, setIsSelectedOpt] = useState(false);

  const [RpstartDate, setRpStartDate] = useState(null);
  const [RpendDate, setRpEndDate] = useState(null);

  const [startDate, setStartDate] = useState(passStart);
  const [endDate, setEndDate] = useState(passEnd);

  const [selectedDays, setSelectedDays] = useState([]);

  // const { userName, userType, userEmail } = credential;
  // Access user information

  // console.log(credential);

  const handleSave = () => {
    const formattedStartDate = RpstartDate
      ? moment(RpstartDate).format('YYYY-MM-DD')
      : null;
    const formattedEndDate = RpendDate
      ? moment(RpendDate).format('YYYY-MM-DD')
      : null;

    const now = new Date();

    const calendarEvent = {
      title: title,
      description: description,
      place: selectedPlace,
      // label: selectedLabel,
      // day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
      RepeatStart: formattedStartDate,
      RepeatEnd: formattedEndDate,
      start: startDate,
      end: endDate,
      createdBy: credential, // Replace 'userId' with the actual user ID
      creationTime: now,
    };

    // const selectedDateRange = [];
    // const currentDate = moment(startDate);
    // console.log(currentDate);
    // while (currentDate <= moment(endDate)) {
    //   selectedDateRange.push(currentDate.format('YYYY-MM-DD'));
    //   currentDate.add(7, 'days'); // Add 7 days instead of 1 day

    // }
    // console.log(selectedDateRange);

    // if (selectedDateRange) {
    //   selectedDateRange.forEach((date) => {
    //     const calendarEvent = {
    //       title: title,
    //       description: description,
    //       place: selectedPlace,
    //       id: selectedEvent ? selectedEvent.id : Date.now(),
    //       RepeatStart: formattedStartDate,
    //       RepeatEnd: formattedEndDate,
    //       start: moment(date).startOf('day').toDate(), // Start of the selected day
    //       end: moment(date).endOf('day').toDate(), // End of the selected day
    //       createdBy: credential,
    //       creationTime: now,
    //     };

    //     if (selectedEvent) {
    //       dispatchCalEvent({ type: 'update', payload: calendarEvent });
    //     } else {
    //       dispatchCalEvent({ type: 'push', payload: calendarEvent });
    //     }
    //   });
    // }

    // setReservations(calendarEvent);
    if (selectedEvent) {
      dispatchCalEvent({ type: 'update', payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: 'push', payload: calendarEvent });
    }

    setShowPopUp(false);
  };

  // const [selectedDateTime, setSelectedDateTime] = useState(new Date()); // Default selected date and time
  const [selectedOptDates, setSelectedOptDates] = useState([]);

  const handleDateSelect = (dates) => {
    setSelectedOptDates(dates);
  };

  const handlePlaceChange = (e) => {
    setSelectedPlace(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setIsSelected(e.target.checked);
  };

  const handleCheckboxChangeOpt = (e) => {
    setIsSelectedOpt(e.target.checked);
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <Modal show={showPopUp} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Make A Reservation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <span
              onClick={() => {
                // dispatchCalEvent({
                //   type: 'delete',
                //   payload: selectedEvent,
                // });
                // setShowPopUp(false);
              }}
              className="material-icons-outlined text-gray-400 cursor-pointer"
            ></span>
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
              <Form.Control
                type="text"
                placeholder="EE06"
                value={title}
                onChange={handleTitleChange}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              style={{ width: '100%' }}
              controlId="PopUpForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="PopUpForm.ControlTextarea1">
              <Form.Label>Date and Time Selection</Form.Label>
              <br />
              <DatePicker
                selected={selectedDateTime}
                onChange={handleDateTimeChange}
                showTimeSelect
                dateFormat="yyyy MMMM d , h:mm aa"
              />
            </Form.Group> */}

            <Form.Group className="mb-3">
              <Form.Label>Date and Time Range</Form.Label>
              <div>
                <label style={{ marginRight: '10px' }}>From: </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className="form-control"
                />
              </div>
              <br />
              <div>
                <label style={{ marginRight: '30px' }}>To: </label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className="form-control"
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Recursion Option</Form.Label>
              <Form.Check
                type="checkbox"
                id="checkbox1"
                label="Make this reservation on same day same time for each week"
                checked={isSelected}
                onChange={handleCheckboxChange}
              />
              {isSelected && (
                <Form.Group className="mb-3">
                  <Form.Label>Date Range</Form.Label>
                  <div>
                    <label style={{ marginRight: '10px' }}>From: </label>
                    <DatePicker
                      selected={RpstartDate}
                      onChange={(date) => setRpStartDate(date)}
                      selectsStart
                      startDate={RpstartDate}
                      endDate={RpendDate}
                      dateFormat="MMMM d, yyyy"
                      className="form-control"
                    />
                  </div>
                  <br />
                  <div>
                    <label style={{ marginRight: '30px' }}>To: </label>
                    <DatePicker
                      selected={RpendDate}
                      onChange={(date) => setRpEndDate(date)}
                      selectsEnd
                      startDate={RpstartDate}
                      endDate={RpendDate}
                      minDate={RpstartDate}
                      dateFormat="MMMM d, yyyy"
                      className="form-control"
                    />
                  </div>
                </Form.Group>
              )}
              <Form.Check
                type="checkbox"
                id="checkbox1"
                label="Selected days to be recursive"
                checked={isSelectedOpt}
                onChange={handleCheckboxChangeOpt}
              />
              {/* {isSelectedOpt && (
                <Form.Group className="mb-3">
                  <Form.Label>Select Dates</Form.Label>
                  <DatePicker
                    selected={selectedOptDates}
                    onChange={handleDateSelect}
                    inline
                    isMultiSelect
                  />
                </Form.Group>
              )} */}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUp;
