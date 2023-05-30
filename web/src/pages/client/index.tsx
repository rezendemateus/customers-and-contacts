import Header from "@/components/Header";
import api from "@/services/api";
import {
  Box,
  Button,
  Card,
  Container,
  InputLabel,
  List,
  ListItem,
  Modal,
  TextField,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { ClientContext } from "@/contexts/client";
import { useForm } from "react-hook-form";
import { IClientRequest } from "@/interfaces/clients";

const Client = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dataModal, setDataModal] = useState({});
  const [idToUpdate, settIdToUpdate] = useState("");
  const { updateClient, loadClients, clients } = useContext(ClientContext);

  const { register, handleSubmit, setValue } = useForm({});

  const onSubmit = async (data: IClientRequest) => {
    updateClient(data, idToUpdate);
    setModalIsOpen(false);
    loadClients();
  };

  useEffect(() => {
    loadClients();
  }, []);
  return (
    <>
      <Header text="Clients" />
      <Container
        sx={{
          width: "100vw",
          maxWidth: "none",
          height: "calc(100vh - 60px)",
          backgroundColor: "var(--blue-1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "60px",
        }}
      >
        <List
          sx={{
            width: "100%",
            height: "90%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0",
            overflow: "scroll",
          }}
        >
          {clients.length > 0 ? (
            clients.map((client, index) => {
              return (
                <ListItem key={index} sx={{ width: "auto" }}>
                  <Card
                    sx={{
                      backgroundColor: "var(--grey-1)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      padding: "20px",
                      gap: "10px",
                      fontFamily: "Roboto",
                      height: "180px",
                      width: "250px",
                      overflow: "hidden",
                    }}
                    onClick={() => {
                      settIdToUpdate(client.id);
                      setValue("name", client.name);
                      setValue("cpf", client.cpf);
                      setValue("email", client.email);
                      setValue("telephone", client.telephone);
                      setValue("contacts", client.contacts);
                      setModalIsOpen(true);
                    }}
                  >
                    <h3>{client.name}</h3>
                    <span>{client.cpf}</span>
                    <span>{client.email}</span>
                    <span>{client.telephone}</span>
                  </Card>
                </ListItem>
              );
            })
          ) : (
            <h2>No clients</h2>
          )}
        </List>
      </Container>
      <Modal
        open={modalIsOpen}
        onClose={() => {
          setModalIsOpen(false);
          setDataModal("");
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
            <h2>Ver/Editar CLiente</h2>
            <IoClose onClick={() => setModalIsOpen(false)} />
          </Box>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              height: "90%",
              gap: "10px",
            }}
            onSubmit={handleSubmit(onSubmit)}
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
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                      </Box>
                    </ListItem>
                  );
                })
              ) : (
                <h1>No contacts!</h1>
              )}
            </List>
            <Box>
              <Button>New contact</Button>
              <Button>Delete</Button>
              <Button type="submit">Save</Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default Client;
