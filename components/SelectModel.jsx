import React, {useState} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//import { Menu } from 'react-pro-sidebar';



export default function SelectModel() {
  
    const [document, setDocument] = useState('')

    const handleChange = (event) => {
        setDocument(event.target.value)
    }

    return (
    <Box sx={{ minWidth: 120}}>
        <FormControl fullWidth sx={{backgroundColor:"#fff", borderRadius:1}}>
            <InputLabel id="document" sx={{color:"#283747"}}>Choix base</InputLabel>
            <Select
            labelId='document'
            id='document-choix'
            label="PDF"
            onChange={handleChange}>
                <MenuItem value={10}>Prem</MenuItem>
                <MenuItem value={20}>Deux</MenuItem>
                <MenuItem value={30}>Trois</MenuItem>
            </Select>
        </FormControl>
        
    </Box>
  )
}
