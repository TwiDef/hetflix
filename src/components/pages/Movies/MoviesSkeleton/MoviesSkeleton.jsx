import React from 'react';
import { useMediaQuery, Box, Skeleton, Stack } from '@mui/material';

const MoviesSkeleton = () => {
  const isDesktop = useMediaQuery("(min-width:1200px)")
  const isLargeTablet = useMediaQuery("(min-width:900px)")
  const isSmallTablet = useMediaQuery("(min-width:768px)")
  const isLargeMobile = useMediaQuery("(min-width:620px)")
  const isSmallMobile = useMediaQuery("(min-width:375px)")


  if (isDesktop) {
    return (
      <>
        {isDesktop &&
          <Box mb={2}>
            {new Array(5).fill(null).map((_, i) => {
              return (
                <React.Fragment key={i}>
                  <Skeleton
                    sx={{ mb: 2, mt: 2 }}
                    animation="wave"
                    variant="rectangular"
                    width="310px"
                    height="40px" />
                  <Stack direction="row" justifyContent="center" gap={2}>
                    {new Array(5).fill(null).map((_, i) => {
                      return (
                        <Skeleton
                          key={i}
                          animation="wave"
                          variant="rectangular"
                          width={"208px"}
                          height={"320px"} />
                      )
                    })}
                  </Stack>
                </React.Fragment>
              )
            })}
          </Box>}
      </>
    )
  } else if (isLargeTablet) {
    return (
      <>
        {isLargeTablet &&
          <Box mb={2}>
            {new Array(5).fill(null).map((_, i) => {
              return (
                <React.Fragment key={i}>
                  <Skeleton
                    sx={{ mb: 2, mt: 2 }}
                    animation="wave"
                    variant="rectangular"
                    width="310px"
                    height="40px" />
                  <Stack direction="row" justifyContent="center" gap={2}>
                    {new Array(3).fill(null).map((_, i) => {
                      return (
                        <Skeleton
                          key={i}
                          animation="wave"
                          variant="rectangular"
                          width={"260px"}
                          height={"400px"} />
                      )
                    })}
                  </Stack>
                </React.Fragment>
              )
            })}
          </Box>}
      </>
    )
  } else if (isSmallTablet) {
    return (
      <>
        <Box mb={2}>
          {new Array(5).fill(null).map((_, i) => {
            return (
              <React.Fragment key={i}>
                <Skeleton
                  sx={{ mb: 2, mt: 2 }}
                  animation="wave"
                  variant="rectangular"
                  width="310px"
                  height="40px" />
                <Stack direction="row" justifyContent="center" gap={2}>
                  {new Array(2).fill(null).map((_, i) => {
                    return (
                      <Skeleton
                        key={i}
                        animation="wave"
                        variant="rectangular"
                        width={"256px"}
                        height={"392px"} />
                    )
                  })}
                </Stack>
              </React.Fragment>
            )
          })}
        </Box>
      </>
    )
  } else if (isLargeMobile) {
    return (
      <>
        <Box mb={2}>
          {new Array(5).fill(null).map((_, i) => {
            return (
              <React.Fragment key={i}>
                <Skeleton
                  sx={{ mb: 2, mt: 2 }}
                  animation="wave"
                  variant="rectangular"
                  width="310px"
                  height="40px" />
                <Stack direction="row" justifyContent="center" gap={2}>
                  {new Array(1).fill(null).map((_, i) => {
                    return (
                      <Skeleton
                        key={i}
                        animation="wave"
                        variant="rectangular"
                        width={"460px"}
                        height={"606px"} />
                    )
                  })}
                </Stack>
              </React.Fragment>
            )
          })}
        </Box>
      </>
    )
  } else if (isSmallMobile) {
    return (
      <>
        <Box mb={2}>
          {new Array(5).fill(null).map((_, i) => {
            return (
              <React.Fragment key={i}>
                <Skeleton
                  sx={{ mb: 2, mt: 2 }}
                  animation="wave"
                  variant="rectangular"
                  width="310px"
                  height="40px" />
                <Stack direction="row" justifyContent="center" gap={2}>
                  {new Array(1).fill(null).map((_, i) => {
                    return (
                      <Skeleton
                        key={i}
                        animation="wave"
                        variant="rectangular"
                        width={"305px"}
                        height={"465px"} />
                    )
                  })}
                </Stack>
              </React.Fragment>
            )
          })}
        </Box>
      </>
    )
  }

  return (
    <>
      <Box mb={2}>
        {new Array(5).fill(null).map((_, i) => {
          return (
            <React.Fragment key={i}>
              <Skeleton
                sx={{ mb: 2, mt: 2 }}
                animation="wave"
                variant="rectangular"
                width="240px"
                height="30px" />
              <Stack direction="row" justifyContent="center" gap={2}>
                {new Array(1).fill(null).map((_, i) => {
                  return (
                    <Skeleton
                      key={i}
                      animation="wave"
                      variant="rectangular"
                      width={"180px"}
                      height={"280px"} />
                  )
                })}
              </Stack>
            </React.Fragment>
          )
        })}
      </Box>
    </>
  )
};

export default MoviesSkeleton;