import { useMutation, useQuery } from 'react-query';
import { QueryKey } from '../../lib/constants';
import {
  AddNeighborCommentRequest,
  AddNeighborCommentResponse,
  DeleteNeighborCommentRequest,
  EditNeighborCommentRequest,
  EditNeighborCommentResponse,
  GetHomeResponse,
} from '../../lib/model';
import { HomeRepository } from '../../lib/repository';

export const useGetHomeDataQuery = (hompeeId: number) => {
  return useQuery<GetHomeResponse, Error>([QueryKey.GetHomeData, hompeeId], () => HomeRepository.getHomeData(hompeeId));
};

export const useAddNeighborComments = () => {
  return useMutation<AddNeighborCommentResponse, Error, AddNeighborCommentRequest>(({ userId, content, memberId }) =>
    HomeRepository.addNeighborComments({ userId, content, memberId }),
  );
};

export const useEditNeighborComments = () => {
  return useMutation<EditNeighborCommentResponse, Error, EditNeighborCommentRequest>(({ userId, content, memberId }) =>
    HomeRepository.editNeighborComments({ userId, content, memberId }),
  );
};

export const useDeleteNeighborComments = () => {
  return useMutation<void, Error, DeleteNeighborCommentRequest>(({ id, userId }) => HomeRepository.deleteNeighborComments({ userId, id }));
};
