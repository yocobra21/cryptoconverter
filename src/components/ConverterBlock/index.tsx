import React from 'react'

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';

interface IConverterBlock {
    classes: any
}

const ConverterBlock = ({classes}: IConverterBlock) => {
    return (
        <div>
            <Paper className={classes.paper}>
              <div className={classes.cryptoInputBox}>
                <FormControl className={classes.currencyInput}>
                  <TextField label="Amount" />
                </FormControl>
                <FormControl className={classes.currencyType}>
                  <InputLabel>Currency</InputLabel>
                  <Select
                    value={10}
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className={classes.cryptoInputBox}>
                <FormControl className={classes.currencyInput}>
                  <TextField label="Amount" />
                </FormControl>
                <FormControl className={classes.currencyType}>
                  <InputLabel>Currency</InputLabel>
                  <Select
                    value={10}
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <Typography variant="h5" component="h5">
                1111 usd
              </Typography>

            </Paper>
        </div>
    )
}

export default ConverterBlock;