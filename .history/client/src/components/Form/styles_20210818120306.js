import {makeStyles} from '@babel/core/styles'

export default makeStyles ( (theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing
        }
    }
}))