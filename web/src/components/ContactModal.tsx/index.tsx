import { Box, Button, InputLabel, Modal, TextField } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { IContactModal } from "@/interfaces/contexts";
import { useContext } from "react";
import { ContactContext } from "@/contexts/contacts";

const ContactModal = ({ modalIsOpen, setModalIsOpen }: IContactModal) => {
  const { handleSubmit, register } = useForm();
  const { createContact } = useContext(ContactContext);

  const formSubmit = (data: any) => {
    createContact(data);
    setModalIsOpen(false);
  };
  return (
    <Modal
      open={modalIsOpen}
      onClose={() => setModalIsOpen(false)}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          width: "50%",
          maxWidth: "600px",
          height: "auto",
          backgroundColor: "var(--grey-1)",
          borderRadius: "14px",
          border: "none",
          padding: "30px",
          position: "relative",
          display: " flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "var(--black)",
            fontFamily: "Roboto",
            svg: { fontSize: "1.5rem" },
          }}
        >
          <h2>Create/Edit Contact</h2>
          <IoClose onClick={() => setModalIsOpen(false)} />
        </Box>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "90%",
            gap: "10px",
          }}
          onSubmit={handleSubmit(formSubmit)}
        >
          <InputLabel>Name</InputLabel>
          <TextField {...register("name")} />

          <InputLabel>Telephone</InputLabel>
          <TextField {...register("telephone")} />

          <InputLabel>Email</InputLabel>
          <TextField {...register("email")} />

          <Button
            type="submit"
            sx={{
              backgroundColor: "var(--blue-1)",
              color: "var(--grey-1)",
              width: "50%",
              ":hover": {
                backgroundColor: "var(--blue-2)",
                transform: "scale(1.01)",
              },
              padding: "10px 0",
            }}
          >
            Save
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export { ContactModal };
