import { makeStyles } from "@material-ui/core/styles";

export default makeStyles( () => ({
    appBar :{
        borderRadius: 15,
        margin: '20px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        color: 'rgba(0, 183, 255, 1)',
        cursor: 'pointer'
    },
    image: {
        marginLeft: '15px',
        width: '30px',
        height: '30px'
    },
}));