import { Grid, Card, CardContent, CardMedia, Typography, CardActions, Button } from "@mui/material";
import useFetchData from "./hooks/useFetchData";

function App() {
  
  const { data, loading, error } = useFetchData('boards')
  
  if(loading) {
    <div>loading</div>
  }

  if(error) {
    <div>AHHHHH!!</div>
  }

  return (
     
    <Grid
      container
      columns={{ xs: 4, sm: 8, md: 12 }}
      spacing={2}
      sx={{
        padding: "30px",
      }}
    >
      {data.map((board) => (
        <Grid item xs={2} sm={4} md={4} key={board.id}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              justifyItems: "center",
              textAlign: "center",
              height: "100%",
            }}
          >
            <CardMedia component="img" image={board.img_url} sx={{ height: 200 }} />
            <CardContent>
              <Typography variant="h5">{board.title}</Typography>
              <Typography>{board.description}</Typography>
            </CardContent>
            <CardActions>
              <Button>
                View Board
              </Button>
              <Button onClick={() => console.log(`Deleting ${board.title}`)}>
                Delete board
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default App
