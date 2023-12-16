import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal, Button } from "rsuite";
import { roomsSchema } from "../../../schemas";
import StyleRoomsCreate from "./style";

const RoomsCreate = () => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(roomsSchema),
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    reset();
    setOpen(false);
  };

  const submitHandler = async function (formData) {
    console.log(formData);
  };

  return (
    <>
      <Modal size="md" open={open} onClose={handleClose}>
        <StyleRoomsCreate>
          <form onSubmit={handleSubmit(submitHandler)}>
            <Modal.Header>
              <Modal.Title>Create room</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="form-group">
                <label htmlFor="photo">Photo</label>
                <input
                  {...register("photo")}
                  id="photo"
                  name="photo"
                  type="file"
                />
                {errors.photo?.message && (
                  <p className="error-message">{errors.photo?.message}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  {...register("name")}
                  id="name"
                  name="name"
                  type="text"
                />
                {errors.name?.message && (
                  <p className="error-message">{errors.name?.message}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="sockets">Sockets</label>
                <input
                  {...register("sockets")}
                  id="sockets"
                  name="sockets"
                  type="number"
                  min={0}
                />
                {errors.sockets?.message && (
                  <p className="error-message">{errors.sockets?.message}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="activeSockets">Active Sockets</label>
                <input
                  {...register("activeSockets")}
                  id="activeSockets"
                  name="activeSockets"
                  type="number"
                  min={0}
                />
                {errors.activeSockets?.message && (
                  <p className="error-message">
                    {errors.activeSockets?.message}
                  </p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="computers">Computers</label>
                <input
                  {...register("computers")}
                  id="computers"
                  name="computers"
                  type="number"
                  min={0}
                />
                {errors.computers?.message && (
                  <p className="error-message">{errors.computers?.message}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="markers">Markers</label>
                <input
                  {...register("markers")}
                  id="markers"
                  name="markers"
                  type="number"
                  min={0}
                />
                {errors.markers?.message && (
                  <p className="error-message">{errors.markers?.message}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="chairs">Chairs</label>
                <input
                  {...register("chairs")}
                  id="chairs"
                  name="chairs"
                  type="number"
                  min={0}
                />
                {errors.chairs?.message && (
                  <p className="error-message">{errors.chairs?.message}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="additional">Additional</label>
                <input
                  {...register("additional")}
                  id="additional"
                  name="additional"
                  type="number"
                  min={0}
                />
                {errors.additional?.message && (
                  <p className="error-message">{errors.additional?.message}</p>
                )}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleClose} appearance="subtle">
                Cancel
              </Button>
              <Button type="submit" appearance="primary">
                Save
              </Button>
            </Modal.Footer>
          </form>
        </StyleRoomsCreate>
      </Modal>
      <button onClick={handleOpen}>Add New</button>
    </>
  );
};

export default RoomsCreate;
