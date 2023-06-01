import Header from "@/components/Header";
import { Card, Container, List, ListItem } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ClientContext } from "@/contexts/client";
import { EditClientModal } from "@/components/EditClientModal";
import Router from "next/router";

const Client = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dataModal, setDataModal] = useState({});
  const [idToUpdate, setIdToUpdate] = useState("");
  const { loadClients, clients } = useContext(ClientContext);
  const { token, setToken } = useContext(ClientContext);

  if (!token) {
    // Router.push("");
  }

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
                      setIdToUpdate(client.id);
                      setDataModal(client);
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
      <EditClientModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        dataModal={dataModal}
        id={idToUpdate}
      />
    </>
  );
};

export default Client;
