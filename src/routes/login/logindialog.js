import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function LoginDialog() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [render, setRender] = React.useState(false);

  const onChangeId = (event) => {
    setName(event.target.value);
  };
  const onChangePW = (event) => {
    setPassword(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        {localStorage.getItem("memberID") ? "Logout" : "Login"}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();

            const formData = new FormData();

            formData.append("name", name);
            formData.append("password", password);

            fetch("https://ll-api.jungsub.com/talk/login", {
              method: "POST",
              body: formData,
              headers: {},
            })
              .then((data) => data.json())
              .then((json) => {
                localStorage.setItem("memberID", json.ok._id);
                setRender((current) => !current);
              });
            handleClose();
          },
        }}
      >
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p>Please write your name and password.</p>
          </DialogContentText>
          <TextField
            id="demo-helper-text-aligned"
            type="text"
            value={name}
            onChange={onChangeId}
            placeholder="Name"
          />
          <TextField
            id="outlined-password-input"
            type="password"
            // autoComplete="current-password"
            value={password}
            onChange={onChangePW}
            placeholder="Password"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Login</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
