import { SmallCloseIcon } from "@chakra-ui/icons";
import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { React, useState } from "react";
import {
  ceaserDecrypt,
  railDecrypt,
  vernamDecrypt,
  vignereDecrypt,
} from "../utils/HandleApi";

function Decryption({ checkAlgo }) {
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [ans, setAns] = useState("");

  const baseUrl = "http://localhost:8000";
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

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

  const decrypt = async () => {
    setIsLoading(true);

    if (!text) {
      setIsLoading(false);
      toast({
        title: "Please Fill CipherText Feild",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
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
    }
    if (checkAlgo === "ceaser") {
      ceaserDecrypt(text, key, setAns, setIsLoading);
    } else if (checkAlgo === "rail") {
      railDecrypt(text, key, setAns, setIsLoading);
    } else if (checkAlgo === "vignere") {
      vignereDecrypt(text, key, setAns, setIsLoading);
    } else if (checkAlgo === "vernam") {
      vernamDecrypt(text, key, setAns, setIsLoading);
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
        <form onSubmit={decrypt} className="todo-input">
          <div className="input">
            <input
              type="text"
              placeholder="CipherText"
              value={text}
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
            onClick={decrypt}
            type="submit"
          >
            Decrypt
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
              Plaintext
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
}

export default Decryption;
