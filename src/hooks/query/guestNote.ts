import { QueryKey } from '@/lib/constants';
import { AddGuestNoteRequest, AddGuestNoteResponse, DeleteGuestNoteRequest, EditGuestNoteRequest, GetGuestNotesResponse } from '@/lib/model';
import GuestNoteRepository from '@/lib/repository/GuestNoteRepository';
import { useInfiniteQuery, useMutation } from 'react-query';

export const useGetGuestNoteQuery = (homepeeId: number, enabled?: boolean) => {
  return useInfiniteQuery<GetGuestNotesResponse, Error>(
    [QueryKey.GetGuestNotes, homepeeId],
    ({ pageParam = { page: 0, size: 5 } }) => GuestNoteRepository.getGuestNotes({ homepeeId, ...pageParam }),
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

export const useAddGuestNoteMutation = () => {
  return useMutation<AddGuestNoteResponse, Error, AddGuestNoteRequest>(({ homepeeId, content, memberId, visible }) =>
    GuestNoteRepository.addGuestNote({ homepeeId, content, memberId, visible }),
  );
};

export const useEditGuestNoteMutation = () => {
  return useMutation<void, Error, EditGuestNoteRequest>(({ homepeeId, content, guestNoteId, memberId, visible }) =>
    GuestNoteRepository.editGuestNote({ homepeeId, content, guestNoteId, memberId, visible }),
  );
};

export const useDeleteGuestNoteMutation = () => {
  return useMutation<void, Error, DeleteGuestNoteRequest>(({ homepeeId, guestNoteId }) => GuestNoteRepository.deleteGuestNote({ homepeeId, guestNoteId }));
};
