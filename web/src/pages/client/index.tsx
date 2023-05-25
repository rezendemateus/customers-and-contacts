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
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";
import { ClientContext } from "@/contexts/client";
import { useForm } from "react-hook-form";

const Client = () => {
  const [clients, setClients] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cardId, setCardId] = useState();
  const [dataModal, setDataModal] = useState({});
  const updateClient = useContext(ClientContext);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const loadClients = async () => {
      try {
        const clients = (await api.get("/clients")).data;
        return setClients(clients);
      } catch (error) {
        toast.error("Ops. Algo deu errado!");
      }
    };
    loadClients();
  }, [clients]);

  return (
    <>
      <Header text="Clients" />
      <Container
        sx={{
          width: "100vw",
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
            width: "90%",
            height: "90%",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0",
          }}
        >
          {clients.length > 0 ? (
            clients.map((client, index) => {
              return (
                <ListItem key={index}>
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
                    onClick={async () => {
                      setCardId(client.id);
                      setDataModal(client);
                      setModalIsOpen(true);
                      setDataModal(client);
                      setCardId(client.id);
                      console.log(dataModal);
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
            <TextField
              name="name"
              placeholder={dataModal.name}
              defaultValue={dataModal.name}
              {...register("name")}
            />

            <InputLabel>Cpf</InputLabel>
            <TextField
              name="cpf"
              placeholder={dataModal.cpf}
              defaultValue={dataModal.cpf}
              {...register("cpf")}
            />

            <InputLabel>Email</InputLabel>
            <TextField
              name="email"
              placeholder={dataModal.email}
              defaultValue={dataModal.email}
              {...register("email")}
            />

            <InputLabel>Telephone</InputLabel>
            <TextField
              name="telephone"
              placeholder={dataModal.telephone}
              defaultValue={dataModal.telephone}
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
