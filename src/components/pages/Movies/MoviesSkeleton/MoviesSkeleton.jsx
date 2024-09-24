import React from 'react';
import { useMediaQuery, Box, Skeleton, Stack } from '@mui/material';

const MoviesSkeleton = () => {
  const isDesktop = useMediaQuery("(min-width:1200px)")
  const isLargeTablet = useMediaQuery("(min-width:900px)")
  const isSmallTablet = useMediaQuery("(min-width:768px)")
  const isLargeMobile = useMediaQuery("(min-width:620px)")
  const isSmallMobile = useMediaQuery("(min-width:375px)")

  const storeSizes = {
    width: isDesktop ? 208 :
      isLargeTablet ? 260 :
        isSmallTablet ? 256 :
          isLargeMobile ? 460 :
            isSmallMobile ? 305 :
              180,
    height: isDesktop ? 320 :
      isLargeTablet ? 400 :
        isSmallTablet ? 392 :
          isLargeMobile ? 606 :
            isSmallMobile ? 465 :
              280,
  }

  const calculateCardsQuantity = () => {
    if (isDesktop) return 5
    if (isLargeTablet) return 3
    if (isSmallTablet) return 2
    if (isLargeMobile) return 1
    return 1
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
                width="310px"
                height="30px" />
              <Stack direction="row" justifyContent="center" gap={2}>
                {new Array(calculateCardsQuantity()).fill(null).map((_, i) => {
                  return (
                    <Skeleton
                      key={i}
                      animation="wave"
                      variant="rectangular"
                      width={storeSizes.width}
                      height={storeSizes.height} />
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