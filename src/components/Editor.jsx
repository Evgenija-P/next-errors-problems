"use client";
import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const EditorComponent = () => {
  const [currentText, setCurrentText] = useState([""]);
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      setCurrentText(editorRef.current.getContent());
    }
  };

  return (
    <div>
      <Editor
        apiKey="b76g9vsla6spw8xc9itg2m7ap8z9vey1xpn2jrcsq06jcv23"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "a11ychecker",
            "advcode",
            "advlist",
            "anchor",
            "autolink",
            "codesample",
            "fullscreen",
            "help",
            "image",
            "editimage",
            "tinydrive",
            "lists",
            "link",
            "media",
            "powerpaste",
            "preview",
            "searchreplace",
            "table",
            "tinymcespellchecker",
            "visualblocks",
            "wordcount",
          ],
          toolbar:
            "insertfile a11ycheck undo redo | bold italic | forecolor backcolor | codesample | alignleft aligncenter alignright alignjustify | bullist numlist | link image",
          spellchecker_dialog: true,
          spellchecker_ignore_list: ["Ephox", "Moxiecode"],
          tinydrive_demo_files_url: "../_images/tiny-drive-demo/demo_files.json",
          tinydrive_token_provider: (success, failure) => {
            success({
              token:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb2huZG9lIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Ks_BdfH4CWilyzLNk8S2gDARFhuxIauLa8PwhdEQhEo",
            });
          },
          content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
        }}
      />
      <button onClick={log}>Log editor content</button>

      {currentText && currentText}
    </div>
  );
};

export default EditorComponent;
