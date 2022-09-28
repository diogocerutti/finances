import { Grid, Typography } from '@mui/material'

export function Values() {
  return (
    <Grid
      item
      columnGap={2}
      sx={{ position: 'relative', bottom: 68 }}
      display="flex"
      flexDirection={{ lg: 'row', md: 'row', sm: 'row', xs: 'column' }}
    >
      <Grid
        item
        width={{ lg: '352px', md: '286px', sm: '186px', xs: '352px' }}
        sx={{
          background: 'white',
          borderRadius: 1,

          height: '136px'
        }}
        justifyContent="center"
        display="flex"
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
        width={{ lg: '352px', md: '286px', sm: '186px', xs: '352px' }}
        sx={{
          background: 'white',
          borderRadius: 1,
          height: '136px'
        }}
        justifyContent="center"
        display="flex"
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
        width={{ lg: '352px', md: '286px', sm: '186px', xs: '352px' }}
        sx={{
          background: 'green',
          borderRadius: 1,
          height: '136px'
        }}
        justifyContent="center"
        display="flex"
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
