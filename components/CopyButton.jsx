import React, { useState } from 'react';

import { Button } from '@mui/material';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function CopyButton({texte}) {
  
    const [copySuccess, setCopySuccess] = useState('');
    

    // your function to copy here
    
      const copyToClipBoard = async copyMe => {
        try {
          await navigator.clipboard.writeText(copyMe);
          setCopySuccess('Copied!');
        } catch (err) {
          setCopySuccess('Failed to copy!');
        }
      };
  
    return (
        <div>
        <Button onClick={() => copyToClipBoard(texte)}>
         <ContentCopyIcon style={{color:'black', height:"20px", width:"20px"}}/>
         </Button>
      {copySuccess}
     </div>
  )
}



