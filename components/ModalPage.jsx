import { Box } from "@mui/material";
import { Button } from '@mui/material';
import {Typography} from "@mui/material";
import {Modal} from "@mui/material";
import { useState } from "react";
import axios from "axios";

import AttachFileIcon from '@mui/icons-material/AttachFile';
import DragCompo from "./DragCompo";

const style = {
    position: "absolute",
    top:'50%',
    left:"50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: 'background.paper',
    border:"2px solid #000",
    boxShadow:24,
    p:4
};



export default function ModalPage() {
  
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const envoiFichier = async (fichier) => {
    const apiEndpoint = 'http://localhost:8000'

    const formdata = new FormData()
    formdata.append("data",fichier)
    const reponse = await axios.post(apiEndpoint + "/file/upload", formdata, {
      headers:{
        "Content-Type":"multipart/form-data"
      }
    })
    return reponse
   };

   const handleValider = async(filtetosend) =>
    {
      console.log('fichier base reçu', filtetosend)
      const reponse = await envoiFichier(filtetosend)
      console.log('reponse api', reponse)
    }

  
  
    return (
    <div>
        <Button onClick={handleOpen} style={{color:'#fff'}}><AttachFileIcon /></Button>
        <Modal
        open={open}
        onClose={handleClose}
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Insérer un fichier pdf à traiter
                </Typography>
                <DragCompo handleValider={handleValider}/>
                <br/>
            </Box>
        </Modal>
    </div>
  )
}
