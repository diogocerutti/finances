import PaidIcon from '@mui/icons-material/Paid'
import { Button, Grid, Typography } from '@mui/material'

export function Header() {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      sx={{
        background: '#5429CC',
        height: '212px',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Grid
        item
        sx={{
          mt: 4
        }}
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        width={{ lg: '1120px', md: '620px', sm: '320px' }}
      >
        <Grid display="flex" alignItems="center">
          <Grid item sx={{ mr: 1 }}>
            <PaidIcon sx={{ color: '#33CC95', fontSize: '3rem' }} />
          </Grid>
          <Grid item>
            <Typography
              color={'white'}
              sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}
            >
              dt money
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            sx={{
              background: '#6933FF',
              color: 'white',
              fontSize: '16px',
              width: '195px',
              height: '48px'
            }}
          >
            Nova transação
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}
