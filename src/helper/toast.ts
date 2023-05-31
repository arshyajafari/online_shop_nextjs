// import react toastify
import { toast } from "react-toastify";

// import type
import { ReactToastTypeProps } from "type";

// import toastify style file
import "react-toastify/dist/ReactToastify.css";

export const Toast = ({ type, text }: ReactToastTypeProps) => {
  const result: any = {
    err: () =>
      toast.error(text, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
      }),
    success: () =>
      toast.success(text, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
      }),
    empty: () =>
      toast.warn(text, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
      }),
  };

  result[type]();
};
