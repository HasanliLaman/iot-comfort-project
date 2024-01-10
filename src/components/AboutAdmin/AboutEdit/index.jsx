/* eslint-disable react/prop-types */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal, Button } from "rsuite";
import { toast } from "react-toastify";
import { updateAbout } from "../../../server";
import { aboutSchema } from "../../../schemas";
import StyleAboutEdit from "./style";

const AboutEdit = ({ data, refetch }) => {
  const [open, setOpen] = useState(false);

  const { mutate } = useMutation({
    mutationFn: updateAbout,
    onError: () => toast.error("Something went wrong!"),
    onSuccess: () => {
      refetch();
      setOpen(false);
      toast.success("Successfully updated!");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(aboutSchema),
    defaultValues: {
      whoAreWe: data.whoAreWe,
      ourMision: data.ourMision,
    },
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    reset();
    setOpen(false);
  };

  const submitHandler = async function (formData) {
    mutate(formData);
  };

  return (
    <>
      <Modal size="md" open={open} onClose={handleClose}>
        <StyleAboutEdit>
          <form onSubmit={handleSubmit(submitHandler)}>
            <Modal.Header>
              <Modal.Title>Edit Building Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="form-group">
                <label htmlFor="whoAreWe">Who are we?</label>
                <textarea
                  {...register("whoAreWe")}
                  id="whoAreWe"
                  name="whoAreWe"
                  rows={6}
                />
                {errors.whoAreWe?.message && (
                  <p className="error-message">{errors.whoAreWe?.message}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="ourMision">Our mission</label>
                <textarea
                  {...register("ourMision")}
                  id="ourMision"
                  name="ourMision"
                  rows={6}
                />
                {errors.ourMision?.message && (
                  <p className="error-message">{errors.ourMision?.message}</p>
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
        </StyleAboutEdit>
      </Modal>
      <button onClick={handleOpen}>Edit</button>
    </>
  );
};

export default AboutEdit;
