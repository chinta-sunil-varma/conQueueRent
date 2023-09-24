
import {
  Typography,
  AppBar,
  
  TextField,
  Button,
  
} from "@material-ui/core";


export default function CreateData() {
  return (
    <div className="App">
      <AppBar>
        <toolbar>
          <h1>Create Resource </h1>
        </toolbar>
      </AppBar>

      <Typography variant="h5">BASIC WITH MATERIAL UI</Typography>
      <form>
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="setgoal"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="goal description"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Diversity catagory"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Attribute"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="goal stage"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="number"
          label="job id"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="job region"
          variant="outlined"
        />
        <br />
        <Button variant="contained" color="primary">
          save
        </Button>
      </form>
    </div>
  );
}
