import Typography from '@mui/material/Typography'
import logo from 'assets/logo.svg'

type Props = {}
function Logo({}: Props) {
    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="" />
        </Typography>
    )
}
export default Logo
