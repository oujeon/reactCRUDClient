import React from "react";
import axios from "axios";
const Test10: React.FC = () => {
  //
  const onUpload = () => {
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
  const onDownload = () => {
    axios
      .get("/download", {
        responseType: "blob",
        headers: {
          "Content-Type": "application/json",
        },
        // data: param
      })
      .then(function (response) {
        console.log(response.data);
        const url = window.URL.createObjectURL(
          new Blob([response.data], { type: response.headers["content-type"] })
        );
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "a.png");
        document.body.appendChild(link);
        link.click();
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
  return (
    <div>
      <form
        action="http://localhost:8080/upload"
        method="POST"
        encType="multipart/form-data"
      >
        <input type="file" id="fileName" name="fileName" onClick={onUpload} />
        <button type="submit"> Upload </button>
      </form>
      <button type="button" onClick={onDownload}>
        Download{" "}
      </button>
    </div>
  );
};

export default Test10;
