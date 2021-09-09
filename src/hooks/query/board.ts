import { useInfiniteQuery, useMutation, useQuery } from 'react-query';
import { QueryKey } from '@/lib/constants';
import {
  AddBoardPostRequest,
  AddBoardPostResponse,
  DeleteBoardPostRequset,
  EditBoardPostRequest,
  EditBoardPostResponse,
  GetBoardPagablePostsRequest,
  GetBoardPagablePostsResponse,
  GetBoardTargetPostRequest,
  GetBoardTargetPostResponse,
} from '@/lib/model';
import { BoardRepository } from '@/lib/repository';

export const useGetBoardPostsQuery = ({ homepeeId }: GetBoardPagablePostsRequest) => {
  return useInfiniteQuery<GetBoardPagablePostsResponse, Error>(
    [QueryKey.GetBoardPageablePosts, homepeeId],
    ({ pageParam = { page: 0, size: 4 } }) => BoardRepository.getBoardPosts({ homepeeId, pageParam }),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nowPage = Math.ceil(allPages.flatMap((data) => data.content).length / 4);
        if (lastPage.page.totalPages > nowPage) {
          return {
            page: nowPage,
            size: 4,
          };
        }
        return;
      },
    },
  );
};

export const useGetBoardPostQuery = ({ homepeeId, postId }: GetBoardTargetPostRequest) => {
  return useQuery<GetBoardTargetPostResponse, Error>(QueryKey.GetBoardTargetPost, () => BoardRepository.getBoardPost({ homepeeId, postId }));
};

export const useAddBoardPostMutation = () => {
  return useMutation<AddBoardPostResponse, Error, AddBoardPostRequest>(({ title, content, image, visible, homepeeId }) =>
    BoardRepository.addBoardPost({ title, content, image, visible, homepeeId }),
  );
};

export const useEditBoardPostMutation = () => {
  return useMutation<EditBoardPostResponse, Error, EditBoardPostRequest>(({ title, content, image, homepeeId, postId }) =>
    BoardRepository.editBoardPost({ title, content, image, homepeeId, postId }),
  );
};

export const useDeleteBoardPostMutation = () => {
  return useMutation<void, Error, DeleteBoardPostRequset>(({ homepeeId, postId }) => BoardRepository.deleteBoardPost({ homepeeId, postId }));
};
