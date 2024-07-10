import React from 'react'
import { Box } from '@mui/material'
import { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

import CopyButton from './CopyButton';


export default function SelectDoc() {

    const [document, setDocument] = useState('')
    
  
    const handleChange = (event) => {
        setDocument(event.target.value)
    }

    const composant1 = document ? <Box></Box> : <Box></Box>

    return (
    <Box sx={{ minWidth: 120}}>
        <FormControl fullWidth sx={{backgroundColor:"#fff", borderRadius:1}}>
            <InputLabel id="document" sx={{color:"#283747"}}>Choix document</InputLabel>
            <Select
            labelId='document'
            id='document-choix'
            label="PDF"
            onChange={handleChange}>
                <MenuItem value={10}>Doc1</MenuItem>
                <MenuItem value={20}>Doc2</MenuItem>
                <MenuItem value={30}>Doc3</MenuItem>
            </Select>
        </FormControl>
    
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListItem
            key={0}
            disableGutters
            secondaryAction={
                <CopyButton texte={"Première question?"} />
            }
            >
            <ListItemText primary={'Deuxième question'} />
            </ListItem>
            <ListItem
                        key={1}
                        disableGutters
                        secondaryAction={
                            <CopyButton texte={"Troisième question pour tester?"} />
                        }
                        >
                        <ListItemText primary={'Troisième question pour tester?'} />
                        </ListItem>
                        <ListItem
                        key={2}
                        disableGutters
                        secondaryAction={
                            <CopyButton texte={"Première question pour tester?"} />
                        }
                        >
                        <ListItemText primary={'Première question pour tester?'} />
                        </ListItem>
        </List>

        
    </Box>
  )
}
