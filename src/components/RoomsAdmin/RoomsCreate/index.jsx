/* eslint-disable react/prop-types */
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal, Button } from "rsuite";
import { createRoom } from "../../../server";
import { roomsSchema } from "../../../schemas";
import StyleRoomsCreate from "./style";

const RoomsCreate = ({ refetch }) => {
  const [open, setOpen] = useState(false);

  const { mutate } = useMutation({
    mutationFn: createRoom,
    onError: () => toast.error("Something went wrong!"),
    onSuccess: () => {
      refetch();
      reset();
      setOpen(false);
      toast.success("Successfully created!");
    },
  });

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
    const data = new FormData();
    Object.keys(formData).forEach((el) => data.append(el, formData[el]));
    data.append("image", formData.image[0]);
    mutate(data);
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
                <label htmlFor="image">Room image</label>
                <input
                  {...register("image")}
                  id="image"
                  name="image"
                  type="file"
                />
                {errors.image?.message && (
                  <p className="error-message">{errors.image?.message}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="roomNumber">Room number</label>
                <input
                  {...register("roomNumber")}
                  id="roomNumber"
                  name="roomNumber"
                  type="number"
                />
                {errors.roomNumber?.message && (
                  <p className="error-message">{errors.roomNumber?.message}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="nSockets">Sockets</label>
                <input
                  {...register("nSockets")}
                  id="nSockets"
                  name="nSockets"
                  type="number"
                  min={0}
                />
                {errors.nSockets?.message && (
                  <p className="error-message">{errors.nSockets?.message}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="nAvailableSockets">Active Sockets</label>
                <input
                  {...register("nAvailableSockets")}
                  id="nAvailableSockets"
                  name="nAvailableSockets"
                  type="number"
                  min={0}
                />
                {errors.nAvailableSockets?.message && (
                  <p className="error-message">
                    {errors.nAvailableSockets?.message}
                  </p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="nComputers">Computers</label>
                <input
                  {...register("nComputers")}
                  id="nComputers"
                  name="nComputers"
                  type="number"
                  min={0}
                />
                {errors.nComputers?.message && (
                  <p className="error-message">{errors.nComputers?.message}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="nMarkerPens">Markers</label>
                <input
                  {...register("nMarkerPens")}
                  id="nMarkerPens"
                  name="nMarkerPens"
                  type="number"
                  min={0}
                />
                {errors.nMarkerPens?.message && (
                  <p className="error-message">{errors.nMarkerPens?.message}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="nChairs">Chairs</label>
                <input
                  {...register("nChairs")}
                  id="nChairs"
                  name="nChairs"
                  type="number"
                  min={0}
                />
                {errors.nChairs?.message && (
                  <p className="error-message">{errors.nChairs?.message}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="additionalFacilities">
                  additionalFacilities
                </label>
                <input
                  {...register("additionalFacilities")}
                  id="additionalFacilities"
                  name="additionalFacilities"
                  type="number"
                  min={0}
                />
                {errors.additionalFacilities?.message && (
                  <p className="error-message">
                    {errors.additionalFacilities?.message}
                  </p>
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
