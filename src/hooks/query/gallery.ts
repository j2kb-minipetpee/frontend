import { useInfiniteQuery, useMutation, useQuery } from 'react-query';
import { QueryKey } from '../../lib/constants';
import {
  AddGalleryPostRequest,
  AddGalleryPostResponse,
  DeleteGalleryPostRequest,
  EditGalleryPostRequest,
  EditGalleryPostResponse,
  GetGalleryPagablePostResponse,
  GetGalleryPagablePostRequest,
  GetGalleryTargetPostRequest,
  GetGalleryTargetPostResponse,
} from '../../lib/model';
import { GalleryRepository } from '../../lib/repository';

export const useGetGalleryPostQuery = ({ homepeeId }: GetGalleryPagablePostRequest) => {
  return useInfiniteQuery<GetGalleryPagablePostResponse, Error>(
    [QueryKey.GetGalleryPagablePost, homepeeId],
    ({ pageParam = { page: 0, size: 4 } }) => GalleryRepository.getGalleryPagablePost({ homepeeId, pageParam }),
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

export const useGetGalleryTargetPostQuery = ({ homepeeId, postId }: GetGalleryTargetPostRequest) => {
  return useQuery<GetGalleryTargetPostResponse, Error>([QueryKey.GetGalleryTargetPost, homepeeId, postId], () =>
    GalleryRepository.getGalleryAllPost({ homepeeId, postId }),
  );
};

export const useAddGalleryPostMutation = () => {
  return useMutation<AddGalleryPostResponse, Error, AddGalleryPostRequest>(({ homepeeId, title, images }) =>
    GalleryRepository.addGalleryPost({ homepeeId, title, images }),
  );
};

export const useEditGalleryPostMutation = () => {
  return useMutation<EditGalleryPostResponse, Error, EditGalleryPostRequest>(({ homepeeId, id, title, images }) =>
    GalleryRepository.editGalleryPost({ homepeeId, id, title, images }),
  );
};

export const useDeleteGalleryPostMutation = () => {
  return useMutation<void, Error, DeleteGalleryPostRequest>(({ homepeeId, postId }) => GalleryRepository.deleteGalleryPost({ homepeeId, postId }));
};
