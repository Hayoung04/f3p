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
  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onChangeId = (event) => {
    setId(event.target.value);
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
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            console.log(id, password);
            localStorage.setItem("userId", id);
            localStorage.setItem("userPw", password);
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
            label="Name"
            type="text"
            value={id}
            onChange={onChangeId}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            // autoComplete="current-password"
            value={password}
            onChange={onChangePW}
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

// import { useState } from "react";

// function LoginForm() {
//   return (
//     <div>
//       <form>
//         <label htmlFor="id">ID : </label>
//         <input type="text" id="id" />
//         <br />
//         <label htmlFor="passWord">Password : </label>
//         <input type="password" id="passWord" />
//         <br />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default function LoginDialog() {
//   const [open, setOpen] = useState(false);
//   const handleClickOpen = () => {
//     setOpen(true);
//     alert(Login);
//   };
//   return (
//     <div>
//       <button onClick={handleClickOpen}>Login</button>
//     </div>
//   );
// }
