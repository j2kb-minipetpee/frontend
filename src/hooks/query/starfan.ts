import { useMutation, useQuery } from 'react-query';
import { QueryKey } from '../../lib/constants';
import { GetMyFansResponse, GetMyStarsResponse, StarRequest, UnstarRequest } from '../../lib/model';
import { StarFanRepository } from '../../lib/repository';

export const useGetMyStarsQuery = () => {
  return useQuery<GetMyStarsResponse, Error>(QueryKey.GetMyStarsData, () => StarFanRepository.getMyStar());
};

export const useGetMyFansQuery = () => {
  return useQuery<GetMyFansResponse, Error>(QueryKey.GetMyFansData, () => StarFanRepository.getMyFan());
};

export const useStar = () => {
  return useMutation<void, Error, StarRequest>(({ starId }) => StarFanRepository.star({ starId }));
};

export const useUnStart = () => {
  return useMutation<void, Error, UnstarRequest>(({ starId }) => StarFanRepository.unStar({ starId }));
};
