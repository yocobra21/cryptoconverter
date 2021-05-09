import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { CryptoTable, ConverterBlock } from './components';
import useStyles from './styles';


// function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('i1', 159, 6.0, 24, 4.0),
//   createData('i2', 237, 9.0, 37, 4.3),
//   createData('i3', 262, 16.0, 24, 6.0),
//   createData('i4', 305, 3.7, 67, 4.3),
//   createData('i5', 356, 16.0, 49, 3.9),
// ];





function App() {

  const classes = useStyles();
  // const [allCoins, setAllCoins] = React.useState<TCoin[]>([]);

  // React.useEffect(() => {
  //  
  // }, []);



  return (
    <>
      <Container className={classes.root} maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={8}>

            <CryptoTable classes={classes}/>

          </Grid>
          <Grid item xs={4}>
            <ConverterBlock classes={classes} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
