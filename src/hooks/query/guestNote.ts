import { QueryKey } from '@/lib/constants';
import { AddGuestNoteRequest, AddGuestNoteResponse, DeleteGuestNoteRequest, EditGuestNoteRequest, GetGuestNotesResponse } from '@/lib/model';
import GuestNoteRepository from '@/lib/repository/GuestNoteRepository';
import { useInfiniteQuery, useMutation } from 'react-query';

export const useGetGuestNoteQuery = (homepeeId: number, enabled?: boolean) => {
  return useInfiniteQuery<GetGuestNotesResponse, Error>(
    [QueryKey.GetGuestNotes],
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

export const useAddGeustNoteMutation = () => {
  return useMutation<AddGuestNoteResponse, Error, AddGuestNoteRequest>(({ homepeeId, content, memberId, visible }) =>
    GuestNoteRepository.addGuestNote({ homepeeId, content, memberId, visible }),
  );
};

export const useEditGeustNoteMutation = () => {
  return useMutation<void, Error, EditGuestNoteRequest>(({ id, homepeeId, content, guestNoteId, memberId, visible }) =>
    GuestNoteRepository.editGuestNote({ id, homepeeId, content, guestNoteId, memberId, visible }),
  );
};

export const useDeleteGeustNoteMutation = () => {
  return useMutation<void, Error, DeleteGuestNoteRequest>(({ homepeeId, guestNoteId }) => GuestNoteRepository.deleteGuestNote({ homepeeId, guestNoteId }));
};
