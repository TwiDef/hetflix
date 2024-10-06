import React from 'react';
import { useParams } from 'react-router-dom';
import {
  useGetMovieDetailQuery,
  useGetSequelsAndPrequelsQuery,
  useGetStaffQuery
} from './../../../services/kinopoiskApi';

import Loader from './../../ui/Loader/Loader';
import ErrorMessage from './../../ui/ErrorMessage/ErrorMessage';

const MovieDetail = () => {
  const { id } = useParams()

  const responseMovie = useGetMovieDetailQuery(id)
  const responseStaff = useGetStaffQuery(id)
  const responseSequelsAndPrequels = useGetSequelsAndPrequelsQuery(id)

  if (responseMovie.isLoading ||
    responseStaff.isLoading ||
    responseSequelsAndPrequels && responseSequelsAndPrequels.isLoading) {
    return <Loader />
  }

  if (responseMovie.isError ||
    responseStaff.isError ||
    !responseSequelsAndPrequels && responseSequelsAndPrequels.isError) {
    return <ErrorMessage />
  }

  console.log(responseSequelsAndPrequels.data)


  return (
    <>
      <img width={300} src={responseMovie.data ? responseMovie.data.posterUrlPreview : ""} />
    </>
  );
};

export default MovieDetail;