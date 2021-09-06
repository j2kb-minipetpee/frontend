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

export const useGetGalleryPostQuery = (homepeeId: number) => {
  return useQuery<GetGalleryPostResponse, Error, GetGalleryPostResponse>([QueryKey.GetGalleryPost, homepeeId], () =>
    GalleryRepository.getGalleryPost({ homepeeId }),
  );
};

export const useAddGalleryPostMutation = () => {
  return useMutation<AddGalleryPostResponse, Error, AddGalleryPostRequest>(({ homepeeId, title, images }) =>
    GalleryRepository.addGalleryPost({ homepeeId, title, images }),
  );
};

export const useAddGalleryCommentMutation = () => {
  return useMutation<AddGalleryCommentResponse, Error, AddGalleryCommentRequest>(({ homepeeId, postId, memberId, content }) =>
    GalleryRepository.addGalleryComment({ homepeeId, postId, memberId, content }),
  );
};

export const useEditGalleryPostMutation = () => {
  return useMutation<EditGalleryPostResponse, Error, EditGalleryPostRequest>(({ homepeeId, id, title, image, visible }) =>
    GalleryRepository.editGalleryPost({ homepeeId, id, title, image, visible }),
  );
};

export const useDeleteGalleryPostMutation = () => {
  return useMutation<void, Error, DeleteGalleryPostRequest>(({ homepeeId, postId }) => GalleryRepository.deleteGalleryPost({ homepeeId, postId }));
};

export const useDeleteGalleryCommentMutation = () => {
  return useMutation<void, Error, DeleteGalleryCommentRequest>(({ homepeeId, postId, commentId }) =>
    GalleryRepository.deleteGalleryComment({ homepeeId, postId, commentId }),
  );
};
