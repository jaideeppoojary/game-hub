import { Box, Heading } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
    <NavBar />
    <Box padding={5}>
      <Heading>Opps...</Heading>
      {
        isRouteErrorResponse(error) ?
        <p>404 Page not found</p> :
        <p>Unexpected Error occured.</p>
      }
    </Box>
    </>
  );
};

export default ErrorPage;