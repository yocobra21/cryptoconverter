import React from 'react'

import { observer, inject } from 'mobx-react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { TCoin } from '../../types';
import CurrenciesStore from '../../stores/currenciesStore';


interface ICryptoTable {
  classes: any;
  currenciesStore?: CurrenciesStore;
}

const CryptoTable = inject('currenciesStore')(observer(({ classes, currenciesStore }: ICryptoTable) => {

    const items: TCoin[] = currenciesStore!.getItems;

    React.useEffect(() => {
      if (currenciesStore) {
        currenciesStore.fetchCoins();
      }
    }, []);

    return (
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="left">FullName</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Volume 24h</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!items.length ? 'loading...' : items.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="left">
                    <img className={classes.currencyImg} src={row.image} alt="coin icon" />
                  </TableCell>
                  <TableCell align="left">{row.fullName}</TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">$ {row.price}</TableCell>
                  <TableCell align="left">$ {row.volume24hour}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  }))


export default CryptoTable;