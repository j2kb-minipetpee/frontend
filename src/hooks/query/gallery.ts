import { useMutation, useQuery } from 'react-query';
import { QueryKey } from '../../lib/constants';
import {
  AddGalleryCommentRequest,
  AddGalleryCommentResponse,
  AddGalleryPostRequest,
  AddGalleryPostResponse,
  DeleteGalleryCommentRequest,
  DeleteGalleryPostRequest,
  EditGalleryPostRequest,
  EditGalleryPostResponse,
  GetGalleryPostResponse,
} from '../../lib/model';
import { GalleryRepository } from '../../lib/repository';

export const useGetGalleryPostQuery = ({ homepeeId }: string) => {
  return useQuery<GetGalleryPostResponse, Error, GetGalleryPostResponse>([QueryKey.GetGalleryPost, homepeeId], ({ homepeeId }) =>
    GalleryRepository.getGalleryPost(homepeeId),
  );
};

export const useAddGalleryPost = () => {
  return useMutation<AddGalleryPostResponse, Error, AddGalleryPostRequest>(({ homepeeId, title, images, visible }) =>
    GalleryRepository.addGalleryPost({ homepeeId, title, images, visible }),
  );
};

export const useAddGalleryComment = () => {
  return useMutation<AddGalleryCommentResponse, Error, AddGalleryCommentRequest>(({ homepeeId, postId, memberId, content }) =>
    GalleryRepository.addGalleryComment({ homepeeId, postId, memberId, content }),
  );
};

export const useEditGalleryPost = () => {
  return useMutation<EditGalleryPostResponse, Error, EditGalleryPostRequest>(({ homepeeId, id, title, image, visible }) =>
    GalleryRepository.editGalleryPost({ homepeeId, id, title, image, visible }),
  );
};

export const useDeleteGalleryPost = () => {
  return useMutation<null, Error, DeleteGalleryPostRequest>(({ homepeeId, postId }) => GalleryRepository.deleteGalleryPost({ homepeeId, postId }));
};

export const useDeleteGalleryComment = () => {
  return useMutation<null, Error, DeleteGalleryCommentRequest>(({ homepeeId, postId, commentId }) =>
    GalleryRepository.deleteGalleryPost({ homepeeId, postId, commentId }),
  );
};
