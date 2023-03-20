import React from "react";
import axios from "axios";
const Test10: React.FC = () => {
  //
  const onFile = () => {
    let fileInput: any = document.getElementById("fileName");

    let formData: any = new FormData();
    formData.append("fileName", fileInput.files[0]);
    //
    axios
      .post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };
  //
  //
  return (
    <div>
      <form
        action="http://localhost:8080/upload"
        method="POST"
        encType="multipart/form-data"
      >
        <input type="file" id="fileName" name="fileName" onChange={onFile} />
        <button type="submit"> Upload </button>
      </form>
    </div>
  );
};

export default Test10;
