import { useQuery, useMutation } from 'react-query';
import { QueryKey } from '../../lib/constants';
import { EditSettingRequest, EditSettingResponse, GetSettingRequest, GetSettingResponse } from '../../lib/model';
import { SettingRepository } from '../../lib/repository';

export const useGetProfilesQuery = ({ homepeeId }: string) => {
  return useQuery<GetSettingResponse, Error, GetSettingRequest>([QueryKey.GetSettingData, homepeeId], ({ homepeeId }) =>
    SettingRepository.getProfiles({ homepeeId }),
  );
};

export const useEditProfilesQuery = () => {
    return useMutation<EditSettingResponse,Error,EditSettingRequest>(({homepeeId,profile,tabs})=>SettingRepository.editProfiles({homepeeId,profile,tabs}))
};
