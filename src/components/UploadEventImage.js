// src/components/UploadImage.jsx
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../config/theme";
import ProfileEvent from "./ProfileEvent";

function UploadImage() {
  return (
    <ChakraProvider theme={theme}>
      <ProfileEvent />
    </ChakraProvider>
  );
}

export default UploadImage;