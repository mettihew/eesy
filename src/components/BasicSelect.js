import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  let {cat} = props
  if (!cat) cat = ""
  const [value, setValue] = React.useState(cat);

  const handleChange = (event) => {
    setValue(event.target.value);
    props.onCh(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">{cat !== "" ? 'Category' : 'All Department'}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={""}>All Department</MenuItem>
          <MenuItem value={"refrigerator"}>Refrigerator</MenuItem>
          <MenuItem value={"dishwasher"}>Dishwasher</MenuItem>
          <MenuItem value={"microwave"}>Microwave</MenuItem>
          <MenuItem value={"ice-maker"}>Ice Maker</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}