import { List, ListItem, ListItemText} from "@mui/material"
import { Box } from "@mui/system"

const navListDrawer = () => {
  return (
    <Box sx={{ width: 250}}>
      <nav>
        <List>
          <ListItem>
            <ListItemText primary="Inbox" />
          </ListItem>
        </List>
      </nav>
    </Box>
  )
}

export default navListDrawer