import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { React, useState } from "react";
import { negativeMod, positiveMod } from "../utils/HandleApi";
const Mod = ({ checkAlgo }) => {
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [ans, setAns] = useState(null);

  const baseUrl = "http://localhost:8000";
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  let pattern = /^\d+$/;
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
    setAns(null);
  };
  const calculate = async (event) => {
    setIsLoading(true);

    if (!text) {
      setIsLoading(false);
      toast({
        title: "Please Fill Integer Feild",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } else if (!key) {
      setIsLoading(false);
      toast({
        title: "Please Fill Modulo Feild",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } else if (!pattern.test(key)) {
      setIsLoading(false);
      setText(null);
      toast({
        title: "Please Enter a Positive Integer",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } else if (checkAlgo === "positive") {
      if (!pattern.test(text)) {
        setIsLoading(false);
        setText(null);
        toast({
          title: "Please Enter a Positive Key",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
      positiveMod(text, key, setAns, setIsLoading);
    } else if (checkAlgo === "negative") {
      negativeMod(text, key, setAns, setIsLoading);
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
        <form onSubmit={calculate} className="todo-input">
          <div className="input">
            <input
              type="text"
              placeholder="Integer"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
            {/* {text ? (
              <SmallCloseIcon className="cross" onClick={handleTextReset} />
            ) : (
              ""
            )} */}
            <Text color="#27b3cc" mx={4} my={0}>
              Mod
            </Text>
            <input
              type="text"
              placeholder="Modulo"
              value={key}
              pattern="\d+"
              onChange={(e) => setKey(e.target.value)}
              required
            />
            {/* {key ? (
              <SmallCloseIcon className="cross" onClick={handleKeyReset} />
            ) : (
              ""
            )} */}
          </div>
          {/* <div className="input">
            <input
              type="number"
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
          </div> */}
          <Button
            isLoading={isLoading}
            disabled={isLoading}
            className="main-btn main-btn__border"
            onClick={calculate}
            type="submit"
          >
            Calculate
          </Button>
        </form>

        {ans !== null && (
          <Box
            p={4}
            bg={"#18191a"}
            className="demo-item"
            style={{ marginTop: 25 }}
          >
            <Text fontSize="2xl" color="#27b3cc" className="text-center">
              Answer
            </Text>

            <Text fontSize="2xl" m={0} color="#fff">
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

export default Mod;
