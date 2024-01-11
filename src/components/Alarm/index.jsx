/* eslint-disable react/prop-types */
import { Modal } from "rsuite";
import useSound from "use-sound";
import alarmSound from "../../assets/sounds/alarm.mp3";
import StyleRoomsEdit from "./style";
import { useEffect } from "react";

const RoomsEdit = ({ text, open, setOpen }) => {
  const [play, { stop }] = useSound(alarmSound);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) play();
    else stop();
  }, [open, play, stop]);

  return (
    <>
      <Modal
        dialogClassName="alarm-modal"
        size="md"
        open={open}
        onClose={handleClose}
      >
        <StyleRoomsEdit>
          <Modal.Body>{text}</Modal.Body>
        </StyleRoomsEdit>
      </Modal>
    </>
  );
};

export default RoomsEdit;
