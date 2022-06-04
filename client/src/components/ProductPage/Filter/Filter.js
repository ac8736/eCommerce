import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";
import "./Filter.css";

export default function Filter() {
  return (
    <div className="filter-container">
      <Typography variant="h5">Filters</Typography>
      <FormControl sx={{ marginBottom: "25px", marginTop: "25px" }}>
        <FormControlLabel
          control={<input className="search-bar" type="text" placeholder="Item Name" />}
          label={<Typography sx={{ fontSize: "15px", marginRight: "auto", paddingBottom: "8px" }}>Search</Typography>}
          labelPlacement="top"
          sx={{ marginLeft: 0, marginRight: 0 }}
        />
      </FormControl>
      <FormControl>
        <FormLabel sx={{ color: "black" }}>Item Type</FormLabel>
        <RadioGroup sx={{ paddingLeft: "10px" }}>
          <FormControlLabel
            value="computers"
            control={<Radio size="small" />}
            label={<Typography sx={{ fontSize: "15px" }}>Computers</Typography>}
          />
          <FormControlLabel
            value="components"
            control={<Radio size="small" />}
            label={<Typography sx={{ fontSize: "15px" }}>Components</Typography>}
          />
          <FormControlLabel
            value="peripherals"
            control={<Radio size="small" />}
            label={<Typography sx={{ fontSize: "15px" }}>Peripherals</Typography>}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
