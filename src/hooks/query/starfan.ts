import { useMutation, useQuery } from 'react-query';
import { QueryKey } from '../../lib/constants';
import { GetMyFansResponse, GetMyStarsResponse } from '../../lib/model';
import { StarFanRepository } from '../../lib/repository';

export const useGetMyStarsQuery = () => {
  return useQuery<GetMyStarsResponse, Error>(QueryKey.GetMyStarsData, () => StarFanRepository.getMyStar());
};

export const useGetMyFansQuery = () => {
  return useQuery<GetMyFansResponse, Error>(QueryKey.GetMyFansData, () => StarFanRepository.getMyFan());
};

export const useStar = () => {
  return useMutation<GetMyStarsResponse, Error>(({ starId }) => StarFanRepository.star(starId));
};
export const useUnStart = () => {
  return useMutation<GetMyFansResponse, Error>(({ starId }) => StarFanRepository.unStar(starId));
};
