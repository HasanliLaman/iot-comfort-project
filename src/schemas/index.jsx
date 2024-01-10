import * as Yup from "yup";

export const logInSchema = Yup.object().shape({
  email: Yup.string().email().required("This field is required"),
  password: Yup.string()
    .required("This field is required.")
    .min(8, "Password must be at least 8 charachters long")
    .matches(
      /^(?=.*[!@#$%^&*.?])(?=.{8,})/,
      "Password should contain at least one speacial character"
    ),
});

export const roomsSchema = Yup.object().shape({
  image: Yup.mixed().test("fileType", "Wrong file type", (value) => {
    if (!value[0]) {
      return true;
    }
    return ["image/jpeg", "image/jpg", "image/png"].includes(value[0]?.type);
  }),
  roomNumber: Yup.number()
    .required("This field is required")
    .typeError("Value must be number"),
  nSockets: Yup.number()
    .min(0, "The value should be positive or zero")
    .required("This field is required")
    .typeError("Value must be number"),
  nAvailableSockets: Yup.number()
    .min(0, "The value should be positive or zero")
    .required("This field is required")
    .typeError("Value must be number"),
  nComputers: Yup.number()
    .min(0, "The value should be positive or zero")
    .required("This field is required")
    .typeError("Value must be number"),
  nMarkerPens: Yup.number()
    .min(0, "The value should be positive or zero")
    .required("This field is required")
    .typeError("Value must be number"),
  nChairs: Yup.number()
    .min(0, "The value should be positive or zero")
    .required("This field is required")
    .typeError("Value must be number"),
  additionalFacilities: Yup.number()
    .min(0, "The value should be positive or zero")
    .required("This field is required")
    .typeError("Value must be number"),
});

export const usersSchema = Yup.object().shape({
  avatar: Yup.mixed()
    .required("This field is required")
    .test("fileType", "Wrong file type", (value) => {
      if (!value) {
        return true;
      }
      return ["image/jpeg", "image/jpg", "image/png"].includes(value.type);
    }),
  name: Yup.string().required("This field is required"),
  email: Yup.string().email().required("This field is required"),
  phoneNumber: Yup.string().required("This field is required"),
});

export const aboutSchema = Yup.object().shape({
  whoAreWe: Yup.string().required("This field is required"),
  ourMision: Yup.string().required("This field is required"),
});
