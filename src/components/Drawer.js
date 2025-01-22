import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import { FaBars } from 'react-icons/fa'

export default function DrawerBasic() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer =
    (inOpen) => (event) => {
      if (
        event.type === 'keydown' &&
        ((event).key === 'Tab' ||
          (event).key === 'Shift')
      ) {
        return;
      }

      setOpen(inOpen);
    };

  return (
    <Box sx={{ display: 'flex' }} >
      <Button variant="outlined" color="neutral" onClick={toggleDrawer(true)} >
        <FaBars size="20px" color='white' />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {/* <List>
            {['empty1', 'empty2'].map((text) => (
              <ListItem key={text}>
                <ListItemButton>{text}</ListItemButton>
              </ListItem>
            ))}
          </List> */}
          <Divider />
          <List sx={{direction: 'ltr'}}>
            {/* {['Products', 'Account', 'Add-Product'].map((text) => ( */}
            {['products', 'cart', 'test', 'music'].map((text) => (
              <ListItem key={text}>
                <a href={`/${text}`}>{text}</a>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
