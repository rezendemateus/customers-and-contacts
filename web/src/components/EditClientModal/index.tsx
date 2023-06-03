import { ClientContext } from "@/contexts/client";
import { IClientUpdate } from "@/interfaces/clients";
import { IContactResponse, IEditClientModal } from "@/interfaces/contacts";
import {
  Box,
  Modal,
  InputLabel,
  TextField,
  List,
  ListItem,
  Button,
} from "@mui/material";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import "dotenv/config";
import { ContactModal } from "../ContactModal.tsx";

const EditClientModal = ({
  modalIsOpen,
  setModalIsOpen,
  dataModal,
  id,
}: IEditClientModal) => {
  const { register, handleSubmit, setValue } = useForm<IClientUpdate>({
    // resolver: yupResolver(),
  });
  const { updateClient, loadClients } = useContext(ClientContext);
  const [contactModalIsOpen, setContactModalIsOpen] = useState(false);
  const [contactData, setContactData] = useState<
    IContactResponse | undefined
  >();
  const { deleteClient } = useContext(ClientContext);

  const onSubmitData = (data: any) => {
    updateClient(data, id);
    setModalIsOpen(false);
    loadClients();
  };

  return (
    <>
      {modalIsOpen === true
        ? (setValue("name", dataModal.name),
          setValue("cpf", dataModal.cpf),
          setValue("email", dataModal.email),
          setValue("telephone", dataModal.telephone),
          setValue("contacts", dataModal.contacts))
        : null}
      <Modal
        open={modalIsOpen}
        onClose={() => {
          setModalIsOpen(false);
          console.log(modalIsOpen);
        }}
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
            height: "80%",
            backgroundColor: "var(--grey-1)",
            borderRadius: "14px",
            border: "none",
            padding: "30px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "var(--black)",
              fontFamily: "Roboto",
              svg: { fontSize: "1.5rem" },
            }}
          >
            <h2>See/Edit CLient</h2>
            <IoClose onClick={() => setModalIsOpen(false)} />
          </Box>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              height: "90%",
              gap: "10px",
            }}
            onSubmit={handleSubmit(onSubmitData)}
          >
            <InputLabel>Name</InputLabel>
            <TextField {...register("name")} />

            <InputLabel>Cpf</InputLabel>
            <TextField placeholder={dataModal.cpf} {...register("cpf")} />

            <InputLabel>Email</InputLabel>
            <TextField placeholder={dataModal.email} {...register("email")} />

            <InputLabel>Telephone</InputLabel>
            <TextField
              placeholder={dataModal.telephone}
              {...register("telephone")}
            />

            <InputLabel>Contacts</InputLabel>

            <List
              sx={{
                border: "1px solid var(--grey-2)",
                height: "30%",
                padding: "0 10px",
                borderRadius: "4px",
              }}
            >
              {dataModal.contacts ? (
                dataModal.contacts.map((contact, index) => {
                  return (
                    <ListItem
                      key={index}
                      sx={{
                        color: "var(--grey-2)",
                        fontFamily: "Roboto",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        borderBottom: "1px solid var(--grey-2)",
                        padding: "0 10px",
                      }}
                    >
                      <span>{contact.name}</span>
                      <span>{contact.telephone}</span>
                      <span>{contact.email}</span>
                      <Box>
                        <Button
                          onClick={() => {
                            setContactData(contact);
                            setContactModalIsOpen(true);
                          }}
                        >
                          Edit
                        </Button>
                        <Button onClick={() => deleteClient(contactData.id)}>
                          Delete
                        </Button>
                      </Box>
                    </ListItem>
                  );
                })
              ) : (
                <h1>No contacts!</h1>
              )}
            </List>
            <Box>
              <Button onClick={() => setContactModalIsOpen(true)}>
                New contact
              </Button>
              <Button onClick={() => deleteClient(dataModal.id)}>Delete</Button>
              <Button type="submit">Save</Button>
            </Box>
          </form>
        </Box>
      </Modal>
      <ContactModal
        modalIsOpen={contactModalIsOpen}
        setModalIsOpen={setContactModalIsOpen}
      />
    </>
  );
};

export { EditClientModal };
