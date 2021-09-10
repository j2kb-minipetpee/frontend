import { useInfiniteQuery, useMutation, useQuery } from 'react-query';
import { QueryKey } from '@/lib/constants';
import {
  AddFanCommentRequest,
  AddFanCommentResponse,
  DeleteFanCommentRequest,
  EditFanCommentRequest,
  EditFanCommentResponse,
  GetFanCommentsResponse,
  GetHomeResponse,
} from '@/lib/model';
import { HomeRepository } from '@/lib/repository';

export const useGetHomeDataQuery = (homepeeId: number) => {
  return useQuery<GetHomeResponse, Error>([QueryKey.GetHomeData, homepeeId], () => HomeRepository.getHomeData(homepeeId));
};

export const useGetFanCommentsQuery = (homepeeId: number) => {
  return useInfiniteQuery<GetFanCommentsResponse, Error>(
    [QueryKey.GetHomeData, homepeeId],
    ({ pageParam = { page: 0, size: 5 } }) => HomeRepository.getFanComments({ ...pageParam, homepeeId }),
    {
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

export const useAddFanCommentsMutation = () => {
  return useMutation<AddFanCommentResponse, Error, AddFanCommentRequest>(({ homepeeId, content, memberId }) =>
    HomeRepository.addFanComments({ homepeeId, content, memberId }),
  );
};

export const useEditFanCommentsMutation = () => {
  return useMutation<EditFanCommentResponse, Error, EditFanCommentRequest>(({ homepeeId, content, memberId }) =>
    HomeRepository.editFanComments({ homepeeId, content, memberId }),
  );
};

export const useDeleteFanCommentsMutation = () => {
  return useMutation<void, Error, DeleteFanCommentRequest>(({ id, homepeeId }) => HomeRepository.deleteFanComments({ homepeeId, id }));
};
