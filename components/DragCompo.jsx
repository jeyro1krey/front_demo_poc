import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
const FileTypes = ["PDF"]


export default function DragCompo({handleValider}) {
  
    const [file, setFile] = useState(null)
    const handleChange = (file) => {
        setFile(file)
        console.log('fichier recup', file)
    }
    
 
    return (
    <Box>
        <FileUploader handleChange={handleChange} name={file} types={FileTypes} onTypeError={(err) => console.log(err)} />
        <Button onClick={() => handleValider(file)} variant='contained'>Envoyer</Button>
    </Box>
  )
}
