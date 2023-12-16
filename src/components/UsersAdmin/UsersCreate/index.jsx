import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal, Button } from "rsuite";
import { usersSchema } from "../../../schemas";
import StyleUsersCreate from "./style";

const UsersCreate = () => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(usersSchema),
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
        <StyleUsersCreate>
          <form onSubmit={handleSubmit(submitHandler)}>
            <Modal.Header>
              <Modal.Title>Create room</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="form-group">
                <label htmlFor="avatar">Avatar</label>
                <input
                  {...register("avatar")}
                  id="avatar"
                  name="avatar"
                  type="file"
                />
                {errors.avatar?.message && (
                  <p className="error-message">{errors.avatar?.message}</p>
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
                <label htmlFor="email">Email</label>
                <input
                  {...register("email")}
                  id="email"
                  name="email"
                  type="email"
                />
                {errors.email?.message && (
                  <p className="error-message">{errors.email?.message}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  {...register("phoneNumber")}
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                />
                {errors.phoneNumber?.message && (
                  <p className="error-message">{errors.phoneNumber?.message}</p>
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
        </StyleUsersCreate>
      </Modal>
      <button onClick={handleOpen}>Add New</button>
    </>
  );
};

export default UsersCreate;
