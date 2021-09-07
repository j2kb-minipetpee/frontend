import { useMutation, useQuery } from 'react-query';
import { QueryKey } from '@/lib/constants';
import {
  AddBoardCommentRequest,
  AddBoardCommentResponse,
  AddBoardPostRequest,
  AddBoardPostResponse,
  DeleteBoardCommentRequest,
  DeleteBoardPostRequset,
  EditBoardPostRequest,
  EditBoardPostResponse,
  GetBoardPostRequest,
  GetBoardPostResponse,
  GetBoardPostsRequest,
  GetBoardPostsResponse,
} from '@/lib/model';
import { BoardRepository } from '@/lib/repository';

export const useGetBoardPostsQuery = ({ homepeeId }: GetBoardPostsRequest) => {
  return useQuery<GetBoardPostsResponse, Error>([QueryKey.GetBoardPosts, homepeeId], () => BoardRepository.getBoardPosts({ homepeeId }));
};

export const useGetBoardPostQuery = ({ homepeeId, postId }: GetBoardPostRequest) => {
  return useQuery<GetBoardPostResponse, Error>(QueryKey.GetBoardPost, () => BoardRepository.getBoardPost({ homepeeId, postId }));
};

export const useAddBoardPostMutation = () => {
  return useMutation<AddBoardPostResponse, Error, AddBoardPostRequest>(({ title, content, image, visible, homepeeId }) =>
    BoardRepository.addBoardPost({ title, content, image, visible, homepeeId }),
  );
};

export const useAddBoardComment = () => {
  return useMutation<AddBoardCommentResponse, Error, AddBoardCommentRequest>(({ homepeeId, postId, memberId, content }) =>
    BoardRepository.addBoardComment({ homepeeId, postId, memberId, content }),
  );
};

export const useEditBoardPostMutation = () => {
  return useMutation<EditBoardPostResponse, Error, EditBoardPostRequest>(({ id, title, content, image, homepeeId, postId }) =>
    BoardRepository.editBoardPost({ id, title, content, image, homepeeId, postId }),
  );
};

//null 부분 괜찮은지...?
export const useDeleteBoardPost = () => {
  return useMutation<void, Error, DeleteBoardPostRequset>(({ homepeeId, postId }) => BoardRepository.deleteBoardPost({ homepeeId, postId }));
};

export const useDeleteBoardComment = () => {
  return useMutation<void, Error, DeleteBoardCommentRequest>(({ homepeeId, commentId }) => BoardRepository.deleteBoardComment({ homepeeId, commentId }));
};
