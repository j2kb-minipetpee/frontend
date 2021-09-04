import { useInfiniteQuery } from 'react-query';
import { QueryKey } from '@/lib/constants';
import { GetPopularPostsResponse, SearchMembersResponse, SearchPostsResponse } from '@/lib/model';
import { MainRepository } from '@/lib/repository';

export const useGetPopularPostsQuery = (enabled?: boolean) => {
  return useInfiniteQuery<GetPopularPostsResponse, Error>(
    [QueryKey.GetPopularPosts],
    ({ pageParam = { page: 0, size: 5 } }) => MainRepository.getPopularPosts(pageParam),
    {
      enabled,
      getNextPageParam: (lastPage, allPages) => {
        // MEMO(geonwoo): 나눈 값으로 하여 1페이지이지만 백엔드에서는 0 부터 시작하니 그대로 다시 요청하면 +1 한 다음 값이 된다.
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

export const useSearchMembersQuery = (memberName: string, enabled?: boolean) => {
  return useInfiniteQuery<SearchMembersResponse, Error>(
    [QueryKey.SearchMembers, memberName],
    ({ pageParam = { page: 0, size: 5 } }) => MainRepository.searchMembers({ memberName, ...pageParam }),
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

export const useSearchPostsQuery = (postTitle: string, enabled?: boolean) => {
  return useInfiniteQuery<SearchPostsResponse, Error>(
    [QueryKey.SearcgPosts, postTitle],
    ({ pageParam = { page: 0, size: 5 } }) => MainRepository.searchPosts({ postTitle, ...pageParam }),
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
