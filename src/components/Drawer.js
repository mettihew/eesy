import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import { FaBars } from 'react-icons/fa'

export default function DrawerBasic(props) {
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
        <FaBars size="20px" color={props.onColor} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Divider />
          <List sx={{direction: 'ltr'}}>
            {['products','contact', 'categories', 'compare-product', 'favorite', 'test'].map((text) => (
              <ListItem key={text}>
                <a href={`/${text}`} id='no-a'><h3>{text}</h3></a>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
