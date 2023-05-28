import { SmallCloseIcon } from "@chakra-ui/icons";
import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { React, useState } from "react";
import {
  ceaserEncrypt,
  railEncrypt,
  vernamEncrypt,
  vignereEncrypt,
} from "../utils/HandleApi";
const Encryption = ({ checkAlgo }) => {
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [ans, setAns] = useState("");

  const baseUrl = "http://localhost:8000";
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  let intPettern = /^\d+$/;
  let charPettern = /^[A-Z a-z]+$/;

  /** reset input field */

  const handleTextReset = () => {
    setText("");
  };
  const handleKeyReset = () => {
    setKey("");
  };
  const clear = () => {
    setText("");
    setKey("");
    setAns("");
  };
  const encrypt = async () => {
    setIsLoading(true);

    if (!text) {
      setIsLoading(false);
      toast({
        title: "Please Fill PlainText Feild",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    if (!charPettern.test(text)) {
      setIsLoading(false);
      setText(null);
      toast({
        title: "Only character is allowed!!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } else if (!key) {
      setIsLoading(false);
      toast({
        title: "Please Fill Key Feild",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    } else if (checkAlgo === "ceaser") {
      if (!intPettern.test(key)) {
        setIsLoading(false);
        setText(null);
        toast({
          title: "Only positive integer is allowed!!",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
      ceaserEncrypt(text, key, setAns, setIsLoading);
    } else if (checkAlgo === "rail") {
      railEncrypt(text, key, setAns, setIsLoading);
    } else if (checkAlgo === "vignere") {
      vignereEncrypt(text, key, setAns, setIsLoading);
    } else if (checkAlgo === "vernam") {
      vernamEncrypt(text, key, setAns, setIsLoading);
    }
  };

  return (
    <div>
      <Box
        d="flex"
        justifyContent="center"
        bg="#242526"
        w="100%"
        borderRadius="lg"
        textAlign="center"
      >
        <form onSubmit={ceaserEncrypt} className="todo-input">
          <div className="input">
            <input
              type="text"
              placeholder="PlainText"
              value={text}
              pattern="[A-Z a-z]+"
              onChange={(e) => setText(e.target.value)}
              required
            />
            {text ? (
              <SmallCloseIcon className="cross" onClick={handleTextReset} />
            ) : (
              ""
            )}
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="Key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              required
            />
            {key ? (
              <SmallCloseIcon className="cross" onClick={handleKeyReset} />
            ) : (
              ""
            )}
          </div>
          <Button
            isLoading={isLoading}
            disabled={isLoading}
            className="main-btn main-btn__border"
            onClick={encrypt}
            type="submit"
          >
            Encrypt
          </Button>
        </form>

        {ans && (
          <Box
            p={4}
            bg={"#18191a"}
            className="demo-item"
            style={{ marginTop: 25 }}
          >
            <Text fontSize="2xl" color="#27b3cc" className="text-center">
              CipherText
            </Text>

            <Text fontSize="2xl" m={0} color="#27b3cc">
              {ans}
            </Text>
            <Button className="main-btn main-btn__border" onClick={clear}>
              Clear
            </Button>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Encryption;
