import React, { useState,useEffect } from "react";
import { CKEditor } from "../../node_modules/@ckeditor/ckeditor5-react";
import ClassicEditor from "../../node_modules/@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import { setContent } from "../utils/notita";

function Editor() {
  const [addData, setVal] = useState("");
  const [addedData, showData] = useState(0);
  const [notita,setNotita] = useState("");
  const handleChange = (e, editor) => {
    const data = editor.getData();
    setVal(data);
    setContent(data);
  };
  useEffect(() => {
    axios.get('http://192.168.0.103:8081/api/notes/getNoteById/' + localStorage.getItem("notitaId"))
      .then(response => setNotita(response.data[0].content)).catch(function(res) {
        if(res instanceof Error) {
          console.log(res.message);
        } else {
          console.log(res.data);
        }
      });
  }, []);
// console.log(addData)
  return (
    <div className="Editor">

      <div
        style={{ width: "100%", display: "inline-block", textAlign: "center", marginTop: '10px' }}
      >
        <div
          style={{
            width: "100%",
            display: "inline-block",
            textAlign: "right",
            marginBottom: "5px",

          }}
        >
          <button
            style={{ backgroundColor: "black", color: "white", borderRadius: "20px", width: "100px" }}
            onClick={() => showData(!addedData)}
          >
            {addedData ? "Hide Data" : "Show Data"}
          </button>
        </div>
        <CKEditor
          editor={ClassicEditor}
          data={notita}
          onChange={handleChange}
        />
        <div>{addedData ? addData : ""}</div>
      </div>
    </div>
  );
}

export default Editor;
