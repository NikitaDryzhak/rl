import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const playersApi = createApi({
    reducerPath: 'playersApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://rocket-league-retards.herokuapp.com/',
    }),
    tagTypes: ['Player'],
    endpoints: builder => ({
      getPlayers: builder.query({
        query: () => `/`,
        providesTags: ['Player'],
      }),
      patchPlayer: builder.mutation({
        query: ({id, name, games, wins, loses, goalsScored, goalsMissed, lastGames, photo}) => ({
          url: `/${id}`,
          method: 'PATCH',
          body: {name, games, wins, loses, goalsScored, goalsMissed, lastGames, photo},
        }),
        invalidatesTags: ['Player'],
      }),
    }),
  });

  
  export const {
    useGetPlayersQuery,
    usePatchPlayerMutation,
  } = playersApi;
