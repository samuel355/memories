import { makeStyles } from "@material-ui/core/styles";
import { display, textAlign } from "@material-ui/system";

export default makeStyles( (theme) => {
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    smMargin: {
        margin: theme.spacing
    }
})