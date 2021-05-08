import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(10),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    currencyInput: {
      minWidth: 'calc(75% - 20px)',
      marginRight: 20
    },
    currencyType: {
      minWidth: '25%'
    },
    cryptoInputBox: {
      marginBottom: 20
    },
    table: {
      minWidth: 650,
    },
    currencyImg: {
      width: 24,
      heigth: 24
    }
  }),
);

export default useStyles;