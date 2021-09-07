import { QueryKey } from '@/lib/constants';
import { AddGuestBookRequest, AddGuestBookResponse, DeleteGuestBookRequest, EditGuestBookRequest, GetGuestBooksResponse } from '@/lib/model';
import GuestBookRepository from '@/lib/repository/GuestBookRepository';
import { useInfiniteQuery, useMutation } from 'react-query';

export const useGetGuestBookQuery = (homepeeId: number, enabled?: boolean) => {
  return useInfiniteQuery<GetGuestBooksResponse, Error>(
    [QueryKey.GetGuestBooks, homepeeId],
    ({ pageParam = { page: 0, size: 5 } }) => GuestBookRepository.getGuestBooks({ homepeeId, ...pageParam }),
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

export const useAddGuestBookMutation = () => {
  return useMutation<AddGuestBookResponse, Error, AddGuestBookRequest>(({ homepeeId, content, memberId, visible }) =>
    GuestBookRepository.addGuestBook({ homepeeId, content, memberId, visible }),
  );
};

export const useEditGuestBookMutation = () => {
  return useMutation<void, Error, EditGuestBookRequest>(({ homepeeId, content, guestBookId, memberId, visible }) =>
    GuestBookRepository.editGuestBook({ homepeeId, content, guestBookId, memberId, visible }),
  );
};

export const useDeleteGuestBookMutation = () => {
  return useMutation<void, Error, DeleteGuestBookRequest>(({ homepeeId, guestBookId }) => GuestBookRepository.deleteGuestBook({ homepeeId, guestBookId }));
};
