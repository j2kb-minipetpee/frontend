import { Comment, PagableData } from '@/lib/model';
import { useInfiniteQuery, useMutation, useQuery } from 'react-query';
import CommentRepository from '@/lib/repository/CommentRepository';
import { QueryKey } from '@/lib/constants';

export interface AddCommentRequest {
  homepeeId: number;
  postId: number;
  member: {
    id: number;
    name: string;
  };
  content: string;
}
export interface GetCommentRequest {
  homepeeId: number;
  postId: number;
  pageParam?: {
    size: number;
    page: number;
  };
}
export type GetCommentResponse = PagableData<Comment[]>;
export type AddCommentResponse = Comment;

export interface DeleteCommentRequest {
  homepeeId: number;
  postId: number;
  commentId: number;
}

export const useGetCommentQuery = ({ homepeeId, postId }: GetCommentRequest) => {
  return useInfiniteQuery<GetCommentResponse, Error>(
    [QueryKey.GetComment, homepeeId, postId],
    ({ pageParam = { page: 0, size: 3 } }) => CommentRepository.getComment({ homepeeId, postId, pageParam }),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nowPage = Math.ceil(allPages.flatMap((data) => data.content).length / 3);
        console.log('now Page!!!', nowPage);
        if (lastPage.page.totalPages > nowPage) {
          return { page: nowPage, size: 3 };
        }
        return;
      },
    },
  );
};

export const useAddCommentMutation = () => {
  return useMutation<AddCommentResponse, Error, AddCommentRequest>(({ homepeeId, postId, member, content }) =>
    CommentRepository.addComment({ homepeeId, postId, member, content }),
  );
};

export const useDeleteCommentMutation = () => {
  return useMutation<void, Error, DeleteCommentRequest>(({ homepeeId, postId, commentId }) =>
    CommentRepository.deleteComment({ homepeeId, postId, commentId }),
  );
};
