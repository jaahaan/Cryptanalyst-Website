import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CeaserCipher from "./pages/CeaserCipher";
import Home from "./pages/Home";
import Modulus from "./pages/Modulus";
import RailCipher from "./pages/RailCipher";
import Vignere from "./pages/Vignere";
import Vernam from "./pages/Vernam";
function App() {
  const [collapse, setCollapse] = React.useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar />
          {/* <HStack h="100vh">
            <Flex
              as="aside"
              w="full"
              h="full"
              maxW={collapse ? 300 : 70}
              bg="#242526"
              padding={6}
              flexDirection="column"
              transition="ease-in-out .2s"
              position="relative"
              zIndex={1}
            >
              <Sidebar collapse={collapse} />
            </Flex>
            <Flex
              as="main"
              w="full"
              h="full"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              position="relative"
            >
              <IconButton
                aria-label="Menu Colapse"
                icon={<MdMenu />}
                position="absolute"
                top={0}
                left={0}
                onClick={() => setCollapse(!collapse)}
                color="#58a6ff"
                bg={"transparent"}
                fontSize={22}
              />
              <Routes>
                <Route path="/" element=<Home /> />
                <Route path="/ceaser_cipher" element=<CeaserCipher /> />
                <Route path="/rail_cipher" element=<RailCipher /> />
              </Routes>
            </Flex>
          </HStack> */}
          {/* <Random /> */}
          <Routes>
            <Route path="/" element=<Home /> />
            <Route path="/ceaser_cipher" element=<CeaserCipher /> />
            <Route path="/rail_cipher" element=<RailCipher /> />
            <Route path="/vignere_cipher" element=<Vignere /> />
            <Route path="/vernam_cipher" element=<Vernam /> />

            <Route path="/modulus" element=<Modulus /> />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
