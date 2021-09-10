import { useInfiniteQuery, useMutation } from 'react-query';
import { QueryKey } from '@/lib/constants';
import { GetFansResponse, GetStarsResponse, StarRequest, UnstarRequest } from '@/lib/model';
import { StarFanRepository } from '@/lib/repository';

export const useGetStarsQuery = (memberId: number, enabled = false) => {
  return useInfiniteQuery<GetStarsResponse, Error>(
    QueryKey.GetStarsData,
    ({ pageParam = { page: 0, size: 5 } }) => StarFanRepository.getStars({ memberId, ...pageParam }),
    {
      enabled,
      getNextPageParam: (lastPage, allPages) => {
        const nowPage = Math.ceil(allPages.flatMap((data) => data.content).length / 5);

        if (lastPage.page.totalPages > nowPage) {
          return {
            page: nowPage,
            size: 5,
          };
        }

        return;
      },
    },
  );
};

export const useGetFansQuery = (memberId: number, enabled = false) => {
  return useInfiniteQuery<GetFansResponse, Error>(
    QueryKey.GetStarsData,
    ({ pageParam = { page: 0, size: 5 } }) => StarFanRepository.getFans({ memberId, ...pageParam }),
    {
      enabled,
      getNextPageParam: (lastPage, allPages) => {
        const nowPage = Math.ceil(allPages.flatMap((data) => data.content).length / 5);

        if (lastPage.page.totalPages > nowPage) {
          return {
            page: nowPage,
            size: 5,
          };
        }

        return;
      },
    },
  );
};

export const useStarMutation = () => {
  return useMutation<void, Error, StarRequest>(({ starId }) => StarFanRepository.star({ starId }));
};

export const useUnStarMutation = () => {
  return useMutation<void, Error, UnstarRequest>(({ starId }) => StarFanRepository.unStar({ starId }));
};
