import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal, Button } from "rsuite";
import { aboutSchema } from "../../../schemas";
import StyleAboutEdit from "./style";

const AboutEdit = () => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(aboutSchema),
    defaultValues: {
      whoAreWe:
        "The AIP-PRIMECA Lorraine cluster is one of the 10 regional members of GIS S-mart. It is a joint service of the University of Lorraine. The center is a regional center of educational resources of an industrial nature, used by regional training courses (initial or continuing) around the theme of the industry of the future. This resource center is used as experimental support for initial and continuing training in the field of manufacturing and integrated design. The center aims to promote the implementation of industrial manipulations for in-depth teaching by discipline or interdisciplinary, from BAC+2 to BAC+5.",
      ourMission:
        "AIP-PRIMECA Lorraine is French academic community for the industry of the future which creates a fertile environment by placing engineering at the service of society. It brings together an open academic community to build scientific, technological and societal change on a local and national scale. The center provides educational resources (platforms and software), of an industrial nature, shared for teaching. These resources are accessible in person or remotely. It also manages the sharing of business software through the Lorraine Network of Digital Mechanics Resources which brings together 21 components or laboratories.",
    },
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
                <label htmlFor="ourMission">Our mission</label>
                <textarea
                  {...register("ourMission")}
                  id="ourMission"
                  name="ourMission"
                  rows={6}
                />
                {errors.ourMission?.message && (
                  <p className="error-message">{errors.ourMission?.message}</p>
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
