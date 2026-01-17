import * as React from 'react';
import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import useToast from '../context/ToastContext';


export default function ToastText() {
    const {ShowToast , CloseToast,open,massege} = useToast()
    



    const handleCloseToast = () => {
        CloseToast()
        
        

    }

  return (
    <div>

            <Snackbar

                open={open}
                autoHideDuration={4000}
                onClose={handleCloseToast}
                

            >
                <Alert
                    severity='success'
                    variant="filled"
                    onClose={handleCloseToast}
                    

                >
                    {massege}

                </Alert>


            </Snackbar>
    </div>
  );
}
