import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';


export default function TemporaryDrawer() {
    const [toggle, setToggle] = React.useState(false);

    const toggleDrawer = (open) => (event) => {

        setToggle(open);
    };


    return (
        <div>

            <React.Fragment >
                <Button onClick={toggleDrawer( true)}>{}</Button>
                <Drawer
                    open={toggle}
                    onClose={toggleDrawer( false)}
                >
                    hello Dosto
    
                </Drawer>
            </React.Fragment>

        </div>
    );
}