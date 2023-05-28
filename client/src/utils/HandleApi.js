import axios from "axios";

// const baseUrl = "https://mern-todo-df8q.onrender.com";
const baseUrl = "http://localhost:8000";

const ceaserEncrypt = (text, key, setAns, setIsLoading) => {
  axios
    .post(`${baseUrl}/api/ceaser_encrypt/`, { text, key })
    .then((data) => {
      console.log(data.data);
      setAns(data.data);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
};
const ceaserDecrypt = (text, key, setAns, setIsLoading) => {
  axios
    .post(`${baseUrl}/api/ceaser_decrypt/`, { text, key })
    .then((data) => {
      console.log(data.data);
      setAns(data.data);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
};

const railEncrypt = (text, key, setAns, setIsLoading) => {
  axios
    .post(`${baseUrl}/api/rail_encrypt/`, { text, key })
    .then((data) => {
      console.log(data.data);
      setAns(data.data);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
};
const railDecrypt = (text, key, setAns, setIsLoading) => {
  axios
    .post(`${baseUrl}/api/rail_decrypt/`, { text, key })
    .then((data) => {
      console.log(data.data);
      setAns(data.data);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
};

const vignereEncrypt = (text, key, setAns, setIsLoading) => {
  axios
    .post(`${baseUrl}/api/vignere_encrypt/`, { text, key })
    .then((data) => {
      console.log(data.data);
      setAns(data.data);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
};
const vignereDecrypt = (text, key, setAns, setIsLoading) => {
  axios
    .post(`${baseUrl}/api/vignere_decrypt/`, { text, key })
    .then((data) => {
      console.log(data.data);
      setAns(data.data);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
};

const vernamEncrypt = (text, key, setAns, setIsLoading) => {
  axios
    .post(`${baseUrl}/api/vernam_encrypt/`, { text, key })
    .then((data) => {
      console.log(data.data);
      setAns(data.data);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
};
const vernamDecrypt = (text, key, setAns, setIsLoading) => {
  axios
    .post(`${baseUrl}/api/vernam_decrypt/`, { text, key })
    .then((data) => {
      console.log(data.data);
      setAns(data.data);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
};

const positiveMod = (text, key, setAns, setIsLoading) => {
  axios
    .post(`${baseUrl}/api/positive_mod/`, { text, key })
    .then((data) => {
      console.log(data.data);
      setAns(data.data);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
};
const negativeMod = (text, key, setAns, setIsLoading) => {
  axios
    .post(`${baseUrl}/api/negative_mod/`, { text, key })
    .then((data) => {
      console.log(data.data);
      setAns(data.data);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
};
export {
  ceaserEncrypt,
  railEncrypt,
  railDecrypt,
  ceaserDecrypt,
  positiveMod,
  negativeMod,
  vignereEncrypt,
  vignereDecrypt,
  vernamEncrypt,
  vernamDecrypt,
};
