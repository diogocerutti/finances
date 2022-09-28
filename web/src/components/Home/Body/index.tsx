import { Grid, Typography } from '@mui/material'

export function Body() {
  return (
    <Grid
      container
      columnGap={2}
      justifyContent="center"
      sx={{ background: '#E5E5E5' }}
    >
      <Grid
        item
        sx={{
          background: 'white',
          borderRadius: 1,
          width: '352px',
          height: '136px',
          position: 'relative',
          bottom: 68
        }}
        justifyContent="center"
        display="flex"
        flexDirection={{ lg: 'column', md: 'row', sm: 'column', xs: 'row' }}
      >
        <Typography
          sx={{
            alignSelf: 'center'
          }}
        >
          aaaasd
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          background: 'white',
          borderRadius: 1,
          width: '352px',
          height: '136px',
          position: 'relative',
          bottom: 68
        }}
        justifyContent="center"
        display="flex"
        flexDirection={{ lg: 'column', md: 'row', sm: 'column', xs: 'row' }}
      >
        <Typography
          sx={{
            alignSelf: 'center'
          }}
        >
          aaa
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          background: 'green',
          borderRadius: 1,
          width: '352px',
          height: '136px',
          position: 'relative',
          bottom: 68
        }}
        justifyContent="center"
        display="flex"
        flexDirection={{ lg: 'row', md: 'row', sm: 'column', xs: 'row' }}
      >
        <Typography
          sx={{
            alignSelf: 'center'
          }}
        >
          aaa
        </Typography>
      </Grid>
    </Grid>
  )
}
